import Link from "next/link";

const RankingListItem = (props) => {
	let rank = props.rank === "🏆" ? "🏆" : props.rank + 1;
	let name = props.fighterName;
	return (
		<li className={`flex flex-row gap-4 items-center p-2 ${props.style}`}>
				<h1 className={`font-heading w-6 text-center`}>{rank}</h1>
				<hr className={`border-l border-white border-opacity-25 h-4`} />
				<Link href={""}><p>{name}</p></Link>
			</li>
	);
};

const RankingList = (props) => {
	return (
		<ul className="bg-light-grey dark:bg-dark-grey p-8 rounded-md">
			<h1 className="font-heading">{props.division}</h1>
			{props.fighters.map((fighter, index) => {
				return (
					<div
						key={index}
						className="border-b border-white border-opacity-25 last:border-none"
					>
						{index === 0 &&
						props.division !== "Men's Pound-for-Pound Top Rank" &&
						props.division !== "Women's Pound-for-Pound Top Rank" ? (
							<RankingListItem
								rank={"🏆"}
								fighterName={props.championName}
								style={"font-heading border-b border-white border-opacity-25"}
							/>
						) : null}
						<RankingListItem rank={index} fighterName={fighter.name} />
					</div>
				);
			})}
		</ul>
	);
};

export default RankingList;
