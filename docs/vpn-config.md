# Server Config Breakdown
```json
{
    "Features": [
        "LAN", // local network emulator
        "VPN", // default VPN
        "AUTH", // auth API
        "DNS", // DNS server ( still in development )
        "BBOLT" // BBOLT embeded database
    ],
    "VPNIP": "192.248.170.119", // IP address used for APIs
    "APIPort": "443", // port used for APIs
    "APIIP": "192.248.170.119", // IP address used for packets
    "VPNPort": "444", // port used for packets
    "Admins": [], // Not in use but reserved
    "NetAdmins": [], // Network admins, list of device tokens that can bypass LAN firewall
    "Hostname": "tunnels.local",
    "Lan": {
        "Tag": "lan",
        "Network": "10.0.0.0/16",
        "Nat": ""
    },
    "DisableLanFirwall": false, // disables the LAN firewall completely
    "SubNets": [], // Registered VPN subnets, can be used to create network NAT
    "Routes": [ // Registered routes, can be used to create routes to Subnets or other locations reachable by the VPN
        {
            "Address": "10.0.0.0/16",
            "Metric": "0",
            "Gateway": ""
        }
    ],
    "StartPort": 2000, // the first port allocated to users
    "EndPort": 65530, // the last port allocated to users
    "UserMaxConnections": 10,
    "InternetAccess": true,
    "LocalNetworkAccess": false, // Enabled/disables local network access for the VPN
    "BandwidthMbps": 1000, // total server bandwidth, used to calculate how many ports each user gets
    "BandwidthUserMbps": 10, // total bandwidth per users, used to calculate how many ports each user gets 
    "DNSAllowCustomOnly": false, // used to force clients into only routing custom DNS records to this server
    "DNSRecords": [], // used to register custom DNS records
    "DNSServers": [], // used to overwrite DNS addresses for users on this server
    "SecretStore": "config", // determines where secrets are stored (config/env)
    "AdminApiKey": "87942090-f1be-46a2-bed1-f16e21430ecb", // This API key enabled access to certain APIs without requiring login
    "DBurl": "mongodb://127.0.0.1:27017", // mongodb URL, only used if mongodb is enabled
    "TwoFactorKey": "a63eba96c5d44f549e5926dc5eb29a00", // encryption key used to encrypt two factor authentication (DO NOT LOSE THIS)
    "EmailKey": "", // only usefull for Tunnels public network (AUTH module)
    "PayKey": "", // only used by tunnels public network (AUTH module)
    "CertPem": "./cert.pem",
    "SignPem": "./sign.pem", // the sign pem is only required if the server does not run the AUTH module, otherwise the SignPem is the CertPem (NOT KeyPem) from the AUTH server. 
    "KeyPem": "./key.pem"
}
```
