// Copyright 2015 Dawid Ciężarkiewicz <dpc@dpc.pw>
// See LICENSE-MPL2 file for more information.

//! Coroutine-based handler library for mio
//!
//! Using coroutines, an event-based mio model can be simplified to a set of routines, seamlessly
//! scheduled on demand in userspace.
//!
//! With `mioco` a coroutines can be used to simplify writing asynchronous io handilng in
//! synchronous fashion.

#![feature(result_expect)]
#![feature(reflect_marker)]
#![warn(missing_docs)]

extern crate mio;
extern crate coroutine;
extern crate nix;

use std::cell::RefCell;
use std::rc::Rc;
use mio::{TryRead, TryWrite, Token, Handler, EventLoop, EventSet};
use std::any::Any;
use std::marker::{PhantomData, Reflect};

/// Read/Write/Both
#[derive(Copy, Clone, Debug, Eq, PartialEq)]
pub enum RW {
    /// Read
    Read,
    /// Write
    Write,
    /// Any / Both (depends on context)
    Both,
}

impl RW {
    fn has_read(&self) -> bool {
        match *self {
            RW::Read | RW::Both => true,
            RW::Write => false,
        }
    }

    fn has_write(&self) -> bool {
        match *self {
            RW::Write | RW::Both => true,
            RW::Read => false,
        }
    }
}

/// Last Event
///
/// Read or Write + index of the handle
#[derive(Copy, Clone, Debug, Eq, PartialEq)]
pub struct LastEvent {
    idx : usize,
    rw : RW,
}

impl LastEvent {
    /// Index of the IO handle
    pub fn idx(&self) -> usize {
        self.idx
    }

    /// Was the event a read
    pub fn has_read(&self) -> bool {
        self.rw.has_read()
    }

    /// Was the event a write
    pub fn has_write(&self) -> bool {
        self.rw.has_write()
    }
}

/// State of `mioco` coroutine
#[derive(Copy, Clone, Debug, Eq, PartialEq)]
enum State {
    BlockedOn(RW),
    Running,
    Finished,
}

/// `mioco` can work on any type implementing this trait
pub trait Evented : mio::Evented + Any {
    /// Convert to &Any
    fn as_any(&self) -> &Any;
    /// Convert to &mut Any
    fn as_any_mut(&mut self) -> &mut Any;
}

impl<T> Evented for T
where T : mio::Evented+Reflect+'static {
    fn as_any(&self) -> &Any {
        self as &Any
    }

    fn as_any_mut(&mut self) -> &mut Any {
        self as &mut Any
    }
}

/// `mioco` coroutine
///
/// Referenced by IO running within it.
struct Coroutine {
    /// Coroutine of Coroutine itself. Stored here so it's available
    /// through every handle and `Coroutine` itself without referencing
    /// back
    coroutine : Option<coroutine::coroutine::Handle>,
    /// Current state
    state : State,
    /// Last event that resumed the coroutine
    last_event: LastEvent,

    /// All handles
    io : Vec<Rc<RefCell<IO>>>,

    /// Mask of handle indexes that we're blocked on
    blocked_on_mask : u32,
    registered_mask : u32,
}


impl Coroutine {

    fn reregister_blocked_on<H>(&mut self, event_loop: &mut EventLoop<H>)
        where H : Handler
    {

        let rw = match self.state {
            State::BlockedOn(rw) => rw,
            _ => return,
        };

//        for i in 0..32 {
        for i in 0..self.io.len() {
            if (self.blocked_on_mask & (1 << i)) != 0 {
                let io = self.io[i].borrow();
                io.reregister(event_loop, rw);
            } else if (self.registered_mask & (1 << i)) != 0 {
                let io = self.io[i].borrow();
                io.unreregister(event_loop);
            }
        }

        self.registered_mask = self.blocked_on_mask;
        self.blocked_on_mask = 0;
    }
}
/// Wrapped mio IO (mio::Evented+TryRead+TryWrite)
///
/// `Handle` is just a cloneable reference to this struct
struct IO {
    coroutine: Rc<RefCell<Coroutine>>,
    token: Token,
    idx : usize, /// Index in CoroutineHandle::handles
    io : Box<Evented+'static>,
    peer_hup: bool,
}

impl IO {
    /// Handle `hup` condition
    fn hup<H>(&mut self, _event_loop: &mut EventLoop<H>, _token: Token)
        where H : Handler {
            self.peer_hup = true;
        }

    /// Reregister oneshot handler for the next event
    fn reregister<H>(&self, event_loop: &mut EventLoop<H>, rw : RW)
        where H : Handler {

            let mut interest = mio::EventSet::none();

            if !self.peer_hup {
                interest = interest | mio::EventSet::hup();

                if rw.has_read() {
                    interest = interest | mio::EventSet::readable();
                }
            }

            if rw.has_write() {
                interest = interest | mio::EventSet::writable();
            }

            event_loop.reregister(
                &*self.io, self.token,
                interest, mio::PollOpt::edge() | mio::PollOpt::oneshot()
                ).ok().expect("reregister failed")
        }


    /// Un-reregister something we're not interested in anymore
    fn unreregister<H>(&self, event_loop: &mut EventLoop<H>)
        where H : Handler {
            let interest = mio::EventSet::none();

            event_loop.reregister(
                &*self.io, self.token,
                interest, mio::PollOpt::edge() | mio::PollOpt::oneshot()
                ).ok().expect("reregister failed")
        }

}

/// `mioco` wrapper over io associated with a given coroutine.
///
/// To be used to trigger events inside `mioco` coroutine. Create using
/// `Builder::io_wrap`.
///
/// It implements `readable` and `writable`, corresponding to original `mio::Handler`
/// methods. Call these from respective `mio::Handler`.
#[derive(Clone)]
pub struct IOHandle {
    inn : Rc<RefCell<IO>>,
}

/// `mioco` wrapper over io associated with a given coroutine.
///
/// Passed to closure function.
///
/// It implements standard library `Read` and `Write` traits that will
/// take care of blocking and unblocking coroutine when needed.
#[derive(Clone)]
pub struct TypedIOHandle<T> {
    inn : Rc<RefCell<IO>>,
    _t: PhantomData<T>,
}

impl<T> TypedIOHandle<T>
where T : Reflect+'static {

    /// Access the wrapped IO
    pub fn with_raw<F>(&self, f : F)
        where F : Fn(&T) {
        let io = &self.inn.borrow().io;
        f(io.as_any().downcast_ref::<T>().unwrap())
    }

    /// Access the wrapped IO as mutable
    pub fn with_raw_mut<F>(&mut self, f : F)
        where F : Fn(&mut T) {
        let mut io = &mut self.inn.borrow_mut().io;
        f(io.as_any_mut().downcast_mut::<T>().unwrap())
    }
}

impl IOHandle {
    /// Is this coroutine finishd
    pub fn is_finished(&self) -> bool {
        let co = &self.inn.borrow().coroutine;
        let co_b = co.borrow();
        co_b.state == State::Finished
    }

    /// Readable event handler
    ///
    /// This corresponds to `mio::Hnalder::readable()`.
    pub fn ready<H>(&mut self, event_loop: &mut EventLoop<H>, token: Token, events : EventSet)
    where H : Handler {

        let my_idx = {
            let inn = self.inn.borrow();
            let idx = inn.idx;
            inn.coroutine.borrow_mut().blocked_on_mask &= !(1 << idx);
            idx
        };

        if events.is_hup() {
            let mut inn = self.inn.borrow_mut();
            inn.hup(event_loop, token);
        }

        // Wake coroutine on HUP, as it was read, to potentially let it fail the read and move on
        let event = match (events.is_readable() | events.is_hup(), events.is_writable()) {
            (true, true) => RW::Both,
            (true, false) => RW::Read,
            (false, true) => RW::Write,
            (false, false) => return,
        };

        let handle = {
            let inn = self.inn.borrow();
            let coroutine_handle = inn.coroutine.borrow().coroutine.as_ref().map(|c| c.clone()).unwrap();
            inn.coroutine.borrow_mut().state = State::Running;
            inn.coroutine.borrow_mut().last_event = LastEvent {
                rw: event,
                idx: my_idx,
            };
            coroutine_handle
        };

        // ignore errors: the coroutine could have ended before all events for it were delivered
        let _ = handle.resume();

        let inn = &self.inn.borrow();
        let mut co = inn.coroutine.borrow_mut();
        co.reregister_blocked_on(event_loop);
    }

    /// Deregister IO from event loop
    ///
    /// Must be called for every IO, after `is_finished` was detected
    pub fn deregister<H>(&mut self, event_loop: &mut EventLoop<H>)
    where H : Handler {
        event_loop.deregister(&*self.inn.borrow().io).expect("deregister failed")
    }
}

impl<T> std::io::Read for TypedIOHandle<T>
where T : TryRead+Reflect+'static {
    fn read(&mut self, buf: &mut [u8]) -> std::io::Result<usize> {
        loop {
            let res = {
                let mut inn = self.inn.borrow_mut();
                inn.io.as_any_mut().downcast_mut::<T>().unwrap().try_read(buf)
            };

            match res {
                Ok(None) => {
                    {
                        let inn = self.inn.borrow();
                        inn.coroutine.borrow_mut().state = State::BlockedOn(RW::Read);
                        inn.coroutine.borrow_mut().blocked_on_mask = 1 << inn.idx;
                    }
                    coroutine::Coroutine::block();
                    {
                        let inn = self.inn.borrow_mut();
                        debug_assert!(inn.coroutine.borrow().last_event.has_read());
                        debug_assert!(inn.coroutine.borrow().last_event.idx() == inn.idx);
                    }
                },
                Ok(Some(r))  => {
                    return Ok(r);
                },
                Err(e) => {
                    return Err(e)
                }
            }
        }
    }
}

impl<T> std::io::Write for TypedIOHandle<T>
where T : TryWrite+Reflect+'static {
    fn write(&mut self, buf: &[u8]) -> std::io::Result<usize> {
        loop {
            let res = {
                let mut inn = self.inn.borrow_mut();
                inn.io.as_any_mut().downcast_mut::<T>().unwrap().try_write(buf)
            };

            match res {
                Ok(None) => {
                    {
                        let inn = self.inn.borrow();
                        inn.coroutine.borrow_mut().state = State::BlockedOn(RW::Read);
                        inn.coroutine.borrow_mut().blocked_on_mask = 1 << inn.idx;
                    }
                    coroutine::Coroutine::block();
                    {
                        let inn = self.inn.borrow_mut();
                        debug_assert!(inn.coroutine.borrow().last_event.has_write());
                        debug_assert!(inn.coroutine.borrow().last_event.idx() == inn.idx);
                    }
                },
                Ok(Some(r)) => {
                    return Ok(r);
                },
                Err(e) => {
                    return Err(e)
                }
            }
        }
    }

    /* TODO: Should we pass flush to TcpStream/ignore? */
    fn flush(&mut self) -> std::io::Result<()> {
        Ok(())
    }
}

/// `mioco` coroutine builder
///
/// Create one with `new`, then use `wrap_io` on io that you are going to use in the coroutine
/// that you spawn with `start`.
pub struct Builder {
    coroutine : Rc<RefCell<Coroutine>>,
    handles : Vec<IOHandle>
}

struct RefCoroutine {
    coroutine: Rc<RefCell<Coroutine>>,
}
unsafe impl Send for RefCoroutine { }

struct HandleSender(Vec<IOHandle>);

unsafe impl Send for HandleSender {}

impl Builder {

    /// Create new Coroutine builder
    pub fn new() -> Builder {
        Builder {
            coroutine: Rc::new(RefCell::new(Coroutine {
                state: State::Running,
                coroutine: None,
                last_event: LastEvent{ rw: RW::Read, idx: 0},
                io: Vec::with_capacity(4),
                blocked_on_mask: 0,
                registered_mask: 0,
            })),
            handles: Vec::with_capacity(4),
        }
    }

    /// Register `mio`'s io to be used within `mioco` coroutine
    ///
    /// Consumes the `io`, returns a `Handle` to a mio wrapper over it.
    pub fn wrap_io<H, T : 'static>(&mut self, event_loop: &mut mio::EventLoop<H>, io : T, token : Token) -> IOHandle
    where H : Handler,
    T : Evented {

        event_loop.register_opt(
            &io, token,
            mio::EventSet::none(),
            mio::PollOpt::edge(),
            ).expect("register_opt failed");

        let io = Rc::new(RefCell::new(
                     IO {
                         coroutine: self.coroutine.clone(),
                         io: Box::new(io),
                         token: token,
                         peer_hup: false,
                         idx: self.handles.len(),
                     }
                 ));

        let handle = IOHandle {
            inn: io.clone()
        };

        self.coroutine.borrow_mut().io.push(io.clone());

        self.handles.push(IOHandle {
            inn: io.clone(),
        });

        handle
    }

    /// Create a `mioco` coroutine handler
    ///
    /// `f` is routine handling connection. It should not use any blocking operations,
    /// and use it's argument for all IO with it's peer
    pub fn start<F, H>(self, f : F,  event_loop: &mut mio::EventLoop<H>)
        where F : FnOnce(&mut CoroutineHandle) + Send + 'static,
        H : Handler,
        {

            let ioref = RefCoroutine {
                coroutine: self.coroutine.clone(),
            };

            let coroutine = self.coroutine.clone();

            let handles = HandleSender(self.handles);

            let coroutine_handle = coroutine::coroutine::Coroutine::spawn(move || {
                let HandleSender(handles) = handles;
                ioref.coroutine.borrow_mut().coroutine = Some(coroutine::Coroutine::current().clone());
                let mut co_handle = CoroutineHandle {
                    handles: handles,
                    coroutine: ioref.coroutine,
                };
                f(&mut co_handle);
                co_handle.coroutine.borrow_mut().state = State::Finished;
                co_handle.coroutine.borrow_mut().blocked_on_mask = 0;
            });

            coroutine_handle.resume().ok().expect("resume() failed");
            {
                let mut co = coroutine.borrow_mut();
                co.reregister_blocked_on(event_loop);
            }
        }
}

/// Coroutine control
pub struct CoroutineHandle {
    handles : Vec<IOHandle>,
    coroutine : Rc<RefCell<Coroutine>>,
}

fn select_impl_set_mask_from_indices(indices : &[usize], blocked_on_mask : &mut u32) {
    {
        *blocked_on_mask = 0;
        for &idx in indices {
            *blocked_on_mask |= 1u32 << idx;
        }
    }
}

fn select_impl_set_mask_rc_handles(handles : &[Rc<RefCell<IO>>], blocked_on_mask : &mut u32) {
    {
        *blocked_on_mask = 0;
        for handle in handles {
            *blocked_on_mask |= 1u32 << handle.borrow().idx;
        }
    }
}

impl CoroutineHandle {

    /// Wait till a read event is ready
    fn select_impl(&mut self, rw : RW) -> LastEvent {
        self.coroutine.borrow_mut().state = State::BlockedOn(rw);
        coroutine::Coroutine::block();
        debug_assert!(self.coroutine.borrow().state == State::Running);

        self.coroutine.borrow().last_event
    }

    /// Wait till an event is ready
    pub fn select(&mut self) -> LastEvent {
        {
            let Coroutine {
                ref io,
                ref mut blocked_on_mask,
                ..
            } = *self.coroutine.borrow_mut();

            select_impl_set_mask_rc_handles(&**io, blocked_on_mask);
        }
        self.select_impl(RW::Both)
    }

    /// Wait till a read event is ready
    pub fn select_read(&mut self) -> LastEvent {
        {
            let Coroutine {
                ref io,
                ref mut blocked_on_mask,
                ..
            } = *self.coroutine.borrow_mut();

            select_impl_set_mask_rc_handles(&**io, blocked_on_mask);
        }
        self.select_impl(RW::Read)
    }

    /// Wait till a read event is ready
    pub fn select_write(&mut self) -> LastEvent {
        {
            let Coroutine {
                ref io,
                ref mut blocked_on_mask,
                ..
            } = *self.coroutine.borrow_mut();

            select_impl_set_mask_rc_handles(&**io, blocked_on_mask);
        }
        self.select_impl(RW::Write)
    }

    /// Wait till any event is ready on a set of Handles
    pub fn select_from(&mut self, indices : &[usize]) -> LastEvent {
        {
            let Coroutine {
                ref mut blocked_on_mask,
                ..
            } = *self.coroutine.borrow_mut();

            select_impl_set_mask_from_indices(indices, blocked_on_mask);
        }

        self.select_impl(RW::Both)
    }

    /// Wait till write event is ready on a set of Handles
    pub fn select_write_from(&mut self, indices : &[usize]) -> LastEvent {
        {
            let Coroutine {
                ref mut blocked_on_mask,
                ..
            } = *self.coroutine.borrow_mut();

            select_impl_set_mask_from_indices(indices, blocked_on_mask);
        }

        self.select_impl(RW::Write)
    }

    /// Wait till read event is ready on a set of Handles
    pub fn select_read_from(&mut self, indices : &[usize]) -> LastEvent {
        {
            let Coroutine {
                ref mut blocked_on_mask,
                ..
            } = *self.coroutine.borrow_mut();

            select_impl_set_mask_from_indices(indices, blocked_on_mask);
        }

        self.select_impl(RW::Read)
    }

    /// Get typed handle by `idx`
    ///
    /// `idx` corresponds to order of `wrap_io` calls.
    pub fn handle<T>(&mut self, idx : usize) -> TypedIOHandle<T> {
        let untyped_handle = &mut self.handles[idx];

        TypedIOHandle {
            inn: untyped_handle.inn.clone(),
            _t: PhantomData,
        }
    }
}
