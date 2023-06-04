import React, { useState } from "react";
import { Divider, OutlinedInput } from "@mui/material";
import Button from "@mui/material/Button";
import { ListPlace } from "../list-place/ListPlace";

const NOMINATIM_BASE_URL = "https://nominatim.openstreetmap.org/search?";

export const SearchBox = ({ setSelectedPosition }) => {
	const [searchText, setSearchText] = useState("");
	const [listPlace, setListPlace] = useState([]);

	const onInputChange = ({ target }) => {
		setSearchText(target.value);
	};

	const params = {
		q: searchText,
		format: "json",
		adressdetails: 1,
		polygon_geojson: 0,
	};

	return (
		<div style={{ display: "flex", flexDirection: "column" }}>
			<div style={{ display: "flex" }}>
				<div style={{ flex: "1" }}>
					<OutlinedInput
						style={{ width: "100%" }}
						value={searchText}
						onChange={onInputChange}
						placeholder="Search a location"
					/>
				</div>
				<div
					style={{ display: "flex", alignItems: "center", padding: "0px 20px" }}
				>
					<Button
						variant="contained"
						onClick={() => {
							const queryString = new URLSearchParams(params).toString();
							const requestOptions = {
								method: "GET",
								redirect: "follow",
							};
							fetch(`${NOMINATIM_BASE_URL}${queryString}`, requestOptions)
								.then((response) => response.text())
								.then((result) => {
									setListPlace(JSON.parse(result));
								})
								.catch((error) => {
									console.log("err:", error);
								});
						}}
					>
						Search
					</Button>
				</div>
			</div>
			<div>
				<nav aria-label="main mailbox folders">
					{listPlace.map((place, index) => {
						return (
							<ListPlace
								setSelectedPosition={setSelectedPosition}
								place={place}
								key={index}
							/>
						);
					})}
				</nav>
			</div>
		</div>
	);
};
