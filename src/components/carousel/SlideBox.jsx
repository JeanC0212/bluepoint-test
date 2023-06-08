import { useEffect } from "react";

export const SlideBox = ({ description, img, alink, url }) => {
	useEffect(() => {}, []);

	return (
		<div className="box-container">
			<div style={{ background: "#3ba791cc" }}>
				<div className="boxing">
					<div className="content">
						<h4>In the News</h4>
						<p>{description}</p>
						<a href={url}>{alink}</a>
					</div>

					<div className="content">
						<img src={img} alt="" />
					</div>
				</div>
			</div>
		</div>
	);
};
