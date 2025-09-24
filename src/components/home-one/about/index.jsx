import Star2Img from "../../../assets/images/v1/star2.png";
import AboutCounter from "./AboutCounter";

function About() {
	return (
		<div className="section aximo-section-padding">
			<div id="aximo-counter"></div>
			<div className="container">
				<div className="aximo-section-title">
					<div className="row">
						<div className="col-lg-7">
							<h2>
								<span className="aximo-title-animation">
									We make your
									<span className="aximo-title-icon">
										<img src={Star2Img} alt="Star2Img" />
									</span>
								</span>{" "}
								business stand out
							</h2>
						</div>
						<div className="col-lg-4 offset-lg-1 d-flex align-items-center">
							<p>
								We work closely with our clients to understand their goals, audience, and needs,
								delivering design and strategy solutions that drive results.
							</p>
						</div>
					</div>
				</div>

				<div className="row">
					<div className="col-lg-8">
						<p className="lead mb-4">
							At <strong>VoidCraft Media</strong>, we believe the digital void is full of
							possibility. We craft clarity from the chaos — building strategies, designs, and
							stories that cut through the noise and make brands unforgettable. Our approach
							blends creativity with precision, helping businesses transform the unseen into
							experiences that leave a lasting mark.
						</p>

						<ul className="list-unstyled ms-3 mb-4">
							<li className="mb-2">✓ Tailored digital strategies built for your goals</li>
							<li className="mb-2">✓ Designs that inspire trust and drive engagement</li>
							<li className="mb-2">✓ Content that resonates and connects with audiences</li>
							<li className="mb-2">✓ Seamless web solutions that grow with your business</li>
							<li className="mb-2">✓ Creative campaigns that make your brand unforgettable</li>
						</ul>

						<div className="extra-about-content">
							<h5 className="fw-bold mb-3">Why choose us?</h5>
							<p className="mb-3">
								Because we don’t just deliver services, we deliver impact. Every project we take on
								is guided by strategy, refined with creativity, and executed with precision.
							</p>
						
						</div>
					</div>

					<div className="col-lg-4">
						<AboutCounter />
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
