import Star2Img from "../../../assets/images/v1/star2.png";
import ServiceCard from "./ServiceCard";

function Services({ services }) {
	return (
		<div className="section aximo-section-padding4">
			<div className="container">
				<div className="aximo-section-title center">
<h2>
  Our&nbsp;
  <span className="aximo-title-animation">
    services&nbsp;
    <span className="aximo-title-icon">
    </span>
     
  </span>
  that craft impact
</h2>



				</div>
				<div className="aximo-service-wrap">
					<div className="row">
						{services.map((item) => (
							<ServiceCard key={item.id} service={item} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Services;
