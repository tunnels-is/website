import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ScrollAnimate from "./ScrollAnimate";
import STORE from "../store";
import Download from "./Download";

const Register = () => {
	const [initialize] = ScrollAnimate();
	const [email, setEmail] = useState("");
	const [pass, setPass] = useState("");
	const [pass2, setPass2] = useState("");
	const [success, setSuccess] = useState(undefined);
	const [error, setError] = useState(undefined);

	const register = async () => {

		let resp = await STORE.API.Register({
			email: email,
			password: pass,
			password2: pass2,
		})
		console.dir(resp)
		if (resp.status === 200) {
			setSuccess("Welcome to Tunnels!")
		} else {
			setError(resp?.response?.data)
		}

	}

	useEffect(() => {
		initialize({ ["register-animate"]: true })
	})

	if (success !== undefined) {
		return (
			<div className={"register-component register-animate viewport-hide"}>
				<div className="success">{success}</div>
				<Download />
			</div>
		)
	}

	return (
		<div className={"register-component register-animate viewport-hide"}>
			<div className="form">

				{error &&
					<div className="error">{error}</div>
				}

				<input
					id="email"
					type="text"
					className="field email"
					placeholder="Email or Username"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>

				<input
					id="password"
					type="password"
					placeholder="Passwod"
					className="field password"
					value={pass}
					onChange={(e) => setPass(e.target.value)}
				/>

				<input
					id="confirm-password"
					type="password"
					placeholder="Confirm Password"
					className="field confirm-password"
					value={pass2}
					onChange={(e) => setPass2(e.target.value)}
				/>

				<div
					className="cta-button"
					onClick={() => register()}
				>Register</div>
			</div>
		</div>
	)
}

export default Register;


