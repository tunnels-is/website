const DATA = "data_";
import { LayersIcon } from '@radix-ui/react-icons';
import axios from 'axios';
const Version = "2.0.2"

var STORE = {
	Name: "Tunnels",
	DocMenu: { "BaseURL": "", "Menu": [] },
	Content: {
		Diagrams: {
			PublicVPN: {
				Title: "Public Routable VPN Network",
				Content: "The Tunnels VPN application can apply dynamic routes to the public network tunnels, this allows for split route tunneling accross multiple VPN servers.",
				Img1: "https://raw.githubusercontent.com/tunnels-is/media/master/v3/diagrams/public-routable-vpn.svg",
			},
			Genericvpn: {
				Title: "Multi Route VPN + LAN",
				Content: "",
				Img1: "https://raw.githubusercontent.com/tunnels-is/media/master/v3/diagrams/gen-vpn-multiplex-v2.svg",
			},
			VPNEncryption: {
				Title: "Encryption and Security",
				Content: "Tunnels implements modern cryptographic protocols and handshaking procedures. <br/></br>Supported encryption types are AES128/256 and chacha20 poly1305. Supported handshake types are elliptic curve p521 and X25519.<br/><br/>Authentication and Authorization use a combination of user/password and certificates. <br/><br/> Every step of the encryption and handshake process is handled by golang standard library methods, we do not hand-roll our own encryption schemes or functions.",
				Img1: "https://raw.githubusercontent.com/tunnels-is/media/master/v3/diagrams/vpn-encryption.svg",
			},
			IsolatedNetwork: {
				Title: "LAN Networks",
				Content: "",
				Img1: "https://raw.githubusercontent.com/tunnels-is/media/master/v3/diagrams/isolated-network-raw.svg",
			},
			IsolatedNetworkDetails: {
				Title: "LAN Networks",
				Content: "Tunnels LAN networks connect individual devices through an abstract network layer that exists on a single server. </br></br> The LAN network is perfect for things like IoT devices, file servers, databases and other services that require stricter access controls.",
				Img1: "https://raw.githubusercontent.com/tunnels-is/media/master/v3/diagrams/vpn-isolated-multinetwork.svg",
			},
			Routing: {
				Title: "Custom Routing",
				Content: "",
				Img1: "https://raw.githubusercontent.com/tunnels-is/media/master/v3/diagrams/routing.svg",
			},
			RoutingDetails: {
				Title: "Advanced Routing",
				Content: "Defining custom routes in Tunnels is simple, it can be done server side or in the device config.</br></br> Routing configurations are abstracted from the unerlying networks, which enabled routing of any IP address to any VPN or LAN network.",
				Img1: "https://raw.githubusercontent.com/tunnels-is/media/master/v3/diagrams/vpn-routing-advanced.svg",
			},
			Nat: {
				Title: "Custom Nat",
				Content: "",
				Img1: "https://raw.githubusercontent.com/tunnels-is/media/master/v3/diagrams/nat.svg",
			},
			NatDetails: {
				Title: "Abstract Nat",
				Content: "Tunnels NAT is completely abstracted from the underlying networks, much like the routing.</br></br> Any IP Address can be translated to any other IP Address. This feature can resolve networking problems that happen in large environments.",
				Img1: "https://raw.githubusercontent.com/tunnels-is/media/master/v3/diagrams/nat-full.svg",
			},
			Dns: {
				Title: "Routable DNS and Filtering",
				Content: "",
				Img1: "https://raw.githubusercontent.com/tunnels-is/media/master/v3/diagrams/dns.svg",
			},
			DnsServerSide: {
				Title: "Server DNS Configurations",
				Content: "Tunnels servers can be configured to forward domains, including wildcards, to an internal network. This removes the need for specific client side DNS records or switching DNS servers when users change networks.</br></br> When a device connects to a tunnels server it's DNS configurations are sent to the device.",
				Img1: "https://raw.githubusercontent.com/tunnels-is/media/master/v3/diagrams/dns-routing.svg",
			},
			DnsDeviceSide: {
				Title: "Device DNS Configurations",
				Content: "DNS records can be registered in the Tunnels application config, removing the need to DNS servers.",
				Img1: "https://raw.githubusercontent.com/tunnels-is/media/master/v3/diagrams/dns.svg",
			},
			SysadminMulti: {
				Title: "Multi-Datacenter VPN",
				Content: "System administrators and DevOps can stay connected to all datacenter locations at all times.",
				Img1: "https://raw.githubusercontent.com/tunnels-is/media/master/v3/diagrams/sysadmin-dc-multi.svg",
			},
			OfficeMulti: {
				Title: "Multi-Office VPN",
				Content: "Empolyees can connect to all office environments at the same time, automatically, when their work computers turn on. Enabling fast access to file servers, internal portals, printers and more.",
				Img1: "https://raw.githubusercontent.com/tunnels-is/media/master/v3/diagrams/multi-office.svg",
			},
		},

		ContactSales: {
			Title: "Contact Us",
			link: "mailto:support@tunnels.is",
			linkTitle: "support@tunnels.is"
		},
		Download: {
			Title: "Download",
			Subtitle: "click here for all available releases",
			AllLink: "https://github.com/tunnels-is/tunnels/releases/latest",
			MacOS: "https://github.com/tunnels-is/tunnels/releases/download/v" + Version + "/tunnels_" + Version + "_Darwin_arm64.tar.gz",
			Windows: "https://github.com/tunnels-is/tunnels/releases/download/v" + Version + "/tunnels_" + Version + "_Windows_x86_64.zip",
			Linux: "https://github.com/tunnels-is/tunnels/releases/latest",
		},
		Pricing: {
			Title: "",
			Link: "Anonymous top-ups"
		},
		Register: {
			Title: "Join Tunnels Today",
			Subtitle: "24/h free trial no credit card required",

		},
		Home: {
			Banner: {
				Title: "Tunnels",
				Subtitle: "VPN, LAN, NAT, Routing, DNS blocking, DNS routing and more!",
				Img1: "https://raw.githubusercontent.com/tunnels-is/media/master/new-website/banner-grid/1.png",
				Img2: "https://raw.githubusercontent.com/tunnels-is/media/master/new-website/banner-grid/2.png",
				Img3: "https://raw.githubusercontent.com/tunnels-is/media/master/new-website/banner-grid/3.png",
				Img4: "https://raw.githubusercontent.com/tunnels-is/media/master/new-website/banner-grid/4.png",
				Img5: "https://raw.githubusercontent.com/tunnels-is/media/master/new-website/banner-grid/5.png",
			},

			TriForce: {
				Content1: "",
				Img1: "https://raw.githubusercontent.com/tunnels-is/media/master/v3/screens/size-on-disk.png",
				Content2: "",
				Img2: "https://raw.githubusercontent.com/tunnels-is/media/master/v3/screens/memory-use.png",
				Content3: "",
				Img3: "https://raw.githubusercontent.com/tunnels-is/media/master/v3/logo/reddit-logo.png",
			},

			ReverseTriForce: {
				Content1: "Security and privacy focused for individuals",
				Img1: "https://raw.githubusercontent.com/tunnels-is/media/master/web/all-connections.png",
				Content2: "Flexible network functionality for Developers",
				Img2: "https://raw.githubusercontent.com/tunnels-is/media/master/v3/temp/clean-settings.png",
				Content3: "Simple deployments and reduced attack surface for Enterprise",
				Img3: "https://raw.githubusercontent.com/tunnels-is/media/master/v3/temp/clean-settings.png",
			},

			ImageRight1: {
				Title: "DNS Blackhole",
				Content: "Tunnels prevents un-wanted DNS queries from leaving your computer.<br/><br/> This feature offers a wide range of functionality, DNS query insights and daily blocklist updates.",
				Img: "https://raw.githubusercontent.com/tunnels-is/media/master/v3/screens/dns-block.png",
			},

			ImageLeft1: {
				Title: "Advanced Networking Utility",
				Content: "Tunnels makes connecting to multiple networks at the same time easy. <br/><br/>Connect to the office, the cloud, your home or anywhere, all at once. Tunnels is designed to facilitate easy configurations for each network and client specific configuration, just in case there is a conflict on the network.",
				Img: "https://raw.githubusercontent.com/tunnels-is/media/master/v3/screens/private-servers.png",
			},

			ImageLeft2: {
				Title: "Enterprise",
				Content: "Tunnels has been engineered to scale to millions of users and can easily be deployed on-premis using bare metal server or kubernetes.<br/><br/> IAM management is already a part of Tunnels and extentions can be made to fit the needs of any external IAM system.",
				Img: "https://raw.githubusercontent.com/tunnels-is/media/master/v3/screens/orgs-final.png",
			},

			ImageRight2: {
				Title: "Dark Mode",
				Content: "By popular demand..",
				Img: "https://raw.githubusercontent.com/tunnels-is/media/master/v3/screens/dark-mode.png",
			},
		},
		FreePage: {
			PrivateServers: {
				Title: "Private Servers",
				Content: "Private servers require an account but no payment. User can make as many private servers as they want. We will never charge users per server.",
				Img: "https://raw.githubusercontent.com/tunnels-is/media/master/v3/diagrams/vpn-encryption.svg",
			},
			DNS: {
				Title: "DNS Threat Protection",
				Content: `Tunnels offers it's DNS proxy/server for free, no account or payment needed. This includes threat protection and custom DNS records.`,
				Img: "https://raw.githubusercontent.com/tunnels-is/media/master/v3/screens/dns-resolve-and-block.png",
			},

		},
		DNSPage: {
			SmallBanner: {
				Title: "Routable DNS With Security",
				Subtitle: "and daily threat list updates",
			},
			DNSProtection: {
				Title: "DNS Threat Protection",
				Content: `Tunnels offers a built-in DNS Server/Proxy which comes with extensive blacklisting features, daily block list updates and the ability to define custom DNS records. </br></br>Tunnels DNS server also facilitates DNS Routing to ensure proper DNS resolution when connected to multiple networks.`,
				Img: "https://raw.githubusercontent.com/tunnels-is/media/master/v3/screens/dns-panel.png",
			},
		},
		FeaturePage: {
			SmallBanner: {
				Title: "The Quick Start Guide",
				Subtitle: '<a class="link" href="/docs/Quick%20Setup" >can be found here</> ',
			},

			TunnelsToServersDiagram: {
				Title: "Core Concepts",
				Content: `
- <b>Services</b> provide networking functionality to the client<br/>
- <b>Tunnels</b> process and deliver packets over encrypted connections<br/> 
- <b>Servers</b> forward packets to designated networks<br/>

<br><br>
Tunnels is essentially a network multiplexer and DNS proxy.
`,
				Img: "https://raw.githubusercontent.com/tunnels-is/media/master/v3/diagrams/tunnels-servers.png",
			},

			PrivateServers: {
				Title: "Servers",
				Content: "Private servers can be registered for free without device or user limits. These servers are entirely user controlled and operated.<br><br> <b>Tunnels</b> has no access to these servers, it only provides IAM services.",
				Img: "https://raw.githubusercontent.com/tunnels-is/media/master/v3/screens/private-servers.png"
			},
			Tunnels: {
				Title: "Tunnels",
				Content: "Tunnel configuration lives in the users json config and can be modified using the in-line editor tool or any text editor. <br><br>Configs can easily be ported from one user to another with a simple copy/paste, making configuration management easy at scale.",
				Img: "https://raw.githubusercontent.com/tunnels-is/media/master/v3/screens/tunnels-editor.png"
			},

			DynamicNetworking: {
				Title: "Dynamic Networking",
				Content: `<b>Networks</b>, <b>Routes</b> and <b>NAT</b> can be applied dynamically in the server config or the <b>tunnel</b>.<br><br> Each <b>tunnel</b> will update their configurations at an interval, making company wide re-configurations easy at scale.`,
				Img: "https://raw.githubusercontent.com/tunnels-is/media/master/v3/screens/routes-and-networks.png",
			},

			AbstractNAT: {
				Title: "Abstract NAT",
				Content: `<b>Tunnels</b> can perform Network Address Translation outside of the scope of local networks. <br><br> This allows <b>Tunnels</b> to resolve IP Address conflicts without having to change anything on the network level.`,
				Img: "https://raw.githubusercontent.com/tunnels-is/media/master/web/nat-route-dns.png",
			},


			DNSCorrectness: {
				Title: "DNS Correctness",
				Content: `Tunnels supports custom A, TXT and CNAME recods and high level A records can be forwarded to specific <b>tunnels</b> to be resolved on sub-net DNS servers.<br><br>Tunnels also comes with <a href="https://tunnels.is/#/dns">DNS Security</a> features`,
				Img: "https://raw.githubusercontent.com/tunnels-is/media/master/v3/screens/custom-dns.png",
			},

			TextImageLeft4: {
				Title: "Kubernetes Networking",
				Content: "You can use Tunnels to secure your kubernetes control plane. You can deploy on the host or from within the cluster",
				Img: "https://raw.githubusercontent.com/tunnels-is/media/master/web/k8s.png"
			},

			TextImageRight3: {
				Title: "All the things",
				Content: "All configuration are editable as JSON configs. We have built a code editor into the application, but you can edit these configs with any editor of your choosing",
				Img: "https://raw.githubusercontent.com/tunnels-is/media/master/web/allthethings.png"
			},

		},
		Enterprise: {
			SmallBanner: {
				Title: "Tunnels For Large Networks",
				Subtitle: "lightweight design for big scale",
			},
			TextImageRight1: {
				Title: "Felxability & Scalability",
				Content: "Automatically connect your employees to all of their networks, all at once. Tunnels is designed to be install-free, simply copy/paste and run. This makes managing a large number of users, simple and pain free.<br/><br/> Company wide configurations can be distributed as simple files to users in multitudes of ways or automatically updated by system administrators.",
				Img: "https://raw.githubusercontent.com/tunnels-is/media/master/web/allthethings.png"
			},
			TextImageLeft: {
				Title: "Reduced Attack Surface",
				Content: `Tunnels is written in golang with minimal module use and no 3rd party services. This method of simplicity reduces the overall attack surface, simplifies security reviews and minimizes the risk of vulnerabilities.
<br/><br/><a href="https://go.dev">Golang</a> is an open source programming language made by google and is under strict review by security experts.`,
				Img: "https://raw.githubusercontent.com/tunnels-is/media/master/web/gopher.png",
			},
		},

		Features: {
			Basic: {
				NoLogging: {
					Title: "No Logging",
					Content: "User actions are not logged in our public vpn network",
					Icon: LayersIcon,
				},
				NoTracking: {
					Title: "No Tracking",
					Content: "User actions are not tracked in any way in our public network",
					Icon: LayersIcon,
				},
				NoPersistance: {
					Title: "No Persistence",
					Content: "Everything is kept exactly where you placed tunnels, no hidden files or background services",
					Icon: LayersIcon,
				},
				NoInstallation: {
					Title: "Portable",
					Content: "Just download Tunnels and place it wherever you like, even on a USB.. No installation required",
					Icon: LayersIcon,
				},
				AnonymousAccounts: {
					Title: "Anonymity",
					Content: "Accounts can be created using usernames or uuids",
					Icon: LayersIcon,
				},
				AnonymousPayments: {
					Title: "Account Top-Ups",
					Content: "Tunnels offers anonymous license keys which can be used to top-up your account",
					Icon: LayersIcon,
				},
				DNSCustom: {
					Title: "Custom DNS",
					Content: "Register custom A, TXT and CNAME records for any domain",
					Icon: LayersIcon,
				},
				DNSTransformation: {
					Title: "DNS to DoH",
					Content: "Our in-build DNS server can translate your normal DNS to DNS over HTTPS",
					Icon: LayersIcon,
				},
				DNSWhoIS: {
					Title: "WHOIS With A Click",
					Content: "Get whois information for any resolved domain with the click of a button",
					Icon: LayersIcon,
				},
				DNSCustomBlocklist: {
					Title: "Custom Block Lists",
					Content: "Use your own block lists to block domains",
					Icon: LayersIcon,
				},
				DNSLeakPrevention: {
					Title: "DNS Leak Prevention",
					Content: "Use our built-in DNS proxy to completely prevent DNS leaks, even without a Tunnels account",
					Icon: LayersIcon,
				},
				IPV6Blocking: {
					Title: "IPv6 Blocking",
					Content: "Tunnels can be configured to deny connections if IPv6 is enabled",
					Icon: LayersIcon,
				},
				DNSAnalytics: {
					Title: "DNS Analytics",
					Content: "Get real time DNS analytics",
					Icon: LayersIcon,
				},
				DNSBlocking: {
					Title: "DNS Protection",
					Content: "Tunnels has a built in DNS blocking mechanisms, available for free",
					Icon: LayersIcon,
				},
				DNSDailyUpdates: {
					Title: "Daily Updates",
					Content: "Tunnels creates combined DNS blocklists from popular sources, everyday. Users can access these sources with the press of a button",
					Icon: LayersIcon,
				},
				Torrenting: {
					Title: "Special Servers",
					Content: "We are in the process of setting up server designated to Torrenting",
					Icon: LayersIcon,
				},

			},
			Advanced: {
				CommunitySourceAccess: {
					Title: "Source Available",
					Content: "Our server and client implementations are source available on github, links can be found at the bottom of the page",
					Icon: LayersIcon,
				},
				TunnelsOnOpenWRT: {
					Title: "Tunnels on OpenWRT",
					Content: "Our NAT protocol was designed to work on unix based router software",
					Icon: LayersIcon,
				},
				OptimizedSoftware: {
					Title: "Modern language",
					Content: "Tunnels is built from the ground up using Golang, a multi-threaded modern programming language",
					Icon: LayersIcon,
				},
				KillSwitch: {
					Title: "Kill Switch",
					Content: "Prevent IP leaks during accidental disconnects",
					Icon: LayersIcon,
				},
				Management: {
					Title: "User Management",
					Content: "Manage users, groups and devices in the application UI",
					Icon: LayersIcon,
				},
				UserNameBased: {
					Title: "Invite Friends",
					Content: "Invited friends to join your tunnels server with simple user/password registration",
					Icon: LayersIcon,
				},
			},
			Enterprise: {
				CustomIntegration: {
					Title: "Custom Integrations",
					Content: "We are always open to creating custom integration when the need arises.",
					Icon: LayersIcon,
				},
				UserManagement: {
					Title: "User Management",
					Content: "Group based user management is built into the platform.",
					Icon: LayersIcon,
				},
				Support247: {
					Title: "24/7 Support",
					Content: "Enterprise clients receive 24/7 support via all of our support platforms",
					Icon: LayersIcon,
				},
				OnPremisInstall: {
					Title: "On Premise",
					Content: "Tunnels support full on-premis deployments which are essential for passing security audits",
					Icon: LayersIcon,
				},
				HighlyScalable: {
					Title: "Scales With Growth",
					Content: "100 users or 1000000 users, it makes no difference, our platform was design to fit even the largest companies.",
					Icon: LayersIcon,
				},
				NoHardware: {
					Title: "No Hardware",
					Content: "No need to buy expensive hardware, our platform runs on whatever you have available, as long as it runs linux.",
					Icon: LayersIcon,
				},
				NoVendorLockin: {
					Title: "No Vendor Lock",
					Content: "Our platform can be deployed on any network without extensive configurations. This means you will not be vendor locked.",
					Icon: LayersIcon,
				},
			},
		},
	},
	Temp: {
		Title: "Title number one",
		Content: `The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H.Rackham.`,
		ContentSmall: `The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.`,
		Img: "https://raw.githubusercontent.com/tunnels-is/media/master/v3/temp/W1.png",
		ImgSmall: "https://raw.githubusercontent.com/tunnels-is/media/master/v3/temp/clean-settings.png",
	},
	Menu: {
		Burger: "https://raw.githubusercontent.com/tunnels-is/media/master/v3/menu/burger.svg",

	},
	Animators: {



	},
	Config: {
		docsLink: "https://docs.nicelandvpn.is",
		APITimeout: 20000,
		HEADERS: {
			// "X-AUTH-TOKEN": "some-authentication-token",
			"Content-Type": "application/json",
			"Accept": "*/*",
		},
		AnonKey: {
			Title: "Anonymous License",
			// Price: 9,
			Price: 8,
			URL: "https://tunnels.lemonsqueezy.com/buy/e8cbc47c-c19b-4ef7-9f8a-c8e2b94597dd",
			Button: "Register Now",
			Included: ["something", "something", "something"],
		},
		subs: [
			{
				Title: "1 Month",
				Price: 8,
				URL: "https://tunnels.lemonsqueezy.com/buy/6f75871d-ea8d-46e3-927b-f62dc2453ad3",
				Button: "One Month",
				Included: ["- Public Network", "- Money Back Guarantee", "- Support"],
			},
			{
				Title: "12 Months",
				Price: 4,
				URL: "https://tunnels.lemonsqueezy.com/buy/71bb1dd8-8fac-4d56-bfbf-63cfd6081c5a",
				Button: "One Year",
				Included: ["- Public Network", "- Money Back Guarantee", "- Support"],
			},
			{
				Title: "6 Months",
				// Price: 8,
				Price: 6,
				URL: "https://tunnels.lemonsqueezy.com/buy/214e7bee-3e9c-4d14-8e3d-0a96a1b48361",
				Button: "Six Months",
				Included: ["- Public Network", "- Money Back Guarantee", "- Support"],
			},
		],

	},
	MenuURL: "https://raw.githubusercontent.com/tunnels-is/website/main/docs/menu.json",
	GetAndSaveDomain: function() {
		let host = window.location.host
		let domain = "default"

		try {
			var hostSplit = host.split('.')
			domain = hostSplit[hostSplit.length - 1]
		} catch (error) {
			console.log("ERROR PARSING DOMAIN")
			console.dir(error)
		}

		STORE.Cache.Set("domain", domain)
		return domain
	},
	GetAndSaveSubdomain: function() {
		var host = window.location.host
		let subdomain = ""

		try {
			subdomain = host.split('.')[0]
		} catch (error) {
			console.log("ERROR PARSING FIRST SUBDOMAIN")
			console.dir(error)
		}

		STORE.Set("subdomain", subdomain)
		return subdomain
	},
	Cache: {
		Clear: function() {
			return window.localStorage.clear()
		},
		Get: function(key) {
			return window.localStorage.getItem(key)
		},
		GetBool: function(key) {
			let data = window.localStorage.getItem(key)
			if (data === "true") {
				return true
			}
			return false
		},
		Set: function(key, value) {
			window.localStorage.setItem(key, value)
		},
		Del: function(key) {
			window.localStorage.removeItem(key)
		},
		DelObject: function(key) {
			window.localStorage.removeItem(DATA + key)
			window.localStorage.removeItem(DATA + key + "_ct")
		},
		GetObject: function(key) {
			let jsonData = null
			try {
				jsonData = JSON.parse(window.localStorage.getItem(DATA + key))
				console.log("%cGET OBJECT:", 'background: lightgreen; color: black', key, jsonData)
			}
			catch (e) {
				console.log(e)
				return undefined
			}

			if (jsonData === null) {
				return undefined
			}

			return jsonData
		},
		SetObject: function(key, object) {
			try {
				console.log("%cSET OBJECT:", 'background: lightgreen; color: black', key, object)
				let data = JSON.stringify(object)
				window.localStorage.setItem(DATA + key, data)
				window.localStorage.setItem(DATA + key + "_ct", moment().unix())
			}
			catch (e) {
				console.log(e)
				alert(e)
			}

		},
	},
	SessionCache: {
		Clear: function() {
			return window.sessionStorage.clear()
		},
		Get: function(key) {
			return window.sessionStorage.getItem(key)
		},
		GetBool: function(key) {
			let data = window.sessionStorage.getItem(key)
			if (data === "true") {
				return true
			}
			return false
		},
		Set: function(key, value) {
			window.sessionStorage.setItem(key, value)
		},
		Del: function(key) {
			window.sessionStorage.removeItem(key)
		},
		DelObject: function(key) {
			window.sessionStorage.removeItem(DATA + key)
			window.sessionStorage.removeItem(DATA + key + "_ct")
		},
		GetObject: function(key) {
			let jsonData = null
			try {
				jsonData = JSON.parse(window.sessionStorage.getItem(DATA + key))
				console.log("%cGET OBJECT:", 'background: lightgreen; color: black', key, jsonData)
			}
			catch (e) {
				console.log(e)
				return undefined
			}

			if (jsonData === null) {
				return undefined
			}

			return jsonData
		},
		SetObject: function(key, object) {
			try {
				console.log("%cSET OBJECT:", 'background: lightgreen; color: black', key, object)
				let data = JSON.stringify(object)
				window.sessionStorage.setItem(DATA + key, data)
			}
			catch (e) {
				console.log(e)
				alert(e)
			}

		},
	},
	API: {
		Register: async (data) => {
			try {
				let resp = await axios.post(
					// "https://api.tunnels.is:444/v3/user/create",
					"https://api.tunnels.is/v3/user/create",
					data,
					{
						timeout: 20000,
						headers: { "Content-Type": "application/json" }
					}
				)
				return resp

			} catch (error) {
				return error
			}
		}
	}

};


export default STORE;
