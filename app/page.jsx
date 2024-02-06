import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faNewspaper, faTrophy } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Button from "@/components/Button";
import ufc from "@/public/logos/ufc.svg";
import pfl from "@/public/logos/pfl.svg";
import bellator from "@/public/logos/bellator.svg";
import onefc from "@/public/logos/onefc.svg";

function Feature({ icon, text }) {
  return (
    <div className="flex flex-col gap-4">
      <FontAwesomeIcon icon={icon} className="text-4xl" />
      <p>{text}</p>
    </div>
  );
}

function Promotion({ alt, src }) {
  return (
    <Image
      alt={alt}
      height={100}
      src={src}
      className="m-auto dark:invert-0 invert"
    />
  );
}

export default function Home() {
  return (
    <>
      <Image src={"/images/diazmcgregor.png"} width={500} height={500} alt=""
          className="blur-sm absolute size-full object-left object-cover grayscale -z-10 opacity-5"
      />
      <div className="text-sm border border-main h-screen p-8 pt-24 text-center flex flex-wrap justify-center gap-6">
        <div className="px-8 border border-[green] size-full flex flex-col justify-evenly">
          <div className="flex flex-col gap-8">
            <h1 className="font-heading text-4xl">Welcome</h1>
            <p>
              Dive into with ScrapHouse, your go-to platform offering insights
              into the spectacular world of mixed martial arts
            </p>
          </div>
          <div className="flex flex-col gap-8">
            <h1 className=" font-heading text-4xl">Features</h1>
            <div className="flex flex-col gap-6">
              <Feature icon={faNewspaper} text="Stay up to date with the latest headlines from multiple sources" />
              <Feature icon={faTrophy} text="Explore the fighter directory and view the latest rankings" />
              <Feature icon={faCalendar} text="Stay ahead with our event guide and never miss a moment" />
            </div>
          </div>
        </div>
      </div>
      <Image src={"/images/jonesgustafsson.png"} width={500} height={500} alt=""
          className="blur-sm absolute size-full object-center object-cover grayscale -z-10 opacity-5"
      />
      <div className="text-sm border border-main h-screen p-8 text-center flex flex-wrap justify-center gap-6">
        <div className="px-8 border border-[green] size-full flex flex-col justify-around">
          <div className="flex flex-col gap-8">
            <h1 className="font-heading text-4xl">Promotions</h1>
            <p>Get information from the most popular MMA fight promotions</p>
            <div className="flex flex-col gap-4">
              <Promotion alt="ufc logo" src={ufc} />
              <Promotion alt="pfl logo" src={pfl} />
              <Promotion alt="bellator logo" src={bellator} />
              <Promotion alt="onefc logo" src={onefc} />
            </div>
          </div>
        </div>
      </div>
      <Image src={"/images/rodtangjohnson.png"} width={500} height={500} alt=""
          className="blur-sm absolute size-[110%] object-top object-cover grayscale -z-10 opacity-5"
      />
      <div className="text-sm border border-main h-screen p-8 text-center flex flex-wrap justify-center gap-6">
        <div className="px-8 border border-[green] size-full flex flex-col justify-around">
          <div className="flex flex-col gap-8">
            <h1 className="font-heading text-4xl">Join Us Today!</h1>
            <p>
              Discover the thrill of MMA with ScrapHouse. Sign up now for
              exclusive content, live updates, and more!
            </p>
            <Button />
          </div>
        </div>
      </div>
    </>
  );
}
