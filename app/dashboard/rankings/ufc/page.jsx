import Image from "next/image";
import jonJones from "@/public/images/jonJones.png"

let fighters = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const FighterCard = (props) => {
	return (
		<div className="border flex flex-col justify-center">
			<div className=""><Image src={jonJones} alt="fighter image" className="size-44 object-cover"/></div>
			<div className="flex flex-row items-center"><div className={`text-center px-2 ${props.isTop ? "bg-[#916f3f]" : "border"}`}>1</div><div className="px-2">Rose Namajunas</div></div>
		</div>
	);
};

const Rankings = (props) => {
	return (
		<div className="flex flex-col gap-4 border border-main justify-center">
			<h1 className="font-heading">Pound For Pound</h1>
			<div className="bg-light-grey dark:bg-dark-grey p-4 font-heading rounded-md flex flex-wrap gap-4">
				{fighters.map((value, index) => {
					const top = value === 1 ? true : false
					return <FighterCard key={index} isTop={top}/>;
				})}
			</div>
		</div>
	);
};

const RankingsUfc = () => {
	return (
		<div className="">
			<Rankings />
		</div>
	);
}; // making rankings template

export default RankingsUfc;
