import ItemFilter from "@/components/ui/ItemFilter";
import { divisions, p4p } from "@/constants";

let fighters = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const FighterCard = () => {
	return (
		<div className="border">
			<div className="border">Image</div>
			<div className="border p-4">#RankNo Name</div>
		</div>
	);
};

const Rankings = (props) => {
	return (
		<div className="flex flex-col gap-4">
			<h1 className="font-heading">Pound For Pound</h1>
			<div className="bg-dark-grey p-4 font-heading rounded-md flex flex-wrap gap-4">
				{fighters.map((value, index) => {
					return <FighterCard key={index} />;
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
