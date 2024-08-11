import ufc from "@/public/logos/ufc.svg";
import pfl from "@/public/logos/pfl.svg";
import onefc from "@/public/logos/onefc.svg";
import panelUfc from "@/public/images/panel-bg-ufc.png";
import panelPfl from "@/public/images/panel-bg-pfl.png";
import panelOne from "@/public/images/panel-bg-one.png";
import Image from "next/image";
import Link from "next/link";

const Panel = ({league, disabled, alt, src, bg}) => {
	const cardStyle =
		"overflow-clip flex shadow-inner-soft transition-all ease-in-out duration-300 h-[20vh] lg:h-[30vh] p-4 bg-light-grey rounded-md dark:bg-dark-grey flex items-center justify-center brightness-50 hover:brightness-100";

	return (
		<Link href={disabled ? `rankings/` : `rankings/${league}`} className={`flex flex-col gap-0 ${disabled ? " cursor-not-allowed" : ""}`}>
			<div id={league} style={{ backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundImage: `url(${bg.src})`}} className={`${cardStyle}`}>
				<Image
					alt={alt}
					height={100}
					src={src}
					className=" ease-in transition-all lg:size-[60%] xl:size-[80%]"
					loading="eager"
				/>
				{disabled && <p className="text-white font-heading text-2xl absolute bottom-10 bg-main w-full text-center bg-opacity-50">TBD</p>}
			</div>
		</Link>
	);
};

const Rankings = async () => {
	return (
		<div className="flex flex-col justify-center gap-4 pb-1 group:">
			<Panel league="ufc" alt="ufc logo" src={ufc} bg={panelUfc}  />
			<Panel league="onefc" alt="onefc logo" src={onefc} bg={panelOne} disabled={true} />
			<Panel league="pfl" alt="pfl logo" src={pfl} bg={panelPfl} disabled={true} />
		</div>
	);
};

export default Rankings;
