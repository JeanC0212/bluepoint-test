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
		<div class="container">
			<div class="row">
				<div class="col-10">
					<OutlinedInput
						style={{ width: "100%" }}
						value={searchText}
						onChange={onInputChange}
						placeholder="Search a location"
					/>
				</div>
				<div class="col-2">
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
			<div class="row">
				<div class="col">
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
		</div>
	);
};
