import React from "react";
import "./Carousel.css";

export const Carousel = ({ bgColor, title, description }) => {
	return (
		<div
			id="carouselExampleCaptions"
			className="carousel slide carouselContent"
			style={{ backgroundColor: bgColor }}
		>
			<div className="carousel-indicators">
				<button
					type="button"
					data-bs-target="#carouselExampleCaptions"
					data-bs-slide-to={0}
					className="active"
					aria-current="true"
					aria-label="Slide 1"
				/>
				<button
					type="button"
					data-bs-target="#carouselExampleCaptions"
					data-bs-slide-to={1}
					aria-label="Slide 2"
				/>
				<button
					type="button"
					data-bs-target="#carouselExampleCaptions"
					data-bs-slide-to={2}
					aria-label="Slide 3"
				/>
			</div>
			<div className="carousel-inner">
				<div className="carousel-item active">
					<div class="container text-center">
						<div class="row">
							<div class="col">
								<h4>{title}</h4>
								<p>{description}</p>
							</div>
							<div className="col colCarousel">
								<img
									src="https://static.wixstatic.com/media/c86aa8_bab0a6a0993f4898b549231f6fed5f7b~mv2.jpeg/v1/crop/x_1903,y_0,w_2332,h_2321/fill/w_365,h_363,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/AdobeStock_86836461.jpeg"
									className="d-block w-100, imgCarousel"
									alt="..."
								/>
								<img
									src="https://static.wixstatic.com/media/c86aa8_b9f43c3a51044736b853dcfef4e2e1db~mv2.jpeg/v1/crop/x_1660,y_538,w_2912,h_2843/fill/w_217,h_212,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/AdobeStock_317995648.jpeg"
									className="d-block imgCarousel2"
									alt="..."
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<button
				className="carousel-control-prev"
				type="button"
				data-bs-target="#carouselExampleCaptions"
				data-bs-slide="prev"
			>
				<span className="carousel-control-prev-icon" aria-hidden="true" />
				<span className="visually-hidden">Previous</span>
			</button>
			<button
				className="carousel-control-next"
				type="button"
				data-bs-target="#carouselExampleCaptions"
				data-bs-slide="next"
			>
				<span className="carousel-control-next-icon" aria-hidden="true" />
				<span className="visually-hidden">Next</span>
			</button>
		</div>
	);
};
