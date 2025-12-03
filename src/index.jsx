import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import { createRoot } from "react-dom/client";
import React, { useEffect, useState } from "react";

import "../node_modules/normalize.css/normalize.css"
// import "./assets/style/reset.scss"
import "./assets/style/index-desktop.scss"
import "./assets/style/index-tablet.scss"
import "./assets/style/index-mobile.scss"
import STORE from "./store";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Enterprise from "./pages/Enterprise";
import DownloadPage from "./pages/Download";
import Documentation from "./pages/Documentation";
import Technical from "./pages/Technical";
import PricingPage from "./pages/Pricing";
import DNS from "./pages/DNS";
import PublicPage from "./pages/Public";
import FreePage from "./pages/Free";
import NavBar from "./components/NavBar";
import RegisterPage from "./pages/Register";

var rootEle = document.getElementById('root')
const root = createRoot(rootEle);

const ExternalRedirect = ({ url }) => {
	useEffect(() => {
		window.location.href = url;
	}, [url]);
	return null;
};

const App = () => {
	rootEle.classList.add("light")

	return (
		<React.StrictMode>
			<BrowserRouter >

				<NavBar />

				<div className={`content-wrapper`}>

					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/home" element={<Home />} />
						<Route path="/free" element={<FreePage />} />
						// <Route path="/public" element={<PublicPage />} />
						<Route path="/technical" element={<Technical />} />
						<Route path="/enterprise" element={<Enterprise />} />
						<Route path="/download" element={<DownloadPage />} />
						<Route path="/pricing" element={<PricingPage />} />
						<Route path="/register" element={<RegisterPage />} />
						<Route path="/cybermonday" element={<PricingPage />} />
						<Route path="/dns" element={<DNS />} />

						<Route path="/docs/" element={<ExternalRedirect url="https://docs.tunnels.is/docs" />} />
						<Route path="/docs/:tag" element={<ExternalRedirect url="https://docs.tunnels.is/docs" />} />
					</Routes>

				</div>

				<Footer />
			</BrowserRouter>
		</React.StrictMode >
	)
}


try {
	root.render(<App />)
} catch (error) {
	console.dir(error)
	STORE.Cache.Clear()
	root.render(<div>
		The website had an unexpected error, please try reloading. If reloading does not work please try re-opening the website
	</div>
	)
}
