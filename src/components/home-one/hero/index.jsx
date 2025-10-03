import HeroContent from "./HeroContent";
import HeroThumbs from "./HeroThumbs";

function HeroSection() {
	return (
		<div className="aximo-hero-section dark-bg">
			<div className="container position-relative">
				<div className="row align-items-center">
					<div className="col-lg-8">
						<HeroContent />
					</div>
					<div className="col-lg-4 d-flex justify-content-center align-items-center">
						<HeroThumbs />
					</div>
				</div>
			</div>
		</div>
	);
}

export default HeroSection;
