import React, { useEffect } from "react";
import ScrollAnimate from "../components/ScrollAnimate";
import TextCenter from "../components/TextCenter";
import TextBanner from "../components/TextBanner";
import CFG from "../storev2";

const FreeAndOpenSource = () => {
	const [initialize] = ScrollAnimate()

	useEffect(() => {
		initialize({
			"animate1": true,
			"animate2": true,
			"animate3": true,
		})

		window.scrollTo(0, 0)
	}, [])

	const content = CFG.Content.Pages.FreeAndOpenSource.Sections;

	return (
		<div className="free-and-opensource-page">
			{/* Banner Section */}
			<TextBanner
				title={content.Banner.Title}
				text={content.Banner.Text}
				link={content.Banner.Link}
				linkText="View on GitHub"
				tag1="animate1"
			/>

			{/* Why Open Source Section */}
			<TextCenter
				title="Why Open Source?"
				content={content.WhyOpenSource.Text}
				tag1="animate2"
			/>

			{/* Join Community Section */}
			<TextCenter
				title="Join Our Community"
				content={content.JoinOurCommunity.Text}
				tag1="animate3"
			/>
		</div>
	)
}

export default FreeAndOpenSource;