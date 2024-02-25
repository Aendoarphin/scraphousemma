"use client";
// Font Awesome assets
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";
// Hooks
import { useState, useEffect } from "react";
// Components
import ThemeToggle from "../util/ThemeToggle";
//Next
import Link from "next/link";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  // Expand/collapse links
  const handleMenuClick = (id = "") => {
    if (id === "brand") {
      setIsOpen(false);
    } else setIsOpen(!isOpen)
  };

  // Show/hide navbar on scroll
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

  return (
    <div
      className={`fixed top-0 right-0 left-0 ${
        visible
          ? "translate-y-0 transition-transform"
          : "-translate-y-96 transition-transform"
      }`}
    >
      <div
        className={`transition-all ${
          isOpen ? "h-14 opacity-100" : "h-0 opacity-0"
        }`}
      >
        <div className="border-b border-black border-opacity-5 dark:border-white dark:border-opacity-5 flex flex-row justify-evenly">
          {isOpen && (
            <>
              <Link href="/dashboard" className="p-4" onClick={handleMenuClick}>
                Dashboard
              </Link>
              <Link href="/about" className="p-4" onClick={handleMenuClick}>
                About
              </Link>
            </>
          )}
        </div>
      </div>
      <div className="px-8 py-4 flex items-center justify-between">
        <Link id="brand" href="/" onClick={() => handleMenuClick("brand")} className="brand text-6xl px-4 cursor-pointer">
          S<span className="hidden lg:inline">crap</span>
          <span className="text-main">
            H<span className="hidden lg:inline">ouse</span>
          </span>
        </Link>
        <div id="links" className="flex flex-wrap items-center gap-6 text-sm">
          <FontAwesomeIcon
            icon={faBars}
            onClick={handleMenuClick}
            className="hover:cursor-pointer"
          />
          <a href="">
            <FontAwesomeIcon icon={faUser} />
          </a>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default Nav;
