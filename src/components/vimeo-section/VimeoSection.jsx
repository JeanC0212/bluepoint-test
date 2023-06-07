import React from "react";
import "./VimeoSection.css";

export default function VimeoSection() {
	return (
		<div className="box-container">
			<div style={{ background: "#3ba791cc" }}>
				<div className="boxing">
					<div className="content">
						<iframe
							width="100%"
							height="314px"
							src="https://player.vimeo.com/video/386648582?h=28677dd262&amp;title=0&amp;app_id=122963"
							frameborder="0"
							allow="autoplay; fullscreen; picture-in-picture"
							allowfullscreen=""
							title="NAVI Introduction and Overview"
							data-ready="true"
						></iframe>
					</div>

					<div className="content content-text">
						<h4>
							Watch this short video to learn how NAVI can help your
							organization.
						</h4>

						<a href="https://www.bluepoint2.com/demo">Request a live demo</a>
					</div>
				</div>
			</div>
		</div>
	);
}
