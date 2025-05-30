import React, { useEffect } from "react";
import ScrollAnimate from "../components/ScrollAnimate";
import SmallBanner from "../components/SmallBanner";
import BigFeatures from "../components/BigFeatures";
import STORE from "../store";
import ContactSales from "../components/ContactSales";
import Diagram from "../components/DiagramComp";

const bigFeatures = [
	{ ...STORE.Content.Features.Enterprise.UserManagement, Tag: "bigfeatureanimate3", BG: true },
	{ ...STORE.Content.Features.Enterprise.OnPremisInstall, Tag: "bigfeatureanimate4", BG: false },

	{ ...STORE.Content.Features.Enterprise.HighlyScalable, Tag: "bigfeatureanimate2", BG: true },
	{ ...STORE.Content.Features.Enterprise.NoVendorLockin, Tag: "bigfeatureanimate8", BG: false },

	{ ...STORE.Content.Features.Enterprise.CustomIntegration, Tag: "bigfeatureanimate5", BG: true },
	{ ...STORE.Content.Features.Enterprise.NoHardware, Tag: "bigfeatureanimate7", BG: false },

	{ ...STORE.Content.Features.Enterprise.Support247, Tag: "bigfeatureanimate1", BG: true },
]


const Enterprise = () => {
	const [initialize] = ScrollAnimate()

	useEffect(() => {
		window.scrollTo(0, 0)


		let a = {
			"animate1": true,
			"animate2": true,
			"animate3": true,
			"animate4": true,
			"animate5": true,
			"animate6": true,
			"animate7": true,
		}

		bigFeatures?.forEach(f => {
			a[f.Tag] = true
		})


		initialize(a)

	}, [])

	return (<div className="small-gap-page">


		<SmallBanner
			title={STORE.Content.Enterprise.SmallBanner.Title}
			subtitle={STORE.Content.Enterprise.SmallBanner.Subtitle}
			tag1={"animate1"}
		/>

		<Diagram
			title={STORE.Content.Diagrams.OfficeMulti.Title}
			content={STORE.Content.Diagrams.OfficeMulti.Content}
			img={STORE.Content.Diagrams.OfficeMulti.Img1}
			tag1={"animate6"}
		/>

		<Diagram
			title={STORE.Content.Diagrams.SysadminMulti.Title}
			content={STORE.Content.Diagrams.SysadminMulti.Content}
			img={STORE.Content.Diagrams.SysadminMulti.Img1}
			tag1={"animate7"}
		/>


		<BigFeatures features={bigFeatures} />

		<ContactSales />

	</div>)

}

export default Enterprise;
