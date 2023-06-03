import React, { useState } from "react";
import { Maps } from "../components/maps/Maps";
import { SearchBox } from "../components/search-box/SearchBox";
//import "./Styles.css";

export const Contact = () => {
	const [selectedPosition, setSelectedPosition] = useState(null);
	console.log(selectedPosition);
	return (
		<div
			className=""
			style={{
				display: "flex",
				flexDirection: "row",
				width: "100%",
				height: "60vh",
			}}
		>
			<div className="" style={{ width: "50%", height: "100%" }}>
				<Maps selectedPosition={selectedPosition} />
			</div>
			<div className="" style={{ width: "50%" }}>
				<SearchBox
					selectedPosition={selectedPosition}
					setSelectedPosition={setSelectedPosition}
				/>
			</div>
		</div>
	);
};
