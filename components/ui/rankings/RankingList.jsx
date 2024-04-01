import Link from "next/link";



const RankingListItem = (props) => {
	return (
		<Link href="">
			<li className={`flex flex-row gap-4 items-center p-2`}>
				<h1 className={`font-heading w-6 text-center`}>
					{props.rank === 0 ? "🏆" : props.rank + 1}
				</h1>
				<hr className="border-l border-white border-opacity-25 h-4" />
				<p>{props.fighterName}</p>
			</li>
		</Link>
	);
};

const RankingList = (props) => {
	return (
		<ul className="bg-light-grey dark:bg-dark-grey p-4 rounded-md">
			<h1 className="font-heading">{props.division}</h1>
			{props.fighters.map((fighter, index) => {
				return (
					<div
						key={index}
						className="border-b border-white border-opacity-25 last:border-none"
					>
						<RankingListItem rank={index} fighterName={fighter.name} />
					</div>
				);
			})}
		</ul>
	);
};

export default RankingList;
