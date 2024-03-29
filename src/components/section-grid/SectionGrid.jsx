import React, { useEffect, useRef } from "react";
import "./SectionGrid.css";
export const SectionGrid = ({
	bgImage,
	title,
	description,
	subtitle,
	linkbtn,
}) => {
	const boxDescription = useRef();

	useEffect(() => {
		boxDescription.current.innerHTML = description;
	}, []);

	return (
		<div className="sectionGrid" style={{ backgroundImage: `url(${bgImage})` }}>
			<div className="container section">
				<div className="row">
					<div className="col info">
						<h1 className="titleGrid">{title}</h1>
						{subtitle && <p> {subtitle} </p>}
						<div className="titleGrid" ref={boxDescription}></div>
					</div>
					<div className="col"></div>
				</div>
			</div>
		</div>
	);
};
