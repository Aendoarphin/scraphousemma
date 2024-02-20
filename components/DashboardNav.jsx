"use client"
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faNewspaper,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";

const DashboardNav = (props) => {
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

  return (
    <>
      <div className="flex flex-row justify-center rounded-md overflow-clip bg-light-grey dark:bg-dark-grey shadow-inner-soft">
        <button
          className="w-full p-4 hover:bg-black hover:text-white hover:dark:bg-white hover:dark:text-black transition-all ease-in"
          onMouseEnter={() => handleHover(faNewspaper)}
          onMouseLeave={() => setHoveredIcon(null)}
        >
          {renderIconOrWord(faNewspaper, "News")}
        </button>
        <button
          className="w-full p-4 hover:bg-black hover:text-white hover:dark:bg-white hover:dark:text-black transition-all ease-in"
          onMouseEnter={() => handleHover(faTrophy)}
          onMouseLeave={() => setHoveredIcon(null)}
        >
          {renderIconOrWord(faTrophy, "Rankings")}
        </button>
        <button
          className="w-full p-4 hover:bg-black hover:text-white hover:dark:bg-white hover:dark:text-black transition-all ease-in"
          onMouseEnter={() => handleHover(faCalendar)}
          onMouseLeave={() => setHoveredIcon(null)}
        >
          {renderIconOrWord(faCalendar, "Events")}
        </button>
      </div>
    </>
  );
};

export default DashboardNav;
