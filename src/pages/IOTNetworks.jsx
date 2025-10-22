import React, { useEffect } from "react";
import Diagram from "../components/DiagramComp";
import ScrollAnimate from "../components/ScrollAnimate";
import TextImageLeft from "../components/TextImageLeft";
import TextImageRight from "../components/TextImageRight";

const IOTNetworks = () => {
	const [initialize] = ScrollAnimate()

	useEffect(() => {
		initialize({
			"animate1": true,
			"animate2": true,
			"animate3": true,
			"animate4": true,
			"animate5": true,
			"animate6": true
		})

		window.scrollTo(0, 0)
	}, [])

	return (
		<div className="homelab-page">
			<Diagram
				tag1="animate1"
				title="Homelab Setup"
				content="some subtitle text some subtitle textsome subtitle text<br/>some subtitle textsome subtitle textsome subtitle text"
				img="https://raw.githubusercontent.com/tunnels-is/media/master/v3/temp/W1.png"

				imgClass="large-diagram"
			/>

			<TextImageLeft
				tag1="animate4"
				title={"User Management"}
				content={"Tunnels offers a built-in DNS Server/Proxy which comes with extensive blacklisting features, daily block list updates and the ability to define custom DNS records. Tunnels DNS server also facilitates DNS Routing to ensure proper DNS resolution when connected to multiple networks."}
				img="https://raw.githubusercontent.com/tunnels-is/media/master/v3/screens/dns-panel.png"
			/>

			<TextImageRight
				tag1="animate2"
				title={"DNS Server"}
				content={"Tunnels offers a built-in DNS Server/Proxy which comes with extensive blacklisting features, daily block list updates and the ability to define custom DNS records. Tunnels DNS server also facilitates DNS Routing to ensure proper DNS resolution when connected to multiple networks."}
				img="https://raw.githubusercontent.com/tunnels-is/media/master/v3/screens/dns-panel.png"
			/>

			<Diagram
				tag1="animate3"
				title="File Sharing"
				content="some subtitle text some subtitle textsome subtitle text<br/>some subtitle textsome subtitle textsome subtitle text"
				img="https://raw.githubusercontent.com/tunnels-is/media/master/v3/temp/W1.png"
				imgClass="large-diagram"
			/>

		</div>
	)
}

export default IOTNetworks;
