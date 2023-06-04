import React, { useState } from "react";
import { Maps } from "../components/maps/Maps";
import { SearchBox } from "../components/search-box/SearchBox";
import "./Styles.css";

export const Contact = () => {
	const [selectedPosition, setSelectedPosition] = useState(null);
	return (
		<div className="sectionContact">
			<div className="bg-color-contact">
				<div className="row rowInfo ">
					<h2>Every care center needs NAVI</h2>
					<img
						className="imgContact"
						src="https://static.wixstatic.com/media/c86aa8_6a3853ed9b254a31a3ddeb3b1bc399ef~mv2.jpg/v1/fill/w_1128,h_284,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Profile%20background-Liderman.jpg"
					/>
				</div>
				<div className="row rowMap">
					<h2>Search a location</h2>
					<div className="col colMap">
						<Maps selectedPosition={selectedPosition} />
					</div>

					<div className="col colSearch">
						<SearchBox setSelectedPosition={setSelectedPosition} />
					</div>

					<div className="row">
						<div className="col">
							<h1>Holaaaaa</h1>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
