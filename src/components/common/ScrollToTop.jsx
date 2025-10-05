import { useEffect, useState, useRef } from "react";

export default function ScrollToTop() {
	const [showTopBtn, setShowTopBtn] = useState(false);
	const [open, setOpen] = useState(false);
	const containerRef = useRef(null);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 700) {
				setShowTopBtn(true);
			} else {
				setShowTopBtn(false);
				setOpen(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	useEffect(() => {
		const handleClickOutside = (e) => {
			if (containerRef.current && !containerRef.current.contains(e.target)) {
				setOpen(false);
			}
		};
		if (open) {
			document.addEventListener("click", handleClickOutside);
		}
		return () => document.removeEventListener("click", handleClickOutside);
	}, [open]);

	// Social links
	const links = [
		{
			name: "WhatsApp",
			href: "https://wa.me/923151126214",
			iconClass: "fab fa-whatsapp",
			aria: "WhatsApp",
		},
		{
			name: "Instagram",
			href: "https://www.instagram.com/voidcraftmedia_?igsh=Z3kyOW1hamp2bmRm",
			iconClass: "fab fa-instagram",
			aria: "Instagram",
		},
		{
			name: "LinkedIn",
			href: "https://www.linkedin.com/company/voidcraftmedia/",
			iconClass: "fab fa-linkedin-in",
			aria: "LinkedIn",
		},
	];

	const toggleOpen = (e) => {
		e.stopPropagation();
		setOpen((v) => !v);
	};

	if (!showTopBtn) return null;

	// minimal inline styles so popup shows even if CSS is missing
	const containerStyle = {
		position: "fixed",
		right: 20,
		bottom: 20,
		zIndex: 9999,
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		gap: 8,
			// keep a known width so absolutely positioned list can align correctly
			minWidth: 48,
			minHeight: 48,
	};

	const mainBtnStyle = {
		width: 48,
		height: 48,
		borderRadius: "50%",
		background: "#111",
		color: "black",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		boxShadow: "0 6px 18px rgba(0,0,0,0.2)",
		cursor: "pointer",
	};

	const itemStyle = {
		width: 40,
		height: 40,
		borderRadius: "50%",
		background: "#fff",
		color: "#111",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		boxShadow: "0 6px 18px rgba(0,0,0,0.12)",
		textDecoration: "none",
	};

		// position the list absolutely so it always appears above the main button
		const listStyle = {
			position: "absolute",
			bottom: 80, // main button (48) + gap (8)
			right: 0,
			display: "flex",
			flexDirection: "column",
			gap: 8,
			alignItems: "center",
			zIndex: 10000,
		};

	return (
		<div ref={containerRef} style={containerStyle} className="aximo-go-top-wrapper">
					{open && (
						<div className="aximo-go-top-list" style={listStyle}>
					{links.map((l) => (
						<a
							key={l.name}
							href={l.href}
							target="_blank"
							rel="noopener noreferrer"
							aria-label={l.aria}
							style={itemStyle}
							onClick={() => setOpen(false)}
						>
							<i className={l.iconClass} aria-hidden="true"></i>
						</a>
					))}
				</div>
			)}

			<button
				type="button"
				aria-label={open ? "Close social links" : "Open social links"}
				onClick={toggleOpen}
				style={mainBtnStyle}
				className="aximo-go-top"
			>
				<i className={open ? "fas fa-times" : "fas fa-share-alt"} />
			</button>
		</div>
	);
}
