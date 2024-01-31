// Hero and CTA page
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  return (
    <>
      <div id="hero" className="grayscale -z-[99] relative opacity-5 h-screen">
        <Image
          src="/images/diazmcgregor.png"
          width={500}
          height={500}
          alt="picture of two fighters"
          className="size-full object-cover object-right"
        />
      </div>
      <div id="cta" className="grayscale -z-[99] relative opacity-5 h-screen">
        <Image
          src="/images/jonesgustafsson.png"
          width={500}
          height={500}
          alt="picture of two fighters"
          className="size-full object-cover object-center"
        />
      </div>
    </>
  );
}
