import React, { useEffect } from "react";
import Banner from "../components/Banner";
import ScrollAnimate from "../components/ScrollAnimate";
import STORE from "../store";
import Diagram from "../components/DiagramComp";
import TextImageRight from "../components/TextImageRight";

const Home = () => {
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

		let a = {}

		initialize(a)

		window.scrollTo(0, 0)
	}, [])

	return (<div className="home-page">

		<Banner
			tag1={"animate1"}
		/>


		{/* <Diagram
			imgClass="diagram-fix-ml"
			link={"/technical"}
			title={STORE.Content.Diagrams.Genericvpn.Title}
			content={STORE.Content.Diagrams.Genericvpn.Content}
			img={STORE.Content.Diagrams.Genericvpn.Img1}
			tag1={"animate2"}
		/>

		<Diagram
			imgClass="diagram-fix-ml"
			link={"/technical"}
			title={STORE.Content.Diagrams.IsolatedNetwork.Title}
			content={STORE.Content.Diagrams.IsolatedNetwork.Content}
			img={STORE.Content.Diagrams.IsolatedNetwork.Img1}
			tag1={"animate3"}
		/>

		<Diagram
			imgClass="diagram-fix-ml"
			link={"/technical"}
			title={STORE.Content.Diagrams.Routing.Title}
			content={STORE.Content.Diagrams.Routing.Content}
			img={STORE.Content.Diagrams.Routing.Img1}
			tag1={"animate4"}
		/>

		<Diagram
			link={"/technical"}
			imgClass="diagram-fix-ml"
			title={STORE.Content.Diagrams.Nat.Title}
			content={STORE.Content.Diagrams.Nat.Content}
			img={STORE.Content.Diagrams.Nat.Img1}
			tag1={"animate5"}
		/> */}

		{/* <TextImageRight
			title={STORE.Content.DNSPage.DNSProtection.Title}
			content={STORE.Content.DNSPage.DNSProtection.Content}
			img={STORE.Content.DNSPage.DNSProtection.Img}
			tag1={"animate7"}
		/> */}

		{/* <Diagram
			link={"/dns"}
			imgClass="diagram-fix-ml"
			title={STORE.Content.Diagrams.Dns.Title}
			content={STORE.Content.Diagrams.Dns.Content}
			img={STORE.Content.Diagrams.Dns.Img1}
			tag1={"animate6"}
		/> */}

	</div>)

}

export default Home;
