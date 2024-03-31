import { p4p } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import ReactCountryFlag from "react-country-flag";

const RankingListItem = (props) => {
	return (
		<Link
			href=""
			className="border-b border-white border-opacity-25 last:border-none"
		>
			<li className="flex flex-row gap-4 items-center p-2">
				<h1
					className={`font-heading ${
						props.index === 0 ? "bg-gold" : ""
					} w-6 text-center`}
				>
					{props.index + 1}
				</h1>
				<hr className="border-l border-white border-opacity-25 h-4" />
				<p>{props.fighterName}</p>
				<ReactCountryFlag
					countryCode={props.country}
					svg
					style={{
						width: "1em",
						height: "1em",
					}}
					title={props.country}
				/>
				<p>{props.record}</p>
			</li>
		</Link>
	);
};

const RankingList = (props) => {
	return (
		<div className="bg-light-grey dark:bg-dark-grey defaultTransition p-4 rounded-md shadow-inner-soft">
			<h1 className="font-heading first-letter:uppercase">
				{props.gender}&apos;s Pound For Pound
			</h1>
			<ul className="flex flex-col justify-center">
				{p4p.men.ufc.map((value, index) => {
					return (
						<RankingListItem
							key={index}
							index={index}
							fighterName={value.fighterName}
							country={value.countryCode}
							record={value.record}
						/>
					);
				})}
			</ul>
		</div>
	);
};

const RankingsUfc = () => {
	return (
		<div className=" bg-white dark:bg-black defaultTransition overflow-visible pb-2">
			<RankingList
				gender={Object.keys(p4p).filter((value) => value === "men")}
			/>
		</div>
	);
}; // making rankings template

export default RankingsUfc;
