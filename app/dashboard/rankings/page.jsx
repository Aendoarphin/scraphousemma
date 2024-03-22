"use client";
// Static files
import ufc from "@/public/logos/ufc.svg";
import pfl from "@/public/logos/pfl.svg";
import bellator from "@/public/logos/bellator.svg";
import onefc from "@/public/logos/onefc.svg";

// Next
import Image from "next/image";
import { useRef, useState } from "react";

const handleLeagueClicked = (id) => {
  
}

const PanelChild = () => {
  return (
    <div className={`${cardStyle} hidden`}>
      1
    </div>
  )
}

const Panel = (props) => {
  const [selected, setSelected] = useState();
  const cardStyle =
  "cursor-pointer transition-all ease-in hover:scale-[102%] p-4 size-full bg-light-grey rounded-md dark:bg-dark-grey flex items-center justify-center";


  return (
    <div className="flex">
      <div
      id={props.id}
      className={cardStyle}
      onClick={() => handleLeagueClicked(props.id)}
    >
      <Image alt={props.alt} height={100} src={props.src} />
    </div>
    </div>
  );
};

const Rankings = () => {
  return (
    <div className="flex flex-col justify-center gap-4">
      <Panel id="ufc" alt="ufc logo" src={ufc} />
      <Panel id="onefc" alt="onefc logo" src={onefc} />
      <Panel id="bellator" alt="bellator logo" src={bellator} />
      <Panel id="pfl" alt="pfl logo" src={pfl} />
    </div>
  );
};

export default Rankings;
