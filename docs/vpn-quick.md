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


# Step 1
Download and run the server binary to a location of your choosing.
Releases can be found [here](https://github.com/tunnels-is/tunnels/releases/latest)
```bash
$ wget https://github.com/tunnels-is/tunnels/releases/download/v[VERSION]/server_[VERSION]_Linux_x86_64.tar.gz
$ tar -xf server_[VERSION]_Linux_x86_64.tar.gz
```

# Step 2
Run the server binary using the `--config` flag.
```
$ ./server --config
```

The server will generate the following files:
 - config.json - server configurations
 - cert.pem - server PUBLIC key
 - key.pem - server PRIVATE key (never copy this off the server)
</br>

The `--config` flag will automatically detect reasonable default configurations.
You can see more about the config [here](https://tunnels.is/docs/Server%20Config)

# Step 3 
In this step we will add your new server in the client.
 1. Open the `Tunnels app` and click the [+] sign next to the tunnels default login server: `api.tunnels.is`. 
 2. Add your servers address: `https://[server_ip]`
 3. Press `save`
 4. Select your server in the drop-down menu (remember to unckeck secure if you do not have a certified certificate)
 5. (optional) check `Remember Login` if you want to save your login
 6. Login

# Congratulations!
You should now see your VPN server in the server list and be able to connect.
