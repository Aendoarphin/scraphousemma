"use client";
// Static files
import ufc from "@/public/logos/ufc.svg";
import pfl from "@/public/logos/pfl.svg";
import bellator from "@/public/logos/bellator.svg";
import onefc from "@/public/logos/onefc.svg";

// Next
import Image from "next/image";
import { useRef, useState } from "react";
import Link from "next/link";

const Panel = (props) => {
  const [active, setActive] = useState(false);

  const cardStyle =
    "flex shadow-inner-soft cursor-pointer transition-all ease-in hover:scale-[102%] p-4 size-full bg-light-grey rounded-md dark:bg-dark-grey flex items-center justify-center";

  return (
    <Link href={"rankings/ufc"} className="flex flex-col gap-0">
      <div id={props.id} className={cardStyle}>
        <Image
          alt={props.alt}
          height={100}
          src={props.src}
          className="invert dark:invert-0 ease-in transition-all"
        />
      </div>
    </Link>
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
