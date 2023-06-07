import React, { useState } from "react";
import "./SocialNetWork.css";
import emailSvg from "./email.svg";
import phoneSvg from "./phone.svg";

const BoxSocialNetWork = ({ icon, text }) => {
	return (
		<div className="box-social">
			<img src={icon} alt="" />
			<p className="mt-3">{text}</p>
		</div>
	);
};

const SocialNetwork = ({
	bgColor,
	bgImage,
	texColor,
	title,
	icon,
	description,
}) => {
	const [networks, setNetworks] = useState([
		{ icon: emailSvg, text: "info@bluepoint2.com" },
		{ icon: phoneSvg, text: "913.735.6202" },
		{
			icon: "https://static.wixstatic.com/media/c86aa8_1acd16586d1849e79af9a7f1edcbf6d3~mv2.gif",
			text: "Visit us on LinkedIn",
		},
	]);

	return (
		<div
			className="section"
			style={{
				color: texColor,
				backgroundImage: `url(${bgImage})`,
			}}
		>
			<div
				className="bg-color-section"
				style={{
					backgroundColor: bgColor,
				}}
			>
				<div className="container descriptionNetwork">
					<h4>{title}</h4>
					<p>{description}</p>

					<div className="grid-networks">
						{networks.map((network) => (
							<BoxSocialNetWork icon={network.icon} text={network.text} />
						))}
					</div>

					<p className="text-center">
						5440 W. 110th St, Suite 300 Overland Park, KS 66211
					</p>
				</div>
			</div>
		</div>
	);
};

export default SocialNetwork;
