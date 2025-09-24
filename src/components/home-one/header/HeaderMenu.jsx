import { Link } from "react-router-dom";
function HeaderMenu() {
	return (
		<div className="menu-block-wrapper">
			<div className="menu-overlay"></div>
			<nav className="menu-block" id="append-menu-header">
				<div className="mobile-menu-head ">
					<div className="go-back">
						<i className="fa fa-angle-left"></i>
					</div>
					<div className="current-menu-title"></div>
					<div className="mobile-menu-close">&times;</div>
				</div>
				<ul className="site-menu-main">
					
					<li className="nav-item">
						<a href="#contact" className="nav-link-item">
							Contact Us
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default HeaderMenu;
