import Star2Img from "../../../assets/images/v1/star2.png";
import Project1Img from "../../../assets/images/v1/project1.png";
import Project2Img from "../../../assets/images/v1/project2.png";
import Project3Img from "../../../assets/images/v1/project3.png";
import Project4Img from "../../../assets/images/v1/project4.png";
import ProjectCard from "./ProjectCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel } from "swiper/modules";

const projectsData = [
  {
    id: crypto.randomUUID(),
    title: "Graphic Design",
    description:
      "Creative designs that deliver strong visuals and make your brand instantly recognizable across every platform.",
    img: Project1Img,
  },
  {
    id: crypto.randomUUID(),
    title: "Social Media Management",
    description:
      "Complete social media management that builds consistency, drives engagement, and grows your online presence daily.",
    img: Project2Img,
  },
  {
    id: crypto.randomUUID(),
    title: "Branding & Identity",
    description:
      "Strategic branding solutions that craft a professional identity and leave a lasting impression on audiences.",
    img: Project3Img,
  },
  {
    id: crypto.randomUUID(),
    title: "Web Design & Development",
    description:
      "Modern web design and development services that ensure speed, responsiveness, and seamless digital experiences.",
    img: Project4Img,
  },
  {
    id: crypto.randomUUID(),
    title: "Content Writing",
    description:
      "Professional content writing tailored to engage readers, strengthen messaging, and convert audiences effectively.",
    img: Project4Img,
  },
  {
    id: crypto.randomUUID(),
    title: "Video Editing",
    description:
      "High-quality video editing that transforms raw footage into polished stories designed to inform and inspire.",
    img: Project4Img,
  },
];

const swiperSettings = {
	spaceBetween: 24,
	direction: "horizontal",
	pagination: {
		clickable: true,
	},
	modules: [Pagination, Mousewheel],
	mousewheel: true,
	breakpoints: {
		640: {
			slidesPerView: 1,
		},
		900: {
			slidesPerView: 2,
		},
		1600: {
			slidesPerView: 3.5,
		},
	},
};
function Projects() {
	return (
		<div className="section dark-bg aximo-section-padding">
			<div className="container">
				<div className="aximo-section-title center light">
					<h2>
						Have a wide range of
						<span className="aximo-title-animation">
							creative projects
							<span className="aximo-title-icon">
								<img src={Star2Img} alt="Star2Img" />
							</span>
						</span>
					</h2>
				</div>
			</div>
			<div className="swiper aximo-project-slider">
				<Swiper {...swiperSettings}>
					{projectsData.map((project) => (
						<SwiperSlide key={project.id}>
							<ProjectCard project={project} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
}

export default Projects;
