# Setting up your private server

## Requirements 
 - Server with a public IPv4 Address 
    - preferably two IPv4 Addresses for maximum performance but it's not required
 - Linux operating system 
    - [Recommended Linux configurations](https://tunnels.is/#/docs/Linux%20Configs)
 - iptables installed

## Hardware Requirements
 - CPU: 1 core, 1 thread (this setup can push 1Gbps)
    - <b>NOTE</b>: Performance on MIPS architecure is sub-optimal for now
 - RAM: 500MB (we do some memory pre-allocation for performance reasons)
 - DISK: Tunnels does not use disk
 - NIC: any network card will do as longs as you have an IPv4 Address

# Step 1 
Navigate to `VPN` in the `Tunnels UI` and press `Create`.
<b>IMPORTANT</b>: You will need to use the `ID` later.

# Step 2
Download and run the server binary to a location of your choosing.
Releases can be found [here](https://github.com/tunnels-is/tunnels/releases/latest)
```bash
$ wget https://github.com/tunnels-is/tunnels/releases/download/v[VERSION]/server_[VERSION]_Linux_x86_64.tar.gz
$ tar -xf server_[VERSION]_Linux_x86_64.tar.gz
```

Run the server binary using the `--config` flag.

WORK IN PROGRESS..
