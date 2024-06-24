"use client";
import { useState, useEffect, useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import ThemeSwitch from "../util/ThemeSwitch";
import Link from "next/link";
import Image from "next/image";
import { useUser } from "@auth0/nextjs-auth0/client";

const Nav = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [visible, setVisible] = useState(true);
	const [prevScrollPos, setPrevScrollPos] = useState(0);

	const { user, isLoading } = useUser();
	const navRef = useRef(null);

	const handleMenuClick = (id = "") => {
		if (id === "brand") {
			setIsOpen(false);
		} else setIsOpen(!isOpen);
	};

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollPos = window.scrollY;
			const isScrollingDown = currentScrollPos < prevScrollPos;
			setPrevScrollPos(currentScrollPos);
			setVisible(isScrollingDown || currentScrollPos < 10);
			setIsOpen(false);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [prevScrollPos]);

	// Click outside handler
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (navRef.current && !navRef.current.contains(event.target)) {
				setIsOpen(false);
			}
		};

		document.addEventListener("click", handleClickOutside);

		return () => {
			document.removeEventListener("click", handleClickOutside);
		};
	}, []);

	return (
		<div
			id="nav"
			ref={navRef}
			className={`z-10 fixed w-full ${
				visible
					? "translate-y-0 transition-transform"
					: "-translate-y-96 transition-transform"
			}`}
		>
			<div className="px-8 py-4 flex items-center justify-between">
				<Link
					id="brand"
					href="/"
					onClick={() => handleMenuClick("brand")}
					className="brand text-6xl px-4 cursor-pointer"
				>
					S<span className="hidden lg:inline">crap</span>
					<span className="text-main">
						H<span className="hidden lg:inline">ouse</span>
					</span>
				</Link>
				<div
					id="links"
					className="flex items-center gap-3 sm:gap-6 text-sm w-min flex-nowrap justify-end"
				>
					<div className={`defaultTransition ${isOpen ? "visible" : "hidden"}`}>
						<div className="flex flex-row justify-end w-full overflow-hidden">
							<>
								<Link
									href={user && !isLoading ? "/dashboard" : "/api/auth/login"}
									className="p-4 hover:underline defaultTransition"
									onClick={handleMenuClick}
								>
									Dashboard
								</Link>
								<Link
									href="/about"
									className="p-4 hover:underline defaultTransition"
									onClick={handleMenuClick}
								>
									About
								</Link>
							</>
						</div>
					</div>
					<div className="flex flex-row items-center gap-4 md:gap-6">
						<FontAwesomeIcon
							icon={isOpen ? faClose : faBars}
							onClick={handleMenuClick}
							className="hover:cursor-pointer"
						/>
						<Link
							id="account"
							href={user && !isLoading ? "/dashboard" : "/api/auth/login"}
							className="min-w-7 min-h-7 relative flex items-center justify-center"
						>
							{user ? (
								<Image
									alt={user.name}
									fill
									sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
									src={user.picture}
									className="object-scale-down max-w-10 max-h-10 rounded-full"
								></Image>
							) : (
								<FontAwesomeIcon icon={faUser} />
							)}
						</Link>
						<ThemeSwitch />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Nav;
