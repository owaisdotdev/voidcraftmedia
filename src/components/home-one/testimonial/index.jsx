import Star2Img from "../../../assets/images/v1/star2.png";
import Thumb1Img from "/review1.jpg";
import Thumb2Img from "/review2.jpg";
import Thumb3Img from "/review3.jpg";
import Thumb4Img from "/review4.jpg";
import TestimonialCard from "./TestimonialCard";

const testimonialsData = [
	{
		id: crypto.randomUUID(),
		rating: 5,
		title: "Exceptional service and timely delivery",
		description:
			"I had a tight deadline for my project, but Void Craft Media handled everything flawlessly. Their team was quick, responsive, and very professional. The final design came out even better than I expected. Highly recommended!",
		author: "Smith Johnson",
		designation: "Co-Founder, The Coffee Room",
		img: Thumb1Img,
	},
	{
		id: crypto.randomUUID(),
		rating: 4,
		title: "Transformed our brand identity",
		description:
			"Working with Void Craft Media was a fantastic experience. Their creative approach completely transformed how our brand looks online. Our customers instantly noticed the difference. Their design team truly understands modern branding.",
		author: "David Mitchell",
		designation: "Owner, Bloom & Co.",
		img: Thumb2Img,
	},
	{
		id: crypto.randomUUID(),
		rating: 5,
		title: "Creative, dedicated, and professional",
		description:
			"The team went above and beyond to bring my vision to life. They carefully listened to every detail and delivered designs that perfectly matched my brand's style. It's rare to find such a passionate and skilled group of professionals.",
		author: "Sarah Wilson",
		designation: "Marketing Lead, TechNova",
		img: Thumb3Img,
	},
	{
		id: crypto.randomUUID(),
		rating: 4,
		title: "Great experience and quality work",
		description:
			"We hired Void Craft Media to redesign our social media visuals and website banners. Their creativity, attention to detail, and timely delivery made the process so smooth. The new visuals have received amazing feedback from our clients.",
		author: "Steven Jack",
		designation: "Founder, Urban Styles",
		img: Thumb4Img,
	},
];

function Testimonial() {
	return (
		<div className="section aximo-section-padding3">
			<div className="container">
				<div className="aximo-section-title center">
					<h2>
						Clients are always
						<span className="aximo-title-animation">
							satisfied with us
							<span className="aximo-title-icon">
								<img src={Star2Img} alt="Star2Img" />
							</span>
						</span>
					</h2>
				</div>
				<div className="row">
					{testimonialsData.map((testimonial) => (
						<TestimonialCard key={testimonial.id} testimonial={testimonial} />
					))}
				</div>
			</div>
		</div>
	);
}

export default Testimonial;
