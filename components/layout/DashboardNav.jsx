"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCalendar,
	faNewspaper,
	faTrophy,
	faHouse,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useState } from "react";

const DashboardNav = () => {
	const [hoveredIcon, setHoveredIcon] = useState(null);

	const handleHover = (icon) => {
		setHoveredIcon(icon);
	};

	const renderIconOrWord = (icon, word) => {
		if (hoveredIcon === icon) {
			return <span>{word}</span>;
		} else {
			return <FontAwesomeIcon icon={icon} />;
		}
	};

	const icons = {
		"/": faHouse,
		news: faNewspaper,
		rankings: faTrophy,
		schedule: faCalendar,
	};

	return (
		<div className="mb-4">
			<h1 className="text-xl py-2 font-heading">Dashboard</h1>
			<div className="flex flex-row justify-center rounded-md overflow-clip bg-light-grey dark:bg-dark-grey shadow-inner-soft defaultTransition">
				{Object.entries(icons).map(([key, icon]) => (
					<Link key={key} href={`/dashboard/${key}`} className="w-full" onClick={() => window.scrollTo(0, 0)}>
						<button
							className="w-full p-4 hover:bg-black hover:text-white hover:dark:bg-white hover:dark:text-black defaultTransition"
							onMouseEnter={() => handleHover(icon)}
							onMouseLeave={() => setHoveredIcon(null)}
						>
							{renderIconOrWord(
								icon,
								key !== "/"
									? key.charAt(0).toUpperCase() + key.slice(1)
									: "Home"
							)}
						</button>
					</Link>
				))}
			</div>
		</div>
	);
};

export default DashboardNav;
