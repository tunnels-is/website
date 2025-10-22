import React, { useEffect } from "react";
import Diagram from "../components/DiagramComp";
import ScrollAnimate from "../components/ScrollAnimate";
import TextImageLeft from "../components/TextImageLeft";
import TextImageRight from "../components/TextImageRight";
import TextBanner from "../components/TextBanner";
import TextCenter from "../components/TextCenter";

const PersonalVPN = () => {
	const [initialize] = ScrollAnimate()

	useEffect(() => {
		initialize({
			"animate1": true,
			"animate2": true,
			"animate3": true,
			"animate4": true,
			"animate5": true,
			"animate6": true,
			"animate7": true
		})

		window.scrollTo(0, 0)
	}, [])

	return (
		<div className="homelab-page">
			{/* Hero Banner */}
			<TextBanner
				title="Your Personal VPN, Your Rules"
				text="Take control of your homelab with a self-hosted VPN solution that's free, powerful, and puts you in complete control. Access your files, services, and devices from anywhere in the world with enterprise-grade security."
				link="https://docs.tunnels.is/docs/topics/homelab"
				linkText="Get Started"
				tag1="animate1"
			/>

			{/* Main Homelab Diagram */}
			<Diagram
				tag1="animate2"
				title="Connect to Your Homelab from Anywhere"
				content="Whether you're accessing your NAS, managing IoT devices, or connecting to your development environment, Tunnels provides secure, encrypted access to your entire home network. No complicated setup, no monthly fees, just straightforward self-hosted VPN."
				img="https://raw.githubusercontent.com/tunnels-is/media/master/v3/temp/W1.png"
				imgClass="large-diagram"
			/>

			{/* Secure Access */}
			<TextImageRight
				tag1="animate3"
				title="Secure Remote Access"
				content="Access your homelab services securely from anywhere. Connect to your file servers, media libraries, development environments, and smart home devices with military-grade encryption. Tunnels creates a private tunnel between you and your home network, keeping your data safe from prying eyes."
				img="https://raw.githubusercontent.com/tunnels-is/media/master/v3/screens/dns-panel.png"
			/>

			{/* Built-in DNS Protection */}
			<TextImageLeft
				tag1="animate4"
				title="Built-in DNS Security & Custom Records"
				content="Protect your entire network with Tunnels' integrated DNS server. Block ads, trackers, and malicious domains across all your devices. Set up custom DNS records for your internal services and enjoy seamless access to your homelab resources with friendly domain names."
				img="https://raw.githubusercontent.com/tunnels-is/media/master/v3/screens/dns-panel.png"
			/>

			{/* User Management */}
			<TextImageRight
				tag1="animate5"
				title="Share with Family & Friends"
				content="Invite family members or friends to access your homelab with built-in user management. Create separate accounts, control what each person can access, and monitor connections in real-time. Perfect for sharing your Plex server, photo library, or other services."
				img="https://raw.githubusercontent.com/tunnels-is/media/master/v3/screens/dns-panel.png"
			/>

			{/* Why Choose Section */}
			<TextCenter
				title="Why Choose Tunnels for Your Homelab?"
				content="<strong>Free & Open Source</strong> - No subscription fees, no hidden costs. Use all features without limitations.<br/><br/><strong>Complete Control</strong> - Your data stays on your hardware. No third-party servers, no tracking, no logging.<br/><br/><strong>Easy Setup</strong> - Get up and running in minutes. Works on Raspberry Pi, old PCs, or any Linux machine.<br/><br/><strong>Powerful Features</strong> - Advanced routing, network isolation, bandwidth control, and multi-device support all included.<br/><br/><strong>Cross-Platform</strong> - Clients available for Windows, macOS, and Linux. Connect from any device."
				tag1="animate6"
			/>

			{/* Network Diagram */}
			<Diagram
				tag1="animate7"
				title="Advanced Network Management"
				content="Isolate IoT devices from your main network, create secure zones for different services, and control access with granular firewall rules. Tunnels gives you the networking power of enterprise solutions without the complexity or cost."
				img="https://raw.githubusercontent.com/tunnels-is/media/master/v3/temp/W1.png"
				imgClass="large-diagram"
			/>

		</div>
	)
}

export default PersonalVPN;
