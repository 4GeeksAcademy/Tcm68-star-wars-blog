import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import Home from "./views/Home.jsx";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar.jsx";
import { Footer } from "./component/footer";
import CharacterDetails from "./views/CharacterDetails.jsx";
import PlanetDetails from "./views/PlanetDetails.jsx";
import VehicleDetails from "./views/VehicleDetails.jsx";
import FireflyBackground from "./component/Starbackground";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<FireflyBackground />
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/home" element={<Home />} />
						<Route path="/character-details" element={<CharacterDetails />} />
                        <Route path="/planet-details" element={<PlanetDetails />} />
						<Route path="/vehicle-details" element={<VehicleDetails />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
