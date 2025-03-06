import React, { useEffect } from "react";
import ScrollAnimate from "../components/ScrollAnimate";
import SmallBanner from "../components/SmallBanner";
import Register from "../components/Register";
import STORE from "../store";

const RegisterPage = () => {
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

	return (
		<div className="register-page">

			<SmallBanner
				title={STORE.Content.Register.Title}
				subtitle={STORE.Content.Register.Subtitle}
				tag1={"animate1"}
			/>

			<Register />
		</div>
	)
}

export default RegisterPage;
