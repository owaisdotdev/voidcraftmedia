import Shape1Img from "../../../assets/images/v1/shape1.png";
import Star2Img from "../../../assets/images/v1/star2.png";

function FooterContent() {
	return (
		<div id="contact" className="aximo-default-content light position-relative">
			<h2 className="text-white">
				<span className="aximo-title-animation">
					Ready to Craft
					<span className="aximo-title-icon">
						<img src={Star2Img} alt="Star2Img" />
					</span>
				</span>
				<br />
				Your Vision?
			</h2>

			<p className="text-gray-300 mt-3 mb-5 leading-relaxed">
				We work closely with our clients to understand their objectives, target audience, and unique needs.
				Using our creative skills, we translate your requirements into practical and powerful design solutions.
			</p>

			<div className="aximo-info-wrap grid grid-cols-1 md:grid-cols-3 gap-6">
				{/* Phone */}
				<div className="aximo-info">
					<ul>
						<li className="font-semibold text-white mb-1">Give us a call:</li>
						<li>
							<a href="tel:+923151126214" className="text-gray-300 hover:text-white transition">
								+92 315 1126214
							</a>
						</li>
					</ul>
				</div>

				{/* Email */}
				<div className="aximo-info">
					<ul>
						<li className="font-semibold text-white mb-1">Send us an email:</li>
						<li>
							<a
								href="mailto:hey@voidcraftmedia.com"
								className="text-gray-300 hover:text-white transition"
							>
								hey@voidcraftmedia.com
							</a>
						</li>
					</ul>
				</div>

				{/* Address */}
				<div className="aximo-info">
					<ul>
						<li className="font-semibold text-white mb-1">Visit our office:</li>
						<li className="text-gray-300">
							Office #601, 6th Floor<br />
							Dominion Business Center<br />
							Bahria Town, Karachi, Pakistan
						</li>
					</ul>
				</div>
			</div>

			{/* Social Icons */}
			<div className="aximo-social-icon social-large mt-6">
				<ul className="flex gap-4">
					<li>
						<a
							href="https://www.instagram.com/"
							target="_blank"
							className="text-gray-300 hover:text-white transition"
						>
							<i className="icon-instagram text-xl"></i>
						</a>
					</li>
					<li>
						<a
							href="https://www.linkedin.com/"
							target="_blank"
							className="text-gray-300 hover:text-white transition"
						>
							<i className="icon-linkedin text-xl"></i>
						</a>
					</li>
				</ul>
			</div>

			{/* Background Shape */}
			<div className="aximo-hero-shape aximo-footer-shape">
				<img src={Shape1Img} alt="Shape1Img" />
			</div>
		</div>
	);
}

export default FooterContent;
