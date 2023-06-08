import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { SlideBox } from "./SlideBox";

export const Carousel = ({ bgColor, title, description }) => {
	const [slides, setSlides] = useState([
		{
			description:
				"Jon Adrian was quoted in the recent issue of Net Solution's article titled 8 Digital Transformation Trends that will Steer 2020. Click the button below to read the story.",
			img: "https://static.wixstatic.com/media/c86aa8_e2f93fbab85b4d9497d9fb80fe1c782b~mv2.jpeg/v1/fill/w_416,h_237,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Quote%20from%20net%20solutions.jpeg",
			url: "https://www.netsolutions.com/insights/digital-transformation-trends/",
			atittle: "Read the Story",
		},
		{
			description:
				"Bluepoint2 is honored to have been named A Top Emerging Company to watch for its innovation by KLAS.",
			img: "https://static.wixstatic.com/media/c86aa8_f2054bc8190042419572e520b0282408~mv2.jpg/v1/fill/w_479,h_212,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Klas%20screen%20image.jpg",
			url: "https://demo-vp.herokuapp.com/src/patient/landing-bio.html",
			atittle: "Reguest Whitepaper",
		},
		{
			description:
				"Bluepoint2's product NAVI received The Healthcare Tech Outlook Top 10 Patient Communication Solution Providers of 2020. Click the button below to read the story.",
			img: "https://static.wixstatic.com/media/c86aa8_82046fd05e844d01a6ebe9b70d33ade0~mv2.png/v1/fill/w_244,h_305,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Magazine%20HTO.png",
			url: "https://communications.healthcaretechoutlook.com/vendor/bluepoint2-reengineering-patientdoctor-communication-cid-1265-mid-117.html",
			atittle: "Read the Story",
		},
	]);

	return (
		<Swiper
			cssMode={true}
			navigation={true}
			pagination={true}
			mousewheel={true}
			keyboard={true}
			modules={[Navigation, Pagination, Mousewheel, Keyboard]}
			className="mySwiper"
		>
			{slides &&
				slides.map((slide, index) => {
					return (
						<SwiperSlide key={index}>
							<SlideBox
								description={slide.description}
								img={slide.img}
								alink={slide.atittle}
								url={slide.url}
							/>
						</SwiperSlide>
					);
				})}
		</Swiper>
	);
};
