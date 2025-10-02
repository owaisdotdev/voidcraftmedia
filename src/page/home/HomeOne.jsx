import About from "../../components/home-one/about";
import AutoSlider from "../../components/home-one/auto-slider";
import Hero from "../../components/home-one/hero";
import Projects from "../../components/home-one/projects";
import Services from "../../components/home-one/services";
import Teams from "../../components/home-one/teams";
import Testimonial from "../../components/home-one/testimonial";
import WhyChooseUs from "../../components/home-one/why-choose-us";
import SocialImg from "../../assets/images/social/social.png";
import BrandImg from "../../assets/images/social/brand.png";
import ContentImg from "../../assets/images/social/content.png";
import VideoImg from "../../assets/images/social/video.png";
// Teams images
import Team1Img from "../../assets/images/team/team1.png";
import Team2Img from "../../assets/images/team/team2.png";
import Team3Img from "../../assets/images/team/team3.png";
import Team4Img from "../../assets/images/team/team4.png";
import StoryContent from "../../components/about/story/StoryContent";

const servicesData = [
	{
		id: crypto.randomUUID(),
		title: "Graphic Design",
		description:
			"Creative visuals that make your brand stand out. From posts to campaigns, designs that capture attention.",
		icon: "icon-branding",
		longDescription:
			"Our graphic design services cover everything from social media posts to professional marketing collateral. We help your brand communicate clearly with eye-catching and purposeful visuals.",
		points: [
			"Engaging social media posts & ads that drive interaction",
			"Professional posters, flyers & banners for events and promotions",
			"Eye-catching thumbnails & book covers that increase click-through rates",
			"Custom illustrations & infographics that simplify complex information",
			"Brand-consistent marketing materials that build recognition"
		],
	},
	{
		id: crypto.randomUUID(),
		title: "Social Media Management",
		description:
			"We handle your socials so you can focus on your business. From content planning to publishing, we help grow your online presence.",
		img: SocialImg,
		longDescription:
			"We manage your social media end-to-end — from strategy and content calendars to execution. Our approach builds consistency, keeps audiences engaged, and grows your online influence.",
		points: [
			"Strategic content planning aligned with your business goals",
			"Daily post scheduling & publishing across all platforms",
			"Engaging caption writing & strategic hashtag research",
			"Audience engagement management to build community",
			"Performance analytics & monthly growth reports"
		],
	},
	{
		id: crypto.randomUUID(),
		title: "Branding & Identity",
		description:
			"Build a brand identity that leaves a lasting impression with logos, style guides, and visual systems tailored to your vision.",
		img: BrandImg,
		longDescription:
			"We help you create a unique brand identity that reflects your values and vision. From logos to complete design systems, we ensure your brand leaves a professional and lasting impression.",
		points: [
			"Memorable logo design that captures your brand essence",
			"Comprehensive brand style guides for consistent application",
			"Strategic color palettes & typography that evoke emotions",
			"Brand voice & messaging guidelines",
			"Complete brand asset kit for all your business needs"
		],
	},
	{
		id: crypto.randomUUID(),
		title: "Web Design & Development",
		description:
			"Professional websites that are modern, fast, and responsive. From portfolios to e-commerce, we create digital experiences that work.",
		icon: "icon-web",
		longDescription:
			"We design and develop websites that not only look good but also perform. Whether you need a personal portfolio, a corporate site, or a full-fledged e-commerce solution, we deliver with precision.",
		points: [
			"Stunning portfolio websites that showcase your work effectively",
			"Conversion-optimized business websites that generate leads",
			"High-converting landing pages & e-commerce stores",
			"Mobile-responsive designs that work on all devices",
			"Fast-loading websites with SEO best practices built-in"
		],
	},
	{
		id: crypto.randomUUID(),
		title: "Content Writing",
		description:
			"Words that connect, engage, and convert. We provide tailored content for social media, websites, and marketing campaigns.",
		img: ContentImg,
		longDescription:
			"Our content writing services cover everything from social media captions to long-form articles. We craft messaging that is clear, persuasive, and aligned with your brand voice.",
		points: [
			"Compelling social media captions that drive engagement",
			"SEO-optimized blog posts & articles that rank high in search",
			"Persuasive website & ad copy that converts visitors",
			"Email marketing content that builds customer relationships",
			"Product descriptions that highlight benefits and features"
		],
	},
	{
		id: crypto.randomUUID(),
		title: "Video Editing",
		description:
			"High-quality video editing that brings your vision to life. Perfect for social media, ads, and storytelling.",
		img: VideoImg,
		longDescription:
			"We transform raw footage into polished, professional videos. From social media reels to full-length YouTube videos and branded promos, our editing adds impact and creativity.",
		points: [
			"Attention-grabbing Reels & YouTube Shorts optimized for virality",
			"Professional long-form YouTube videos & podcast editing",
			"High-converting product promos & advertisement videos",
			"Dynamic motion graphics & text animations for brand recall",
			"Expert color correction & grading for cinematic quality",
			"Accessible subtitles & captions for wider audience reach"
		],
	},
];

const teamsData = [
	{
		id: crypto.randomUUID(),
		name: "Andrew Mark",
		designation: "Creative Director",
		img: Team1Img,
	},
	{
		id: crypto.randomUUID(),
		name: "Jack Taylor",
		designation: "Senior Designer",
		img: Team2Img,
	},
	{
		id: crypto.randomUUID(),
		name: "Martine Joy",
		designation: "Project Manager",
		img: Team3Img,
	},
	{
		id: crypto.randomUUID(),
		name: "Adam Straw",
		designation: "Web Developer",
		img: Team4Img,
	},
];

function HomeOne() {
	return (
		<>
			<Hero />
			<Services services={servicesData} />
			<About />
					<StoryContent />
				
			<Projects />
			<WhyChooseUs />
			<Testimonial />
			<AutoSlider />
			{/* <Teams teams={teamsData} /> */}
		</>
	);
}

export default HomeOne;
