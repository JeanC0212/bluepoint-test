import React, { useState } from "react";
import { Divider, OutlinedInput } from "@mui/material";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

const NOMINATIM_BASE_URL = "https://nominatim.openstreetmap.org/search?";

export const SearchBox = (props) => {
	const { selectedPosition, setSelectedPosition } = props;
	const [searchText, setSearchText] = useState("");
	const [listPlace, setListPlace] = useState([]);
	console.log(searchText);
	return (
		<div style={{ display: "flex", flexDirection: "column" }}>
			<div style={{ display: "flex" }}>
				<div style={{ flex: "1" }}>
					<OutlinedInput
						style={{ width: "100%" }}
						value={searchText}
						onChange={(event) => {
							setSearchText(event.target.value);
						}}
					/>
				</div>
				<div
					style={{ display: "flex", alignItems: "center", padding: "0px 20px" }}
				>
					<Button
						variant="contained"
						onClick={() => {
							const params = {
								q: searchText,
								format: "json",
								adressdetails: 1,
								polygon_geojson: 0,
							};
							const queryString = new URLSearchParams(params).toString();
							const requestOptions = {
								method: "GET",
								redirect: "follow",
							};
							fetch(`${NOMINATIM_BASE_URL}${queryString}`, requestOptions)
								.then((response) => response.text())
								.then((result) => {
									console.log(JSON.parse(result));
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
					{listPlace.map((place) => {
						return (
							<List key={place?.osm_id}>
								<ListItem
									disablePadding
									onClick={() => {
										setSelectedPosition(place);
									}}
								>
									<ListItemButton>
										<ListItemIcon>
											<img
												src="./placeholder.png"
												alt="placeholder"
												style={{ width: "38px", height: "38px" }}
											/>
										</ListItemIcon>
										<ListItemText primary={place?.display_name} />
									</ListItemButton>
								</ListItem>
								<Divider />
							</List>
						);
					})}
				</nav>
			</div>
		</div>
	);
};
