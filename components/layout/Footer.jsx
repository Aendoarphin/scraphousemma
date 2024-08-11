import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Footer = () => {
	let currentYear = new Date();
	return (
			<div className={`text-xs flex items-center justify-between bg-gray-90 text-center px-12 py-10 sm:px-14 ${["/", "/about"].includes(usePathname()) ? "-translate-y-[96px]" : ""}`}>
				<p>&copy; {currentYear.getFullYear()} ScrapHouse</p>
				<div className="flex gap-2">
					<Link href={"https://www.linkedin.com/in/arhon-p-ba957023a/"}><FontAwesomeIcon icon={faLinkedin} /></Link>
					<Link href={"https://github.com/Aendoarphin"}><FontAwesomeIcon icon={faGithub} /></Link>
				</div>
			</div>
	);
};

export default Footer;
