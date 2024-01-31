"use client";
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
          : "-translate-y-24 transition-transform"
      }`}
    >
      <div className="px-8 py-4 flex items-center justify-between">
        <a id="brand" className="brand text-6xl px-4 cursor-pointer">
          S<span className="text-main">H</span>
        </a>
        <div id="links" className="flex flex-wrap items-center gap-6 text-sm">
          <FontAwesomeIcon icon={faBars} onClick={handleMenuClick} />
          <a href="">
            <FontAwesomeIcon icon={faUser} />
          </a>
          <ThemeToggle />
        </div>
      </div>
      {isOpen && (
        <div
          className={`flex flex-row justify-evenly dark:text-white bg-white bg-opacity-5 text-white shadow-black shadow-inner-soft ${
            visible
              ? "translate-y-0 transition-transform"
              : "-translate-y-20 transition-transform"
          }`}
        >
          <a href="" className="p-2">
            Dashboard
          </a>
          <div className="border border-black opacity-10"></div>
          <a href="" className="p-2">
            About
          </a>
        </div>
      )}
    </div>
  );
};

export default Nav;
