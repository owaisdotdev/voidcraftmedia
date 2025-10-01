import { useState } from "react"; 
import ArrowRightImg from "../../../assets/images/icon/arrow-right.svg";

function ServiceCard({ service: { title, description, longDescription, icon, img, points } }) {
	const [expanded, setExpanded] = useState(false);

	return (
		<div className="col-lg-6">
			<div
				style={{ cursor: "pointer" }}
				className={`aximo-iconbox-wrap transition-all duration-300 p-4 rounded-2xl shadow-sm hover:shadow-md ${
					expanded ? "shadow-md bg-black text-white" : ""
				}`}
				onClick={() => setExpanded(!expanded)}
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
						<div className="text-gray-300 mb-3">
							<ul className="list-disc pl-5 space-y-2">
								{points.map((point, index) => (
									<li key={index}>{point}</li>
								))}
							</ul>
						</div>
					)}

					<div className="flex justify-between items-center">
						<span className="text-sm text-gray-400">
							{expanded ? "Click to collapse" : "Click to expand"}
						</span>
						<button
							onClick={(e) => {
								e.stopPropagation();
								setExpanded(!expanded);
							}}
							className="aximo-icon border-0 bg-transparent p-0"
						>
							<img
								src={ArrowRightImg}
								alt="arrow right"
								className={`transition-transform duration-300 filter invert ${
									expanded ? "rotate-90" : ""
								}`}
							/>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ServiceCard;