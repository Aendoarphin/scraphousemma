'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const Nav = () => {
  // Toggle nav links
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };
  // Show/hide nav bar on scroll
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingDown = currentScrollPos < prevScrollPos;

      setPrevScrollPos(currentScrollPos);

      setVisible(isScrollingDown || currentScrollPos < 10);
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
      {isOpen && (
        <div
          className={`border-b border-black border-opacity-5 dark:border-white dark:border-opacity-5 flex flex-row justify-evenly  ${
            visible
              ? "translate-y-0 transition-transform"
              : "-translate-y-20 transition-transform"
          }`}
        >
          <a href="" className="p-2">
            Dashboard
          </a>
          <a href="" className="p-2">
            About
          </a>
        </div>
      )}
      <div className="px-8 py-4 flex items-center justify-between">
        <a id="brand" className="brand text-6xl px-4 cursor-pointer">
          S<span className="hidden lg:inline">crap</span><span className="text-main">H<span className="hidden lg:inline">ouse</span></span>
        </a>
        <div id="links" className="flex flex-wrap items-center gap-6 text-sm">
          <FontAwesomeIcon icon={faBars} onClick={handleMenuClick} />
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
