import { Link } from "react-router-dom";
import Logo from "../../../assets/images/logo/logo-white.svg";
function HeaderLogo() {
	return (
		<div className="brand-logo">
			<Link style={{
			
			}} to="/">
				<img  src="logo.png" alt="" />
			</Link>
		</div>
	);
}

export default HeaderLogo;
