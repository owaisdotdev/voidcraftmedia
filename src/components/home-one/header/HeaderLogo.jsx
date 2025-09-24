import { Link } from "react-router-dom";
import Logo from "../../../assets/images/logo/logo-white.svg";
function HeaderLogo() {
	return (
		<div className="brand-logo">
			<Link style={{
				color: "white",
				fontSize: "24px",
				fontWeight: "bold",
				textDecoration: "none",
				fontFamily: "Arial, sans-serif",
			}} to="/">
				voidcraftmedia
			</Link>
		</div>
	);
}

export default HeaderLogo;
