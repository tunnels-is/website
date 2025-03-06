import React, { useEffect } from "react";
import ScrollAnimate from "../components/ScrollAnimate";
import STORE from "../store";
import Triforce from "../components/Triforce";
import SmallBanner from "../components/SmallBanner";
import Download from "../components/Download";

const DownloadPage = () => {
	const [initialize] = ScrollAnimate()

	useEffect(() => {
		window.scrollTo(0, 0)


		let a = {
			"animate1": true,
			"animate2": true,
			"animate3": true,
			"animate4": true,
		}

		initialize(a)

	}, [])

	return (<div className="small-gap-page download-page">

		<SmallBanner
			title={"Single Binary"}
			subtitle={"no install required.."}
			tag1={"animate1"}
		/>

		<Download />

	</div>)

}

export default DownloadPage;
