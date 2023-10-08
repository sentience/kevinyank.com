---
title: Weird Mac networking glitch
date: 2023-10-08T14:09:15+11:00
tags:
  - tech
  - Apple
  - macOS
excerpt: For months, I've been unable to get to the bottom of a networking issue that only seems to affect my newest Mac, an M2 MacBook Pro. Immediately after connecting to my home network, it is unable to connect to my Synology NAS server … until suddenly it is.
---

For months, I've been unable to get to the bottom of a networking issue that only seems to affect my newest Mac, an M2 MacBook Pro. Immediately after connecting to my home network, it is unable to connect to my Synology NAS server … until suddenly it is.

Here's what it looks like:

```console
> ping 192.168.0.40
PING 192.168.0.40 (192.168.0.40): 56 data bytes
Request timeout for icmp_seq 0
Request timeout for icmp_seq 1
Request timeout for icmp_seq 2
^C
--- 192.168.0.40 ping statistics ---
3 packets transmitted, 0 packets received, 100.0% packet loss

> ssh 192.168.0.40

Using terminal commands to modify system configs, execute external binary
files, add files, or install unauthorized third-party apps may lead to system
damages or unexpected behavior, or cause data loss. Make sure you are aware of
the consequences of each command and proceed at your own risk.

Warning: Data should only be stored in shared folders. Data stored elsewhere
may be deleted when the system is updated/restarted.

kyank@diskstation> exit
Connection to 192.168.0.40 closed.

> ping 192.168.0.40
PING 192.168.0.40 (192.168.0.40): 56 data bytes
64 bytes from 192.168.0.40: icmp_seq=0 ttl=64 time=2.974 ms
64 bytes from 192.168.0.40: icmp_seq=1 ttl=64 time=1.976 ms
64 bytes from 192.168.0.40: icmp_seq=2 ttl=64 time=2.005 ms
^C
--- 192.168.0.40 ping statistics ---
3 packets transmitted, 3 packets received, 0.0% packet loss
round-trip min/avg/max/stddev = 1.976/2.505/3.063/0.515 ms
```

I can't tell if it's something that I'm doing that's "unblocking" the connection (in this case, connecting to it via SSH), or if it's just a problem that self-corrects after a time.

My older, M1 MacBook Air and other devices (iPhone, iPad, etc.) seem unaffected.

It's a strange quirk of modern computing that we don't really have any place to go with home networking issues like this. If I contacted Apple support, they'd say they don't support non-Apple network devices. If I contacted Synology support, they'd say they don't support Apple computers.

I'd love to hear from anyone with an idea of where the problem might be!
