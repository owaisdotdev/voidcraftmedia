import { useState } from "react";
import ArrowRightImg from "../../../assets/images/icon/arrow-right.svg";

function ServiceCard({ service: { title, description, longDescription, icon, img } }) {
	const [expanded, setExpanded] = useState(false);

	return (
		<div className="col-lg-6">
			<div
				className={`aximo-iconbox-wrap transition-all duration-300 p-4 rounded-2xl shadow-sm hover:shadow-md`}
			>
				<div className="aximo-iconbox-icon mb-3">
					{icon ? (
						<i className={icon}></i>
					) : (
						<img
							style={{ width: "84px" }}
							src={img}
							alt={title}
							className="img-fluid"
						/>
					)}
				</div>

				<div className="aximo-iconbox-data">
					<h3 className="text-xl font-semibold mb-2">{title}</h3>
					<p className="mb-3">{description}</p>

					{expanded && (
						<p className="text-muted mb-3">{longDescription}</p>
					)}

					<button
						onClick={() => setExpanded(!expanded)}
						className="aximo-icon border-0 bg-transparent p-0"
					>
						<img
							src={ArrowRightImg}
							alt="arrow right"
							className={`transition-transform duration-300 ${
								expanded ? "rotate-90" : ""
							}`}
						/>
					</button>
				</div>
			</div>
		</div>
	);
}

export default ServiceCard;
