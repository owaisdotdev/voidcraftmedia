import { Link } from "react-router-dom";
import ShapeImg from "../../../assets/images/v1/shape1.png";
import StarImg from "../../../assets/images/v1/star.png";
import User1Img from "../../../assets/images/v1/user1.png";
import User2Img from "../../../assets/images/v1/user2.png";
import User3Img from "../../../assets/images/v1/user3.png";
function HeroContent() {
	return (
		<div className="aximo-hero-content">
			<h1>
				<span className="aximo-title-animation">
					We Craft 
					{/* <img src={StarImg} alt="StarImg" /> */}
					<br />
				from the Void.
				</span>{" "}

			</h1>
			<p>
				{`In the silence of nothingness, we forge voices that echo. 
Within the void, we craft what becomes unforgettable. 
From stillness, we shape stories that resonate, and from emptiness, 
we design moments that endure. We turn the unseen into experiences 
that leave a lasting mark.`}

			</p>
			<div className="aximo-hero-user-wrap">
				<div className="aximo-hero-user-thumb">
					<div className="aximo-hero-user-thumb-item">
						<img src={User1Img} alt="User1Img" />
					</div>
					<div className="aximo-hero-user-thumb-item">
						<img src={User3Img} alt="User3Img" />
					</div>
					<div className="aximo-hero-user-thumb-item">
						<img src={User2Img} alt="User2Img" />
					</div>
				</div>
				<div className="aximo-hero-user-data">
					<p>Believed by more than a thousand people</p>
				</div>
			</div>
			<a href="#contact" className="aximo-call-btn">
				Start Crafting<i className="icon-call"></i>
			</a>
			<div className="aximo-hero-shape">
				<img src={ShapeImg} alt="ShapeImg" />
			</div>
		</div>
	);
}

export default HeroContent;
