import React, { useState } from "react";
import { Maps } from "../../components/maps/Maps";
import { SearchBox } from "../../components/search-box/SearchBox";

import SocialNetwork from "../../components/social-network/SocialNetwork";
import "./Contact.css";

export const Contact = () => {
	const [selectedPosition, setSelectedPosition] = useState(null);
	return (
		<>
			<div className="sectionContact page-margin">
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
					</div>
				</div>
			</div>

			<SocialNetwork
				bgColor="rgba(155, 218, 244, 0.8)"
				bgImage={
					"https://static.wixstatic.com/media/c86aa8_19e4d7b13e704d5e94e25ed56ded56cc~mv2.jpg/v1/fill/w_958,h_610,al_c,q_85,enc_auto/c86aa8_19e4d7b13e704d5e94e25ed56ded56cc~mv2.jpg"
				}
				texColor="white"
				icon="https://static.wixstatic.com/media/c86aa8_6f4b7cbb017b4a70913599a5034e6ea1~mv2.png/v1/fill/w_73,h_74,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/AdobeStock_258163476-key-modified.png"
				title="Contact Us"
				description="We would love to hear from you!"
			/>
		</>
	);
};
