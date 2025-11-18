import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import ReleasesPage from "./pages/releasesPage";

function App() {
	console.log("App component is rendering");

	return (
		<Router basename="/Aggregat">
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/releases" element={<ReleasesPage />} />
			</Routes>
		</Router>
	);
}

export default App;
