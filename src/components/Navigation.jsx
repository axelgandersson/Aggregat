import React from "react";
import { Link } from "react-router-dom";

function Navigation({ currentPage }) {
	return (
		<header id="siteHeader">
			<div className="header-inner">
				<nav className="mainnav" aria-label="Primary">
					<Link
						to="/"
						aria-current={currentPage === "home" ? "page" : undefined}
					>
						Home
					</Link>
					<Link
						to="/releases"
						aria-current={currentPage === "releases" ? "page" : undefined}
					>
						Releases
					</Link>
					<Link
						to="/events"
						aria-current={currentPage === "events" ? "page" : undefined}
					>
						Events
					</Link>
					<Link
						to="/about"
						aria-current={currentPage === "about" ? "page" : undefined}
					>
						About
					</Link>
				</nav>

				<div className="brand-text">AGGREGAT</div>

				<div className="social" aria-label="Social">
					<a
						href="https://instagram.com"
						target="_blank"
						rel="noopener"
						aria-label="Instagram"
						title="Instagram"
					>
						<svg
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="1.7"
							strokeLinecap="round"
							strokeLinejoin="round"
							aria-hidden="true"
						>
							<rect x="3" y="3" width="18" height="18" rx="4"></rect>
							<circle cx="12" cy="12" r="4.1"></circle>
							<circle
								cx="17.5"
								cy="6.5"
								r="0.9"
								fill="currentColor"
								stroke="none"
							></circle>
						</svg>
					</a>
					<a
						href="https://soundcloud.com"
						target="_blank"
						rel="noopener"
						aria-label="SoundCloud"
						title="SoundCloud"
					>
						<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
							<path d="M18.5 10.5c-1.1 0-2 .9-2 2v2.5h4.2c1.5 0 2.8-1.2 2.8-2.7 0-1.5-1.2-2.8-2.7-2.8-.1 0-.2 0-.3 0-.5-2.1-2.4-3.7-4.6-3.7-1 0-1.9.3-2.7.8v8.4H6v-6.2c-1.2.7-2 2-2 3.5 0 2.2 1.8 4 4 4h10.5c2.5 0 4.5-2 4.5-4.5s-2-4.3-4.5-4.3z" />
						</svg>
					</a>
					<a
						href="https://facebook.com"
						target="_blank"
						rel="noopener"
						aria-label="Facebook"
						title="Facebook"
					>
						<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
							<path d="M13.5 9H15V6h-1.5C11.6 6 10 7.6 10 9.5V11H8v3h2v7h3v-7h2.1l.4-3H13v-1.5c0-.3.2-.5.5-.5z" />
						</svg>
					</a>
				</div>
			</div>
		</header>
	);
}

export default Navigation;
