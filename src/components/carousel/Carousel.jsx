import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

import "./Carousel.css";
import { SlideBox } from "./SlideBox";

export const Carousel = ({ bgColor, title, description }) => {
	const [slides, setSlides] = useState([
		{ title: "hola", description: "efkerfko", img: "rfrffd", url: "hhhhhh" },
		{ title: "hola1", description: "efkerfko", img: "rfrffd", url: "hhhhhh" },
		{ title: "hola2", description: "efkerfko", img: "rfrffd", url: "hhhhhh" },
	]);

	return (
		<>
			<Swiper
				cssMode={true}
				navigation={true}
				pagination={true}
				mousewheel={true}
				keyboard={true}
				modules={[Navigation, Pagination, Mousewheel, Keyboard]}
				className="mySwiper"
			>
				<SwiperSlide className="">
					<SlideBox />
				</SwiperSlide>
				<SwiperSlide className="">
					<SlideBox />
				</SwiperSlide>
			</Swiper>
		</>
	);
};
