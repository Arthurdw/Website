# Creating a firewall from scratch in Rust

Firewalls, probably the most known but misunderstood item within the computer
industry. This is mainly because of the wrong depiction in movies;
representing it as something that scans for viruses or is an impenetrable wall
that can only be bypassed by the most elite of hackers.

But as you probably already know, this is not the case; and what a firewall
actually does is block ports for certain network traffic. And although some
firewalls have the capability to scan viruses, this is typically handled by a
IPS/IDS.

This however, doesn't mean that it is something easy to create. As it is
something that if written correctly can prevent a lot of attacks on your host.

## What will we create?

This journey will result in us creating a firewall from scratch for Linux based
systems. We will write this in a idiomatic approach with proper project
structure.

## Requirements for this project

- [ ] Should work on a Unix machine
- [ ] Port filtering
- [ ] Packet type filtering _(TCP/UDP)_
- [ ] File based configuration
- [ ] Command line configuration
- [ ] Codebase should be split up into several rust crates
- [ ] Firewall should be asynchronous (with Tokio)
- [ ] No unsafe code
- [ ] Locks/Mutexes only as last resort
