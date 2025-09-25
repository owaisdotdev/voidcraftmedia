import Logo from "../../assets/images/logo/logo-white.svg";
function Footer() {
	return (
		<footer className="aximo-footer-section dark-bg">
			<div className="container">
				<div className="aximo-footer-bottom">
					<div className="row">
						<div className="col-lg-6">
							<div className="aximo-footer-logo">
								<a href="">
									<img src={Logo} alt="logo" />
								</a>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="aximo-copywright one">
								<p> &copy; Copyright 2025, All Rights Reserved by Void Craft Media</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
