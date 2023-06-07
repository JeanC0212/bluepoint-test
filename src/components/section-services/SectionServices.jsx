import React, { useEffect, useRef } from "react";
import "./SectionServices.css";
export const SectionServices = ({
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
					<div className="col">
						<h3 className="titleGrid">{title}</h3>
						{subtitle && <h5> {subtitle} </h5>}
						<div className="descriptionGrid" ref={boxDescription}></div>
					</div>
					<div className="col"></div>
				</div>
			</div>
		</div>
	);
};
