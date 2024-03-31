import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
	let currentYear = new Date();
	return (
			<div className="text-xs flex items-center justify-between bg-gray-90 text-center px-12 py-10 sm:px-14">
				<p>&copy; {currentYear.getFullYear()} ScrapHouse</p>
				<div className="flex gap-2">
					<FontAwesomeIcon icon={faLinkedin} />
					<FontAwesomeIcon icon={faGithub} />
				</div>
			</div>
	);
};

export default Footer;
