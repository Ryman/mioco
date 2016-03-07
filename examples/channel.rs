extern crate mioco;
extern crate env_logger;

use std::net::SocketAddr;
use std::str::FromStr;
use std::io::{self, Read, Write, BufRead};
use mioco::tcp::TcpListener;
use mioco::Mioco;
use std::thread;

const DEFAULT_LISTEN_ADDR : &'static str = "127.0.0.1:5555";

fn listend_addr() -> SocketAddr {
    FromStr::from_str(DEFAULT_LISTEN_ADDR).unwrap()
}

fn main() {
    env_logger::init().unwrap();

    let (mail_send, mail_recv) = mioco::sync::mpsc::channel::<i32>();

    thread::spawn(move|| {
        loop {
            let stdin = io::stdin();
            let mut line = String::new();
            println!("Print Enter to handle on pending connection.");
            stdin.lock().read_line(&mut line).unwrap();
            let _ = mail_send.send(0);
        }
    });

    Mioco::new().start(move || {
        let addr = listend_addr();
        let listener = TcpListener::bind(&addr).unwrap();

        println!("Starting tcp echo server on {:?}", listener.local_addr().unwrap());
        loop {
            let _ = mail_recv.recv().unwrap();
            let mut conn = listener.accept().unwrap();

            mioco::spawn(move || {
                let mut buf = [0u8; 1024 * 16];
                loop {
                    let size = conn.read(&mut buf).unwrap();
                    if size == 0 {
                        /* eof */
                        break;
                    }
                    conn.write_all(&mut buf[0..size]).unwrap()
                }
            });
        }
    }).unwrap();
}
