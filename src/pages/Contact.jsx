import React, { useState } from "react";
import { Maps } from "../components/maps/Maps";
import { SearchBox } from "../components/search-box/SearchBox";
//import "./Styles.css";

export const Contact = () => {
	const [selectedPosition, setSelectedPosition] = useState(null);
	return (
		<div
			className="section sectionContact"
			style={{
				color: "white",
				backgroundImage:
					"url(https://static.wixstatic.com/media/c86aa8_19e4d7b13e704d5e94e25ed56ded56cc~mv2.jpg/v1/fill/w_958,h_610,al_c,q_85,enc_auto/c86aa8_19e4d7b13e704d5e94e25ed56ded56cc~mv2.jpg)",
			}}
		>
			<div
				className="bg-color-section"
				style={{
					backgroundColor: "#3ba791cc",
				}}
			>
				<div
					className="row"
					style={{
						display: "flex",
						width: "100%",
						height: "100%",
						position: "absolute",
					}}
				>
					<div className="col" style={{ width: "50%", height: "100%" }}>
						<Maps selectedPosition={selectedPosition} />
					</div>
					<div
						className="col"
						style={{ width: "50%", maxHeight: "100%", overflowY: "auto" }}
					>
						<SearchBox setSelectedPosition={setSelectedPosition} />
					</div>
				</div>
			</div>
		</div>
	);
};
