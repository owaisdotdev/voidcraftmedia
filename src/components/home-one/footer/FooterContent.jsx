import Shape1Img from "../../../assets/images/v1/shape1.png";
import Star2Img from "../../../assets/images/v1/star2.png";
function FooterContent() {
	return (
		<div id="contact" className="aximo-default-content light position-relative">
			<h2>
				<span className="aximo-title-animation">
					Ready to Craft
					<span className="aximo-title-icon">
						<img src={Star2Img} alt="Star2Img" />
					</span>
				</span>
				<br />
				 Your Vision?
			</h2>
			<p>
				We work closely with our clients to understand their objectives, target audience, and unique needs. We
				use our creative skills to translate these requirements and practical design solutions.
			</p>
			<div className="aximo-info-wrap">
				<div className="aximo-info">
					<ul>
						<li>Give us a call:</li>
						<li>
							<a href="tel:(123) 456-7890">(123) 456-7890</a>
						</li>
					</ul>
				</div>
				<div className="aximo-info">
					<ul>
						<li>Send us an email:</li>
						<li>
							<a href="mailto:info@Void Craft Media.com">hey@voidcraftmedia.com</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="aximo-social-icon social-large">
				<ul>
				
					<li>
						<a href="https://www.instagram.com/" target="_blank">
							<i className="icon-instagram"></i>
						</a>
					</li>
					<li>
						<a href="https://www.linkedin.com/" target="_blank">
							<i className="icon-linkedin"></i>
						</a>
					</li>
				</ul>
			</div>
			<div className="aximo-hero-shape aximo-footer-shape">
				<img src={Shape1Img} alt="Shape1Img" />
			</div>
		</div>
	);
}

export default FooterContent;
