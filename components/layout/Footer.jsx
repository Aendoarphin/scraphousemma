import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
	let currentYear = new Date();
	return (
		<>
			<div className="text-xs p-10 flex items-center justify-between">
				<p>&copy; {currentYear.getFullYear()} ScrapHouse</p>
				<div className="flex gap-2">
					<FontAwesomeIcon icon={faLinkedin} />
					<FontAwesomeIcon icon={faGithub} />
				</div>
			</div>
		</>
	);
};

export default Footer;
