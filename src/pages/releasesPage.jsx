import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation as SwiperNavigation, Keyboard } from "swiper/modules";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import "swiper/css";
import "swiper/css/navigation";

function ReleasesPage() {
	const releases = [
		{
			id: "AGG001",
			artist: "Various Artists",
			title: "RAFT001 Compilation",
			image: "/assets/raft001.jpg",
			link: "#",
		},
		{
			id: "AGG002",
			artist: "Raddler Express",
			title: "Express EP",
			image: "/assets/raddler-express.jpg",
			link: "#",
		},
		{
			id: "AGG003",
			artist: "Various Artists",
			title: "Speed Bump Vol. 2",
			image: "/assets/speedbump-vol2.jpg",
			link: "#",
		},
		{
			id: "AGG004",
			artist: "Various Artists",
			title: "[T001]",
			image: "/assets/t001.jpg",
			link: "#",
		},
	];

	return (
		<div className="page-wrapper releases-page">
			<Navigation currentPage="releases" />

			<main className="releases-main">
				<div className="carousel-container">
					<Swiper
						modules={[SwiperNavigation, Keyboard]}
						grabCursor={true}
						centeredSlides={true}
						slidesPerView={3}
						spaceBetween={30}
						navigation={{
							prevEl: ".swiper-button-prev-custom",
							nextEl: ".swiper-button-next-custom",
						}}
						keyboard={{
							enabled: true,
						}}
						loop={false}
						initialSlide={1}
						breakpoints={{
							320: {
								slidesPerView: 1,
								spaceBetween: 20,
							},
							640: {
								slidesPerView: 1.5,
								spaceBetween: 25,
							},
							1024: {
								slidesPerView: 3,
								spaceBetween: 30,
							},
						}}
						className="releases-swiper"
					>
						{releases.map((release) => (
							<SwiperSlide key={release.id}>
								<div className="release-slide">
									<div className="sleeve">
										<img
											src={release.image}
											alt={`${release.id} cover: ${release.title}`}
										/>
									</div>
									<div className="meta">
										<div className="cat">{release.id}</div>
										<div className="artist">{release.artist}</div>
										<div className="title">{release.title}</div>
										<a
											className="btn"
											href={release.link}
											target="_blank"
											rel="noopener"
										>
											Bandcamp
										</a>
									</div>
								</div>
							</SwiperSlide>
						))}
					</Swiper>

					<button
						className="swiper-button-prev-custom arrow left"
						aria-label="Previous release"
					>
						‹
					</button>
					<button
						className="swiper-button-next-custom arrow right"
						aria-label="Next release"
					>
						›
					</button>
				</div>
			</main>

			<Footer />
		</div>
	);
}

export default ReleasesPage;
