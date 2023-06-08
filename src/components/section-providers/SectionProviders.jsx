import React from "react";
import "./SectionProviders.css";

export const SectionProviders = ({ title, description, text, img }) => {
	return (
		<div className="box-container">
			<div style={{ background: "#2B388CCC" }}>
				<h3 className="titleProvider">{title}</h3>
				<div className="boxingProviders">
					<div className="content">
						<p>{description}</p>
					</div>
					<div className="content">
						<img src={img} alt="" />
					</div>
					<div className="content">
						<p>{text}</p>
					</div>
				</div>
			</div>
		</div>
	);
};
