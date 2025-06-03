import TextImageLeft from "../components/TextImageLeft";
import ScrollAnimate from "../components/ScrollAnimate";
import SmallBanner from "../components/SmallBanner";
import BigFeatures from "../components/BigFeatures";
import React, { useEffect } from "react";
import STORE from "../store";
import Diagram from "../components/DiagramComp";
import TextImageRight from "../components/TextImageRight";


const featureList2 = [
	{ ...STORE.Content.Features.Basic.NoInstallation, Tag: "big11", BG: true },
	{ ...STORE.Content.Features.Basic.NoPersistance, Tag: "big13", BG: false },
	{ ...STORE.Content.Features.Advanced.Management, Tag: "big32", BG: false },
	{ ...STORE.Content.Features.Advanced.UserNameBased, Tag: "big33", BG: true },
]

const featureList = [
	// { ...STORE.Content.Features.Advanced.KillSwitch, Tag: "big31", BG: false },
	// { ...STORE.Content.Features.Advanced.TunnelsOnOpenWRT, Tag: "big42", BG: false },
	// { ...STORE.Content.Features.Advanced.OptimizedSoftware, Tag: "big41", BG: true },
	// { ...STORE.Content.Features.Basic.IPV6Blocking, Tag: "big15", BG: true },
]


const f = [
	{ ...STORE.Content.Features.Basic.DNSBlocking, Tag: "big21", BG: true },
	{ ...STORE.Content.Features.Basic.DNSDailyUpdates, Tag: "big22", BG: false },
	{ ...STORE.Content.Features.Basic.DNSAnalytics, Tag: "big23", BG: false },
	{ ...STORE.Content.Features.Basic.DNSLeakPrevention, Tag: "big24", BG: true },
	{ ...STORE.Content.Features.Basic.DNSCustom, Tag: "big25", BG: true },
	{ ...STORE.Content.Features.Basic.DNSTransformation, Tag: "big26", BG: false },
	{ ...STORE.Content.Features.Basic.DNSCustomBlocklist, Tag: "big27", BG: true },
	{ ...STORE.Content.Features.Basic.DNSWhoIS, Tag: "big28", BG: false },
]

const f2 = [
	{ ...STORE.Content.Features.Basic.NoLogging, Tag: "big18", BG: false },
	{ ...STORE.Content.Features.Basic.NoTracking, Tag: "big19", BG: true },
	{ ...STORE.Content.Features.Basic.AnonymousAccounts, Tag: "big12", BG: false },
	{ ...STORE.Content.Features.Basic.Torrenting, Tag: "big16", BG: false },
	{ ...STORE.Content.Features.Basic.AnonymousPayments, Tag: "big14", BG: false },
]

const Technical = () => {

	const [initialize] = ScrollAnimate()

	useEffect(() => {
		window.scrollTo(0, 0)

		let a = {
			"a1": true,
			"a2": true,
			"a3": true,
			"a4": true,
			"a5": true,
			"a6": true,
			"a7": true,
			"a8": true,
			"a9": true,
			"a10": true,
			"a11": true,
			"a12": true,
			"a13": true,
			"a14": true,
			"a15": true,
			"a16": true,
			"a17": true,
			"a18": true,
		}

		featureList2?.forEach(f => {
			a[f.Tag] = true
		})
		featureList?.forEach(f => {
			a[f.Tag] = true
		})
		f?.forEach(f => {
			a[f.Tag] = true
		})

		initialize(a)

	}, [])

	return (<div className="basic-page">

		<SmallBanner
			title={STORE.Content.FeaturePage.SmallBanner.Title}
			subtitle={STORE.Content.FeaturePage.SmallBanner.Subtitle}
			tag1={"a1"}
		/>
		<BigFeatures features={featureList2} />

		<Diagram
			imgClass="diagram-fix-nml"
			title={STORE.Content.Diagrams.RoutingDetails.Title}
			content={STORE.Content.Diagrams.RoutingDetails.Content}
			img={STORE.Content.Diagrams.RoutingDetails.Img1}
			tag1={"a5"}
		/>

		<Diagram
			imgClass="diagram-fix-ml"
			title={STORE.Content.Diagrams.IsolatedNetworkDetails.Title}
			content={STORE.Content.Diagrams.IsolatedNetworkDetails.Content}
			img={STORE.Content.Diagrams.IsolatedNetworkDetails.Img1}
			tag1={"a4"}
		/>

		<Diagram
			title={STORE.Content.Diagrams.NatDetails.Title}
			content={STORE.Content.Diagrams.NatDetails.Content}
			img={STORE.Content.Diagrams.NatDetails.Img1}
			tag1={"a6"}
		/>


		<BigFeatures features={featureList} />

		<Diagram
			title={STORE.Content.Diagrams.VPNEncryption.Title}
			content={STORE.Content.Diagrams.VPNEncryption.Content}
			img={STORE.Content.Diagrams.VPNEncryption.Img1}
			tag1={"a2"}
		/>

		<TextImageLeft
			title={STORE.Content.Enterprise.TextImageLeft.Title}
			content={STORE.Content.Enterprise.TextImageLeft.Content}
			img={STORE.Content.Enterprise.TextImageLeft.Img}
			shadow={false}
			className="gopher"
			tag1={"a3"}
		/>

		<TextImageRight
			link={"dns"}
			title={STORE.Content.DNSPage.DNSProtection.Title}
			content={STORE.Content.DNSPage.DNSProtection.Content}
			img={STORE.Content.DNSPage.DNSProtection.Img}
			tag1={"a8"}
		/>

		<Diagram
			title={STORE.Content.Diagrams.DnsServerSide.Title}
			content={STORE.Content.Diagrams.DnsServerSide.Content}
			img={STORE.Content.Diagrams.DnsServerSide.Img1}
			tag1={"a9"}
		/>

		<Diagram
			title={STORE.Content.Diagrams.DnsDeviceSide.Title}
			content={STORE.Content.Diagrams.DnsDeviceSide.Content}
			img={STORE.Content.Diagrams.DnsDeviceSide.Img1}
			tag1={"a10"}
		/>

		<BigFeatures features={f} />




	</div>)

}

export default Technical;
