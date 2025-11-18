import { useEffect } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

function LandingPage() {
	useEffect(() => {
		const header = document.getElementById("siteHeader");
		function setHeaderH() {
			const h = header.getBoundingClientRect().height;
			document.documentElement.style.setProperty("--hdrH", h + "px");
		}
		setHeaderH();
		window.addEventListener("resize", setHeaderH);
		return () => window.removeEventListener("resize", setHeaderH);
	}, []);

	return (
		<>
			<Navigation currentPage="home" />

			<main>
				<div
					className="hero"
					role="img"
					aria-label="AGGREGAT hero artwork"
				></div>
			</main>

			<Footer />
		</>
	);
}

export default LandingPage;
