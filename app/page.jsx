// Hero and CTA page
// Components
import Button from "@/components/Button";
// Next imports
import Image from "next/image";
// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faNewspaper,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";
// Media
import ufc from "@/public/logos/ufc.svg";
import pfl from "@/public/logos/pfl.svg";
import bellator from "@/public/logos/bellator.svg";
import onefc from "@/public/logos/onefc.svg";

export default function Home() {
  return (
    <>
      <div className="text-sm border border-main h-screen p-8 pt-24 text-center flex flex-wrap justify-center gap-6">
        <div className="border border-[green] size-full flex flex-col justify-evenly">
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
              <div className="flex flex-col gap-4">
                <FontAwesomeIcon icon={faNewspaper} className="text-4xl" />
                <p>
                  Stay up to date with the latest headlines from multiple
                  sources
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <FontAwesomeIcon icon={faTrophy} className="text-4xl" />
                <p>
                  Explore the fighter directory and view the latest rankings
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <FontAwesomeIcon icon={faCalendar} className="text-4xl" />
                <p>Stay ahead with our event guide and never miss a moment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border border-main h-screen p-8 text-center flex flex-wrap justify-center gap-6">
        <div className="border border-[green] size-full flex flex-col justify-around">
          <div className="flex flex-col gap-8">
            <h1 className="font-heading text-4xl">Promotions</h1>
            <p>Get information from the most popular MMA fight promotions</p>
            <Image
              alt="ufc logo"
              height={100}
              src={ufc}
              className="m-auto dark:invert-0 invert"
            />
            <Image
              alt="pfl logo"
              height={100}
              src={pfl}
              className="m-auto  dark:invert-0 invert"
            />
            <Image
              alt="bellator logo"
              height={100}
              src={bellator}
              className="m-auto  dark:invert-0 invert"
            />
            <Image
              alt="onefc logo"
              height={100}
              src={onefc}
              className="m-auto  dark:invert-0 invert"
            />
          </div>
        </div>
      </div>
      <div className="border border-main h-screen p-8 text-center flex flex-wrap justify-center gap-6">
        <div className="border border-[green] size-full flex flex-col justify-around">
          <div className="flex flex-col gap-8">
            <h1 className="font-heading text-4xl">Join Us Today!</h1>
            <p>
              Discover the thrill of MMA with ScrapHouse. Sign up now for
              exclusive content, live updates, and more!
            </p>
            <Button/>
          </div>
        </div>
      </div>
    </>
  );
}
