// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCalendar,
	faNewspaper,
	faTrophy,
} from "@fortawesome/free-solid-svg-icons";
// Next
import Image from "next/image";
// Components
import Button from "@/components/ui/Button";
// Static files
import ufc from "@/public/logos/ufc.svg";
import pfl from "@/public/logos/pfl.svg";
import bellator from "@/public/logos/bellator.svg";
import onefc from "@/public/logos/onefc.svg";

const Feature = ({ icon, text }) => {
	return (
		<div className="flex flex-col gap-4 items-center">
			<FontAwesomeIcon icon={icon} className="text-4xl" />
			<p className="max-w-40">{text}</p>
		</div>
	);
};

const Promotion = ({ alt, src }) => {
	return (
		<Image
			alt={alt}
			height={100}
			src={src}
			className="m-auto dark:invert-0 invert defaultTransition"
		/>
	);
};

/**
 *
 * @returns JSX that contains content for the landing page
 */
const Home = () => {
	return (
		<>
			{[
				{
					className: "bghome1",
					title: "Welcome",
					content:
						"Dive in with ScrapHouse, your go-to platform offering insights into the spectacular world of mixed martial arts",
					features: [
						{
							icon: faNewspaper,
							text: "Stay up to date with the latest headlines from multiple sources",
						},
						{
							icon: faTrophy,
							text: "Explore the fighter directory and view the latest rankings",
						},
						{
							icon: faCalendar,
							text: "Stay ahead with our event guide and never miss a moment",
						},
					],
				},
				{
					className: "bghome2",
					title: "Promotions",
					content: "Get information from the most popular MMA fight promotions",
					promotions: [ufc, pfl, bellator, onefc].map((src, index) => (
						<Promotion key={index} alt={`promotion logo ${index}`} src={src} />
					)),
				},
				{
					className: "bghome3",  
					title: "Join Us Today!",
					content:
						"Discover the thrill of MMA with ScrapHouse. Sign up now for exciting content, live updates, and more!",
					button: <Button text={"Get Started"} />,
				},
			].map((section, index) => (
				<section
					key={index}
					className={`text-sm min-h-screen text-center flex flex-wrap justify-center gap-6 ${section.className}`}
				>
					<div className="w-full mx-auto p-8 flex flex-col justify-center gap-16 backdrop-filter backdrop-blur-md backdrop-grayscale">
						<div className="flex flex-col gap-8">
							<h1 className="font-heading text-4xl">{section.title}</h1>
							<p>{section.content}</p>
							{section.features && (
								<div className="flex flex-col sm:flex-row gap-10 justify-center">
									{section.features.map(({ icon, text }, index) => (
										<Feature key={index} icon={icon} text={text} />
									))}
								</div>
							)}
							{section.promotions && (
								<div className="flex flex-col lg:flex-row lg:mx-auto gap-10">
									{section.promotions}
								</div>
							)}
							{section.button && <div>{section.button}</div>}
						</div>
					</div>
				</section>
			))}
		</>
	);
};

export default Home;
