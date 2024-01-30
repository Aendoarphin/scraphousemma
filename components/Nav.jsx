'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingDown = currentScrollPos < prevScrollPos;

      setPrevScrollPos(currentScrollPos);

      setVisible(isScrollingDown || currentScrollPos < 10);
    }
    
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [prevScrollPos]);

  return (
    <div className={`fixed top-0 bottom-0 right-0 left-0 ${
      visible ? 'translate-y-0 transition-transform' : '-translate-y-20 transition-transform'
    }`}>
        <div className="border border-main p-4 flex items-center justify-between">
          <a id="brand" className="brand text-4xl px-2 cursor-pointer">
            S<span className="text-main">H</span>
          </a>
          <div
            id="links"
            className="flex flex-wrap items-center gap-6 text-sm"
          >
            <FontAwesomeIcon icon={faBars} onClick={handleMenuClick}/>
            <a href="">
              <FontAwesomeIcon icon={faUser} />
            </a>
            <ThemeToggle />
          </div>
        </div>
        {/* {isOpen && (
          <div className="flex flex-row justify-evenly dark:text-white bg-main text-white shadow-inner shadow-black">
            <a href="" className="p-2">
              Dashboard
            </a>
            <a href="" className="p-2">
              About
            </a>
          </div>
        )} */}
      </div>
  );
};

export default Nav;
