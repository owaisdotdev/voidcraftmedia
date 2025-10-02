import LogoWhiteImg from "/logo.png";
function FooterBottom() {
	return (
		<>
			<div className="col-lg-6">
				<div className="aximo-footer-logo">
					<a href="">
						<img src={LogoWhiteImg} alt="Logo" />
					</a>
				</div>
			</div>
			<div style={{display: "flex", justifyContent: "center", alignContent: "center"}}  className="col-lg-6">
				<div className="aximo-copywright one">
					<p style={{display: "flex", justifyContent: "center", alignContent: "center"}}> &copy; Copyright 2025, All Rights Reserved by Void Craft Media</p>
				</div>
			</div>
		</>
	);
}

export default FooterBottom;
