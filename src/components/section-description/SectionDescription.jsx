import React from "react";
import "./SectionDescription.css";

export const SectionDescription = ({
	bgColor,
	bgImage,
	texColor,
	title,
	icon,
	description,
}) => {
	return (
		<div
			className="section"
			style={{
				color: texColor,
				backgroundImage: `url(${bgImage})`,
			}}
		>
			<div
				className="bg-color-section"
				style={{
					backgroundColor: bgColor,
				}}
			>
				<div className="container description">
					<img src={icon} alt="" />
					<h4>{title}</h4>
					<p>{description}</p>
				</div>
			</div>
		</div>
	);
};
