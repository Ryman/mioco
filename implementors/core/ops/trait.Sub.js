(function() {var implementors = {};
implementors['libc'] = [];implementors['time'] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Sub.html' title='core::ops::Sub'>Sub</a> for <a class='struct' href='time/struct.Duration.html' title='time::Duration'>Duration</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Sub.html' title='core::ops::Sub'>Sub</a>&lt;<a class='struct' href='time/struct.Duration.html' title='time::Duration'>Duration</a>&gt; for <a class='struct' href='time/struct.Timespec.html' title='time::Timespec'>Timespec</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Sub.html' title='core::ops::Sub'>Sub</a>&lt;<a class='struct' href='time/struct.Timespec.html' title='time::Timespec'>Timespec</a>&gt; for <a class='struct' href='time/struct.Timespec.html' title='time::Timespec'>Timespec</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Sub.html' title='core::ops::Sub'>Sub</a> for <a class='struct' href='time/struct.SteadyTime.html' title='time::SteadyTime'>SteadyTime</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Sub.html' title='core::ops::Sub'>Sub</a>&lt;<a class='struct' href='time/struct.Duration.html' title='time::Duration'>Duration</a>&gt; for <a class='struct' href='time/struct.SteadyTime.html' title='time::SteadyTime'>SteadyTime</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Sub.html' title='core::ops::Sub'>Sub</a>&lt;<a class='struct' href='time/struct.Duration.html' title='time::Duration'>Duration</a>&gt; for <a class='struct' href='time/struct.Tm.html' title='time::Tm'>Tm</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Sub.html' title='core::ops::Sub'>Sub</a>&lt;<a class='struct' href='time/struct.Tm.html' title='time::Tm'>Tm</a>&gt; for <a class='struct' href='time/struct.Tm.html' title='time::Tm'>Tm</a>",];implementors['nix'] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Sub.html' title='core::ops::Sub'>Sub</a> for <a class='struct' href='nix/fcntl/struct.SpliceFFlags.html' title='nix::fcntl::SpliceFFlags'>SpliceFFlags</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Sub.html' title='core::ops::Sub'>Sub</a> for <a class='struct' href='nix/fcntl/struct.OFlag.html' title='nix::fcntl::OFlag'>OFlag</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Sub.html' title='core::ops::Sub'>Sub</a> for <a class='struct' href='nix/fcntl/struct.FdFlag.html' title='nix::fcntl::FdFlag'>FdFlag</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Sub.html' title='core::ops::Sub'>Sub</a> for <a class='struct' href='nix/fcntl/struct.SealFlag.html' title='nix::fcntl::SealFlag'>SealFlag</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Sub.html' title='core::ops::Sub'>Sub</a> for <a class='struct' href='nix/mount/struct.MsFlags.html' title='nix::mount::MsFlags'>MsFlags</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Sub.html' title='core::ops::Sub'>Sub</a> for <a class='struct' href='nix/mount/struct.MntFlags.html' title='nix::mount::MntFlags'>MntFlags</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Sub.html' title='core::ops::Sub'>Sub</a> for <a class='struct' href='nix/mqueue/struct.MQ_OFlag.html' title='nix::mqueue::MQ_OFlag'>MQ_OFlag</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Sub.html' title='core::ops::Sub'>Sub</a> for <a class='struct' href='nix/mqueue/struct.FdFlag.html' title='nix::mqueue::FdFlag'>FdFlag</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Sub.html' title='core::ops::Sub'>Sub</a> for <a class='struct' href='nix/poll/struct.EventFlags.html' title='nix::poll::EventFlags'>EventFlags</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Sub.html' title='core::ops::Sub'>Sub</a> for <a class='struct' href='nix/sched/struct.CloneFlags.html' title='nix::sched::CloneFlags'>CloneFlags</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Sub.html' title='core::ops::Sub'>Sub</a> for <a class='struct' href='nix/sys/epoll/struct.EpollEventKind.html' title='nix::sys::epoll::EpollEventKind'>EpollEventKind</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Sub.html' title='core::ops::Sub'>Sub</a> for <a class='struct' href='nix/sys/memfd/struct.MemFdCreateFlag.html' title='nix::sys::memfd::MemFdCreateFlag'>MemFdCreateFlag</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Sub.html' title='core::ops::Sub'>Sub</a> for <a class='struct' href='nix/sys/signal/struct.SaFlag.html' title='nix::sys::signal::SaFlag'>SaFlag</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Sub.html' title='core::ops::Sub'>Sub</a> for <a class='struct' href='nix/sys/signal/struct.SigFlag.html' title='nix::sys::signal::SigFlag'>SigFlag</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Sub.html' title='core::ops::Sub'>Sub</a> for <a class='struct' href='nix/sys/socket/struct.MsgFlags.html' title='nix::sys::socket::MsgFlags'>MsgFlags</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Sub.html' title='core::ops::Sub'>Sub</a> for <a class='struct' href='nix/sys/socket/struct.SockFlag.html' title='nix::sys::socket::SockFlag'>SockFlag</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Sub.html' title='core::ops::Sub'>Sub</a> for <a class='struct' href='nix/sys/stat/struct.SFlag.html' title='nix::sys::stat::SFlag'>SFlag</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Sub.html' title='core::ops::Sub'>Sub</a> for <a class='struct' href='nix/sys/stat/struct.Mode.html' title='nix::sys::stat::Mode'>Mode</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Sub.html' title='core::ops::Sub'>Sub</a> for <a class='struct' href='nix/sys/termios/struct.InputFlags.html' title='nix::sys::termios::InputFlags'>InputFlags</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Sub.html' title='core::ops::Sub'>Sub</a> for <a class='struct' href='nix/sys/termios/struct.OutputFlags.html' title='nix::sys::termios::OutputFlags'>OutputFlags</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Sub.html' title='core::ops::Sub'>Sub</a> for <a class='struct' href='nix/sys/termios/struct.ControlFlags.html' title='nix::sys::termios::ControlFlags'>ControlFlags</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Sub.html' title='core::ops::Sub'>Sub</a> for <a class='struct' href='nix/sys/termios/struct.LocalFlags.html' title='nix::sys::termios::LocalFlags'>LocalFlags</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Sub.html' title='core::ops::Sub'>Sub</a> for <a class='struct' href='nix/sys/wait/struct.WaitPidFlag.html' title='nix::sys::wait::WaitPidFlag'>WaitPidFlag</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Sub.html' title='core::ops::Sub'>Sub</a> for <a class='struct' href='nix/sys/mman/struct.MapFlags.html' title='nix::sys::mman::MapFlags'>MapFlags</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Sub.html' title='core::ops::Sub'>Sub</a> for <a class='struct' href='nix/sys/mman/struct.MsFlags.html' title='nix::sys::mman::MsFlags'>MsFlags</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Sub.html' title='core::ops::Sub'>Sub</a> for <a class='struct' href='nix/sys/mman/struct.ProtFlags.html' title='nix::sys::mman::ProtFlags'>ProtFlags</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Sub.html' title='core::ops::Sub'>Sub</a> for <a class='struct' href='nix/sys/time/struct.TimeVal.html' title='nix::sys::time::TimeVal'>TimeVal</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Sub.html' title='core::ops::Sub'>Sub</a> for <a class='struct' href='nix/sys/quota/quota/struct.QuotaValidFlags.html' title='nix::sys::quota::quota::QuotaValidFlags'>QuotaValidFlags</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Sub.html' title='core::ops::Sub'>Sub</a> for <a class='struct' href='nix/sys/statvfs/vfs/struct.FsFlags.html' title='nix::sys::statvfs::vfs::FsFlags'>FsFlags</a>",];implementors['mio'] = ["impl&lt;'a, 'b, T, S&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Sub.html' title='core::ops::Sub'>Sub</a>&lt;&amp;'b <a class='struct' href='https://doc.rust-lang.org/nightly/std/collections/hash/set/struct.HashSet.html' title='std::collections::hash::set::HashSet'>HashSet</a>&lt;T, S&gt;&gt; for &amp;'a <a class='struct' href='https://doc.rust-lang.org/nightly/std/collections/hash/set/struct.HashSet.html' title='std::collections::hash::set::HashSet'>HashSet</a>&lt;T, S&gt; <span class='where'>where S: <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.BuildHasher.html' title='core::hash::BuildHasher'>BuildHasher</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/default/trait.Default.html' title='core::default::Default'>Default</a>, T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html' title='core::cmp::Eq'>Eq</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html' title='core::hash::Hash'>Hash</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a></span>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Sub.html' title='core::ops::Sub'>Sub</a>&lt;<a class='struct' href='https://doc.rust-lang.org/nightly/std/time/duration/struct.Duration.html' title='std::time::duration::Duration'>Duration</a>&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/std/time/duration/struct.Duration.html' title='std::time::duration::Duration'>Duration</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Sub.html' title='core::ops::Sub'>Sub</a>&lt;<a class='struct' href='https://doc.rust-lang.org/nightly/std/time/duration/struct.Duration.html' title='std::time::duration::Duration'>Duration</a>&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/std/time/struct.Instant.html' title='std::time::Instant'>Instant</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Sub.html' title='core::ops::Sub'>Sub</a>&lt;<a class='struct' href='https://doc.rust-lang.org/nightly/std/time/struct.Instant.html' title='std::time::Instant'>Instant</a>&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/std/time/struct.Instant.html' title='std::time::Instant'>Instant</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Sub.html' title='core::ops::Sub'>Sub</a>&lt;<a class='struct' href='https://doc.rust-lang.org/nightly/std/time/duration/struct.Duration.html' title='std::time::duration::Duration'>Duration</a>&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/std/time/struct.SystemTime.html' title='std::time::SystemTime'>SystemTime</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Sub.html' title='core::ops::Sub'>Sub</a> for <a class='struct' href='mio/struct.PollOpt.html' title='mio::PollOpt'>PollOpt</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Sub.html' title='core::ops::Sub'>Sub</a> for <a class='struct' href='mio/struct.EventSet.html' title='mio::EventSet'>EventSet</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Sub.html' title='core::ops::Sub'>Sub</a>&lt;<a class='struct' href='nix/fcntl/consts/struct.SpliceFFlags.html' title='nix::fcntl::consts::SpliceFFlags'>SpliceFFlags</a>&gt; for <a class='struct' href='nix/fcntl/consts/struct.SpliceFFlags.html' title='nix::fcntl::consts::SpliceFFlags'>SpliceFFlags</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Sub.html' title='core::ops::Sub'>Sub</a>&lt;<a class='struct' href='nix/fcntl/consts/struct.OFlag.html' title='nix::fcntl::consts::OFlag'>OFlag</a>&gt; for <a class='struct' href='nix/fcntl/consts/struct.OFlag.html' title='nix::fcntl::consts::OFlag'>OFlag</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Sub.html' title='core::ops::Sub'>Sub</a>&lt;<a class='struct' href='nix/fcntl/consts/struct.FdFlag.html' title='nix::fcntl::consts::FdFlag'>FdFlag</a>&gt; for <a class='struct' href='nix/fcntl/consts/struct.FdFlag.html' title='nix::fcntl::consts::FdFlag'>FdFlag</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Sub.html' title='core::ops::Sub'>Sub</a>&lt;<a class='struct' href='nix/fcntl/consts/struct.SealFlag.html' title='nix::fcntl::consts::SealFlag'>SealFlag</a>&gt; for <a class='struct' href='nix/fcntl/consts/struct.SealFlag.html' title='nix::fcntl::consts::SealFlag'>SealFlag</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Sub.html' title='core::ops::Sub'>Sub</a>&lt;<a class='struct' href='nix/mount/struct.MsFlags.html' title='nix::mount::MsFlags'>MsFlags</a>&gt; for <a class='struct' href='nix/mount/struct.MsFlags.html' title='nix::mount::MsFlags'>MsFlags</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Sub.html' title='core::ops::Sub'>Sub</a>&lt;<a class='struct' href='nix/mount/struct.MntFlags.html' title='nix::mount::MntFlags'>MntFlags</a>&gt; for <a class='struct' href='nix/mount/struct.MntFlags.html' title='nix::mount::MntFlags'>MntFlags</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Sub.html' title='core::ops::Sub'>Sub</a>&lt;<a class='struct' href='nix/mqueue/consts/struct.MQ_OFlag.html' title='nix::mqueue::consts::MQ_OFlag'>MQ_OFlag</a>&gt; for <a class='struct' href='nix/mqueue/consts/struct.MQ_OFlag.html' title='nix::mqueue::consts::MQ_OFlag'>MQ_OFlag</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Sub.html' title='core::ops::Sub'>Sub</a>&lt;<a class='struct' href='nix/mqueue/consts/struct.FdFlag.html' title='nix::mqueue::consts::FdFlag'>FdFlag</a>&gt; for <a class='struct' href='nix/mqueue/consts/struct.FdFlag.html' title='nix::mqueue::consts::FdFlag'>FdFlag</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Sub.html' title='core::ops::Sub'>Sub</a>&lt;<a class='struct' href='nix/poll/ffi/consts/struct.EventFlags.html' title='nix::poll::ffi::consts::EventFlags'>EventFlags</a>&gt; for <a class='struct' href='nix/poll/ffi/consts/struct.EventFlags.html' title='nix::poll::ffi::consts::EventFlags'>EventFlags</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Sub.html' title='core::ops::Sub'>Sub</a>&lt;<a class='struct' href='nix/sched/struct.CloneFlags.html' title='nix::sched::CloneFlags'>CloneFlags</a>&gt; for <a class='struct' href='nix/sched/struct.CloneFlags.html' title='nix::sched::CloneFlags'>CloneFlags</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Sub.html' title='core::ops::Sub'>Sub</a>&lt;<a class='struct' href='nix/sys/epoll/struct.EpollEventKind.html' title='nix::sys::epoll::EpollEventKind'>EpollEventKind</a>&gt; for <a class='struct' href='nix/sys/epoll/struct.EpollEventKind.html' title='nix::sys::epoll::EpollEventKind'>EpollEventKind</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Sub.html' title='core::ops::Sub'>Sub</a>&lt;<a class='struct' href='nix/sys/memfd/struct.MemFdCreateFlag.html' title='nix::sys::memfd::MemFdCreateFlag'>MemFdCreateFlag</a>&gt; for <a class='struct' href='nix/sys/memfd/struct.MemFdCreateFlag.html' title='nix::sys::memfd::MemFdCreateFlag'>MemFdCreateFlag</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Sub.html' title='core::ops::Sub'>Sub</a>&lt;<a class='struct' href='nix/sys/signal/struct.SaFlag.html' title='nix::sys::signal::SaFlag'>SaFlag</a>&gt; for <a class='struct' href='nix/sys/signal/struct.SaFlag.html' title='nix::sys::signal::SaFlag'>SaFlag</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Sub.html' title='core::ops::Sub'>Sub</a>&lt;<a class='struct' href='nix/sys/signal/struct.SigFlag.html' title='nix::sys::signal::SigFlag'>SigFlag</a>&gt; for <a class='struct' href='nix/sys/signal/struct.SigFlag.html' title='nix::sys::signal::SigFlag'>SigFlag</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Sub.html' title='core::ops::Sub'>Sub</a>&lt;<a class='struct' href='nix/sys/socket/consts/os/struct.MsgFlags.html' title='nix::sys::socket::consts::os::MsgFlags'>MsgFlags</a>&gt; for <a class='struct' href='nix/sys/socket/consts/os/struct.MsgFlags.html' title='nix::sys::socket::consts::os::MsgFlags'>MsgFlags</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Sub.html' title='core::ops::Sub'>Sub</a>&lt;<a class='struct' href='nix/sys/socket/struct.SockFlag.html' title='nix::sys::socket::SockFlag'>SockFlag</a>&gt; for <a class='struct' href='nix/sys/socket/struct.SockFlag.html' title='nix::sys::socket::SockFlag'>SockFlag</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Sub.html' title='core::ops::Sub'>Sub</a>&lt;<a class='struct' href='nix/sys/stat/struct.SFlag.html' title='nix::sys::stat::SFlag'>SFlag</a>&gt; for <a class='struct' href='nix/sys/stat/struct.SFlag.html' title='nix::sys::stat::SFlag'>SFlag</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Sub.html' title='core::ops::Sub'>Sub</a>&lt;<a class='struct' href='nix/sys/stat/struct.Mode.html' title='nix::sys::stat::Mode'>Mode</a>&gt; for <a class='struct' href='nix/sys/stat/struct.Mode.html' title='nix::sys::stat::Mode'>Mode</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Sub.html' title='core::ops::Sub'>Sub</a>&lt;<a class='struct' href='nix/sys/termios/ffi/consts/struct.InputFlags.html' title='nix::sys::termios::ffi::consts::InputFlags'>InputFlags</a>&gt; for <a class='struct' href='nix/sys/termios/ffi/consts/struct.InputFlags.html' title='nix::sys::termios::ffi::consts::InputFlags'>InputFlags</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Sub.html' title='core::ops::Sub'>Sub</a>&lt;<a class='struct' href='nix/sys/termios/ffi/consts/struct.OutputFlags.html' title='nix::sys::termios::ffi::consts::OutputFlags'>OutputFlags</a>&gt; for <a class='struct' href='nix/sys/termios/ffi/consts/struct.OutputFlags.html' title='nix::sys::termios::ffi::consts::OutputFlags'>OutputFlags</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Sub.html' title='core::ops::Sub'>Sub</a>&lt;<a class='struct' href='nix/sys/termios/ffi/consts/struct.ControlFlags.html' title='nix::sys::termios::ffi::consts::ControlFlags'>ControlFlags</a>&gt; for <a class='struct' href='nix/sys/termios/ffi/consts/struct.ControlFlags.html' title='nix::sys::termios::ffi::consts::ControlFlags'>ControlFlags</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Sub.html' title='core::ops::Sub'>Sub</a>&lt;<a class='struct' href='nix/sys/termios/ffi/consts/struct.LocalFlags.html' title='nix::sys::termios::ffi::consts::LocalFlags'>LocalFlags</a>&gt; for <a class='struct' href='nix/sys/termios/ffi/consts/struct.LocalFlags.html' title='nix::sys::termios::ffi::consts::LocalFlags'>LocalFlags</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Sub.html' title='core::ops::Sub'>Sub</a>&lt;<a class='struct' href='nix/sys/wait/struct.WaitPidFlag.html' title='nix::sys::wait::WaitPidFlag'>WaitPidFlag</a>&gt; for <a class='struct' href='nix/sys/wait/struct.WaitPidFlag.html' title='nix::sys::wait::WaitPidFlag'>WaitPidFlag</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Sub.html' title='core::ops::Sub'>Sub</a>&lt;<a class='struct' href='nix/sys/mman/struct.ProtFlags.html' title='nix::sys::mman::ProtFlags'>ProtFlags</a>&gt; for <a class='struct' href='nix/sys/mman/struct.ProtFlags.html' title='nix::sys::mman::ProtFlags'>ProtFlags</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Sub.html' title='core::ops::Sub'>Sub</a>&lt;<a class='struct' href='nix/sys/mman/consts/struct.MapFlags.html' title='nix::sys::mman::consts::MapFlags'>MapFlags</a>&gt; for <a class='struct' href='nix/sys/mman/consts/struct.MapFlags.html' title='nix::sys::mman::consts::MapFlags'>MapFlags</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Sub.html' title='core::ops::Sub'>Sub</a>&lt;<a class='struct' href='nix/sys/mman/consts/struct.MsFlags.html' title='nix::sys::mman::consts::MsFlags'>MsFlags</a>&gt; for <a class='struct' href='nix/sys/mman/consts/struct.MsFlags.html' title='nix::sys::mman::consts::MsFlags'>MsFlags</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Sub.html' title='core::ops::Sub'>Sub</a>&lt;<a class='struct' href='nix/sys/time/struct.TimeVal.html' title='nix::sys::time::TimeVal'>TimeVal</a>&gt; for <a class='struct' href='nix/sys/time/struct.TimeVal.html' title='nix::sys::time::TimeVal'>TimeVal</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Sub.html' title='core::ops::Sub'>Sub</a>&lt;<a class='struct' href='nix/sys/quota/quota/struct.QuotaValidFlags.html' title='nix::sys::quota::quota::QuotaValidFlags'>QuotaValidFlags</a>&gt; for <a class='struct' href='nix/sys/quota/quota/struct.QuotaValidFlags.html' title='nix::sys::quota::quota::QuotaValidFlags'>QuotaValidFlags</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Sub.html' title='core::ops::Sub'>Sub</a>&lt;<a class='struct' href='nix/sys/statvfs/vfs/struct.FsFlags.html' title='nix::sys::statvfs::vfs::FsFlags'>FsFlags</a>&gt; for <a class='struct' href='nix/sys/statvfs/vfs/struct.FsFlags.html' title='nix::sys::statvfs::vfs::FsFlags'>FsFlags</a>",];implementors['mioco'] = ["impl&lt;'a, 'b, T, S&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Sub.html' title='core::ops::Sub'>Sub</a>&lt;&amp;'b <a class='struct' href='https://doc.rust-lang.org/nightly/std/collections/hash/set/struct.HashSet.html' title='std::collections::hash::set::HashSet'>HashSet</a>&lt;T, S&gt;&gt; for &amp;'a <a class='struct' href='https://doc.rust-lang.org/nightly/std/collections/hash/set/struct.HashSet.html' title='std::collections::hash::set::HashSet'>HashSet</a>&lt;T, S&gt; <span class='where'>where T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html' title='core::cmp::Eq'>Eq</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html' title='core::hash::Hash'>Hash</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a>, S: <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.BuildHasher.html' title='core::hash::BuildHasher'>BuildHasher</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/default/trait.Default.html' title='core::default::Default'>Default</a></span>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Sub.html' title='core::ops::Sub'>Sub</a>&lt;<a class='struct' href='https://doc.rust-lang.org/nightly/std/time/duration/struct.Duration.html' title='std::time::duration::Duration'>Duration</a>&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/std/time/duration/struct.Duration.html' title='std::time::duration::Duration'>Duration</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Sub.html' title='core::ops::Sub'>Sub</a>&lt;<a class='struct' href='https://doc.rust-lang.org/nightly/std/time/duration/struct.Duration.html' title='std::time::duration::Duration'>Duration</a>&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/std/time/struct.Instant.html' title='std::time::Instant'>Instant</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Sub.html' title='core::ops::Sub'>Sub</a>&lt;<a class='struct' href='https://doc.rust-lang.org/nightly/std/time/struct.Instant.html' title='std::time::Instant'>Instant</a>&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/std/time/struct.Instant.html' title='std::time::Instant'>Instant</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Sub.html' title='core::ops::Sub'>Sub</a>&lt;<a class='struct' href='https://doc.rust-lang.org/nightly/std/time/duration/struct.Duration.html' title='std::time::duration::Duration'>Duration</a>&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/std/time/struct.SystemTime.html' title='std::time::SystemTime'>SystemTime</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Sub.html' title='core::ops::Sub'>Sub</a>&lt;<a class='struct' href='mio/event/struct.PollOpt.html' title='mio::event::PollOpt'>PollOpt</a>&gt; for <a class='struct' href='mio/event/struct.PollOpt.html' title='mio::event::PollOpt'>PollOpt</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Sub.html' title='core::ops::Sub'>Sub</a>&lt;<a class='struct' href='mio/event/struct.EventSet.html' title='mio::event::EventSet'>EventSet</a>&gt; for <a class='struct' href='mio/event/struct.EventSet.html' title='mio::event::EventSet'>EventSet</a>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
