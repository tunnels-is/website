import React, { useEffect } from "react";
import Diagram from "../components/DiagramComp";
import ScrollAnimate from "../components/ScrollAnimate";
import TextImageLeft from "../components/TextImageLeft";
import TextImageRight from "../components/TextImageRight";
import TextBanner from "../components/TextBanner";
import TextCenter from "../components/TextCenter";
import BigFeatures from "../components/BigFeatures";

const CloudAndBaremetal = () => {
	const [initialize] = ScrollAnimate()

	useEffect(() => {
		initialize({
			"animate1": true,
			"animate2": true,
			"animate3": true,
			"animate4": true,
			"animate5": true,
			"animate6": true,
			"animate7": true,
			"animate8": true,
			"animate9": true,
			"animate10": true,
			"animate11": true,
		})

		window.scrollTo(0, 0)
	}, [])

	const benefitFeatures = [
		{
			Tag: "animate4",
			Title: "Infinite Scalability",
			Content: "Deploy multiple VPN servers to distribute traffic load across your infrastructure. Add or remove servers dynamically based on demand without disrupting existing connections. Scale horizontally across cloud regions or data centers."
		},
		{
			Tag: "animate5",
			Title: "Built-in Redundancy",
			Content: "Eliminate single points of failure with distributed VPN infrastructure. If one server goes offline, users automatically connect to healthy servers. Ensure business continuity with always-available access to your networks."
		},
		{
			Tag: "animate6",
			Title: "Global Distribution",
			Content: "Deploy VPN servers in multiple geographic regions for optimal performance. Reduce latency by routing users to their nearest server. Support remote teams across continents with local access points."
		}
	]

	return (
		<div className="homelab-page">
			{/* Hero Banner */}
			<TextBanner
				tag1="animate1"
				title="Enterprise Multi-Server Infrastructure"
				text="Scale your VPN infrastructure across cloud providers, data centers, and bare metal servers. Centralized authentication with distributed VPN servers for maximum performance, redundancy, and geographic reach."
				link="https://docs.tunnels.is/docs/topics/multi-server"
				linkText="View Documentation"
			/>

			{/* Architecture Overview */}
			<Diagram
				tag1="animate2"
				title="Centralized Control, Distributed Performance"
				content="Deploy one control server for authentication and management, with multiple VPN servers handling encrypted tunnel traffic. Each VPN server validates connections using cryptographic signatures from the control server."
				img="https://raw.githubusercontent.com/tunnels-is/media/master/v3/diagrams/sysadmin-dc-multi.svg"
				imgClass="large-diagram"
			/>

			{/* Key Benefits Grid */}
			<BigFeatures features={benefitFeatures} />

			{/* Why Choose Multi-Server */}
			<TextCenter
				tag1="animate7"
				title="Why Multi-Server Architecture?"
				content="Modern enterprises need infrastructure that scales with their growth. Whether you're managing multiple office locations, serving global customers, or building redundant systems, a multi-server architecture provides the flexibility and reliability your organization demands.<br/><br/>Separate your authentication layer from your data plane. Manage all users, devices, and access policies from a single control server while distributing the heavy lifting of VPN traffic across multiple dedicated servers."
			/>

			{/* Use Case: Cloud Deployments */}
			<TextImageRight
				tag1="animate8"
				title="Cloud & Multi-Cloud Deployments"
				content="Deploy Tunnels across AWS, Google Cloud, Azure, or any cloud provider. Create VPN endpoints in multiple regions to serve users worldwide with low latency. Mix cloud and bare metal servers in a unified infrastructure managed from a single control plane.<br/><br/>Perfect for DevOps teams managing Kubernetes clusters, microservices, and distributed databases across multiple availability zones and regions."
				img="https://raw.githubusercontent.com/tunnels-is/media/master/v3/diagrams/multi-office.svg"
			/>

			{/* Use Case: Centralized Management */}
			<TextImageLeft
				tag1="animate9"
				title="Centralized User & Access Management"
				content="Manage all users, devices, groups, and access policies from your central control server. When you add a user or update permissions, changes propagate instantly to all VPN servers. No need to configure each server individually.<br/><br/>Implement role-based access control, enforce two-factor authentication, and monitor all connections from a single administrative interface."
				img="https://raw.githubusercontent.com/tunnels-is/media/master/v3/screens/orgs-final.png"
			/>

			{/* Security & Certificate Model */}
			<Diagram
				tag1="animate10"
				title="Certificate-Based Security Model"
				content="VPN servers validate user connections using cryptographic signatures from the control server. Each server has its own TLS certificate for encrypted communication. The control server's certificate is distributed to VPN servers as the root of trust."
				img="https://raw.githubusercontent.com/tunnels-is/media/master/v3/diagrams/vpn-encryption.svg"
				imgClass="large-diagram"
			/>

			{/* Flexible Deployment */}
			<TextCenter
				tag1="animate11"
				title="Flexible Deployment Options"
				content="Deploy on bare metal servers for maximum performance, cloud VMs for flexibility, or a hybrid combination. Each VPN server can provide access to its local network resources while maintaining connectivity to your centralized authentication system.<br/><br/>Configure bandwidth limits, enable internet routing, set up custom DNS resolvers, and implement network address translation independently on each VPN server to match your specific requirements."
			/>

		</div>
	)
}

export default CloudAndBaremetal;
