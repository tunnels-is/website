import { useNavigate, useLocation } from "react-router-dom";
import React, { useState } from "react";

import {
	AccessibilityIcon,
	EnterIcon,
	ExternalLinkIcon,
} from '@radix-ui/react-icons'


const NavBar = (props) => {
	const navigate = useNavigate();
	const location = useLocation();
	const [open, setOpen] = useState(false);

	const items = [
		// { icon: ExternalLinkIcon, label: "Private VPN", route: "technical" },
		// { icon: EnterIcon, label: "DNS Routing", route: "dns" },
		// { icon: ExternalLinkIcon, label: "Public Network", route: "public" },
		// { icon: EnterIcon, label: "Enterprise", route: "enterprise" },
		// { icon: ExternalLinkIcon, label: "Pricing", route: "Pricing" },
		// { icon: AccessibilityIcon, label: "Documentation", route: "docs", },
	]

	let { pathname } = location
	let sp = pathname.split("/")
	let cs = "close"
	if (open) {
		cs = "open"
	}

	const navHandler = (path) => {
		navigate(path)
	}


	return (
		<div className={`sidebar`}	>

			<img src="https://raw.githubusercontent.com/tunnels-is/media/master/v3/logo/logo2.svg"
				className="logo"
				onClick={() => navHandler("/")}
			/>

			<img className={`menu-handle`}
				onClick={() => setOpen(!open)}
				src="https://raw.githubusercontent.com/tunnels-is/media/master/v3/logo/menu.svg" />

			<div className={`item-wrapper ${cs}`}
			>
				{items.map(i => {
					let onClick = () => {
						navHandler("/" + i.route)
						setOpen(false)
					}
					if (i.onClick !== undefined) {
						onClick = i.onClick
					}

					return (
						<	>
							{i.url &&
								<a key={i.label + "link"} href={i.url} target="_blank" >
									<div className="item"
									>
										<div key={i.label + "_link"} className={`${sp[1] === i.route ? "active" : ""} text `}>
											{i.label}
										</div>
									</div>
								</a>
							}
							{!i.url &&
								<div className="item"
									key={i.label + "item"}
									onClick={onClick}>
									<div key={i.label + "_item"} className={`${sp[1] === i.route ? "active" : ""} text `}>
										{i.label}
									</div>
								</div>
							}

						</>
					)

				})}
			</div>

			<div className="cta-button b1"
				onClick={() => navHandler("/download")}
			>
				Download
			</div>
			<div className="cta-button b2"
				onClick={() => navHandler("/register")}
			>
				Sign Up
			</div>
		</div >

	)
}
export default NavBar;
