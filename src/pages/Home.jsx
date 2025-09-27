import React, { useEffect } from "react";
import TopicsBanner from "../components/TopicsBanner";
import ScrollAnimate from "../components/ScrollAnimate";

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
		<TopicsBanner
			tag1={"animate1"}
		/>
	</div>)
}

export default Home;
