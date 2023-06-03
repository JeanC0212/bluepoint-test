import React, { useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const icon = L.icon({
	iconUrl: "./placeholder.png",
	iconSize: [38, 38],
});

const position = [51.505, -0.09];

const ResetCenterView = (props) => {
	const { selectedPosition } = props;
	const map = useMap();

	useEffect(() => {
		if (selectedPosition) {
			map.setView(
				L.latLng(selectedPosition?.lat, selectedPosition?.lon),
				map.getZoom(),
				{
					animate: true,
				}
			);
		}
	}, [selectedPosition]);
};

export const Maps = (props) => {
	const { selectedPosition } = props;
	const locationPosition = [selectedPosition?.lat, selectedPosition?.lon];
	return (
		<MapContainer
			center={position}
			zoom={13}
			scrollWheelZoom={false}
			style={{ width: "100%", height: "100%" }}
		>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=i9MyPLPZyMAMUbOuYssO"
			/>

			{selectedPosition && (
				<Marker position={locationPosition} icon={icon}>
					<Popup>
						A pretty CSS3 popup. <br /> Easily customizable.
					</Popup>
				</Marker>
			)}
			<ResetCenterView selectedPosition={selectedPosition} />
		</MapContainer>
	);
};
