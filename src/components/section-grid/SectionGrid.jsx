import React from "react";
import "./SectionGrid.css";
export const SectionGrid = ({ bgImage, title, description }) => {
	return (
		<div className="sectionGrid" style={{ backgroundImage: `url(${bgImage})` }}>
			<div className="container section">
				<div className="row">
					<div className="col info">
						<h1 className="titleGrid">{title}</h1>
						<p className="titleGrid">{description}</p>
					</div>
					<div className="col"></div>
				</div>
			</div>
		</div>
	);
};
