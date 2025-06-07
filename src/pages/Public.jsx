import React, { useEffect } from "react";
import ScrollAnimate from "../components/ScrollAnimate";
import SmallBanner from "../components/SmallBanner";
import BigFeatures from "../components/BigFeatures";
import STORE from "../store";
import TextImageRight from "../components/TextImageRight";
import Diagram from "../components/DiagramComp";
import Pricing from "../components/Pricing";

const featureList = [
	{ ...STORE.Content.Features.Basic.AnonymousAccounts, Tag: "big12", BG: false },
	{ ...STORE.Content.Features.Basic.AnonymousPayments, Tag: "big14", BG: false },
	{ ...STORE.Content.Features.Basic.NoLogging, Tag: "big18", BG: false },
	{ ...STORE.Content.Features.Basic.NoTracking, Tag: "big19", BG: true },
	{ ...STORE.Content.Features.Basic.NoInstallation, Tag: "big11", BG: true },
	{ ...STORE.Content.Features.Basic.NoPersistance, Tag: "big13", BG: true },
	{ ...STORE.Content.Features.Basic.Torrenting, Tag: "big16", BG: false },
]

const featureList2 = [
]

const PublicPage = () => {
	const [initialize] = ScrollAnimate()

	useEffect(() => {
		window.scrollTo(0, 0)

		let a = {
			"animate1": true,
			"animate2": true,
			"animate3": true,
			"animate4": true,
			"animate10": true,
		}

		featureList?.forEach(f => {
			a[f.Tag] = true
		})

		featureList2?.forEach(f => {
			a[f.Tag] = true
		})

		initialize(a)

	}, [])

	return (
		<div className="basic-page">
			<SmallBanner
				title={"The Tunnels Network"}
				subtitle={"multi route public network"}
				tag1={"animate1"}
			/>

			<BigFeatures features={featureList} />

			<Pricing />

			<Diagram
				title={STORE.Content.Diagrams.PublicVPN.Title}
				content={STORE.Content.Diagrams.PublicVPN.Content}
				img={STORE.Content.Diagrams.PublicVPN.Img1}
				tag1={"animate3"}
			/>

		</div>
	)

}

export default PublicPage;

