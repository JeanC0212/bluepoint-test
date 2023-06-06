import React from "react";
import { SectionDescription } from "../components/section-description/SectionDescription";
import { SectionGrid } from "../components/section-grid/SectionGrid";
import { Carousel } from "../components/carousel/Carousel";
import SocialNetwork from "../components/social-network/SocialNetwork";
import VimeoSection from "../components/vimeo-section/VimeoSection";
import Footer from "../components/footer/Footer";

export const Home = () => {
	return (
		<div className="page-margin">
			<Carousel />

			<SectionGrid
				bgImage="https://static.wixstatic.com/media/c86aa8_358f73285afd482195e23f9e02bbc0a9~mv2.jpg/v1/fill/w_1550,h_537,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c86aa8_358f73285afd482195e23f9e02bbc0a9~mv2.jpg"
				title="We’re the company that's changing the way you navigate your healthcare."
				description="Innovative solutions that create a comfortable, intuitive patient experience."
			/>

			<SectionDescription
				bgColor="rgb(84 95 163 / 63%)"
				bgImage={
					"https://static.wixstatic.com/media/c86aa8_19e4d7b13e704d5e94e25ed56ded56cc~mv2.jpg/v1/fill/w_958,h_610,al_c,q_85,enc_auto/c86aa8_19e4d7b13e704d5e94e25ed56ded56cc~mv2.jpg"
				}
				texColor="white"
				icon="https://static.wixstatic.com/media/c86aa8_6f4b7cbb017b4a70913599a5034e6ea1~mv2.png/v1/fill/w_73,h_74,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/AdobeStock_258163476-key-modified.png"
				title="Communication is the key."
				description="We believe that better communication leads to better outcomes in healthcare. Our passion and mission are to create better communication between patients and care providers– it’s that simple."
			/>

			<SectionGrid
				bgImage="https://static.wixstatic.com/media/2a9fd3_9d8d7eca93c34a7e859b58dbbc5aa706~mv2.jpg/v1/crop/x_0,y_36,w_2000,h_934/fill/w_1436,h_673,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/AdobeStock_135032238-Girl-on-phone.jpg"
				title="We’re the company that's changing the way you navigate your healthcare."
				description="Innovative solutions that create a comfortable, intuitive patient experience."
			/>

			<SectionDescription
				bgColor="rgb(0,0,0,.80)"
				bgImage={
					"https://static.wixstatic.com/media/c86aa8_19e4d7b13e704d5e94e25ed56ded56cc~mv2.jpg/v1/fill/w_958,h_610,al_c,q_85,enc_auto/c86aa8_19e4d7b13e704d5e94e25ed56ded56cc~mv2.jpg"
				}
				texColor="white"
				icon="https://static.wixstatic.com/media/c86aa8_6f4b7cbb017b4a70913599a5034e6ea1~mv2.png/v1/fill/w_73,h_74,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/AdobeStock_258163476-key-modified.png"
				title="Communication is the key."
				description="We believe that better communication leads to better outcomes in healthcare. Our passion and mission are to create better communication between patients and care providers– it’s that simple."
			/>

			<SectionDescription
				bgColor="rgb(100,100,50,.80)"
				bgImage={
					"https://static.wixstatic.com/media/c86aa8_19e4d7b13e704d5e94e25ed56ded56cc~mv2.jpg/v1/fill/w_958,h_610,al_c,q_85,enc_auto/c86aa8_19e4d7b13e704d5e94e25ed56ded56cc~mv2.jpg"
				}
				texColor="white"
				icon="https://static.wixstatic.com/media/c86aa8_6f4b7cbb017b4a70913599a5034e6ea1~mv2.png/v1/fill/w_73,h_74,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/AdobeStock_258163476-key-modified.png"
				title="Communication is the key."
				description="We believe that better communication leads to better outcomes in healthcare. Our passion and mission are to create better communication between patients and care providers– it’s that simple."
			/>

			<VimeoSection />

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

			<Footer />
		</div>
	);
};
