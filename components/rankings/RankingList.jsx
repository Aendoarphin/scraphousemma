import Link from "next/link";
import ReactCountryFlag from "react-country-flag";

const RankingListItem = ({ rank, fighterName, info, style }) => {
	let fighterRank = rank === "🏆" ? "🏆" : rank + 1;
	let name = fighterName;
	let flag = "";
	let record = "";

	// Fix country flag misrepresentation
	const flagOverrides = {
		"Ilia Topuria": "GE",
		"Casey O'Neill": "GB",
		"Paul Craig": "GB",
		"Beneil Dariush": "US",
		"Khamzat Chimaev": "RU",
		"Jiří Procházka ": "CZ",
		"David Dvorak": "CZ",
		"Serghei Spivac": "UA",
		"Alexandr Romanov": "MD",
		"Nikita Krylov": "UA",
		"Arman Tsarukyan": "AM",
		"Muhammad Mokaev": "GB",
		"Shavkat Rakhmonov": "KZ",
	};

	info.forEach((fighter) => {
		if (fighter.name.trim() === name.trim()) {
			flag = flagOverrides.hasOwnProperty(fighter.name)
				? flagOverrides[fighter.name]
				: fighter.flag;
			record = `(${fighter.wins} - ${fighter.losses} - ${fighter.draws})`;
		}
	});

	return (
		<li className={`flex flex-row gap-4 justify-start items-center p-2 min-h-12 max-h-12 ${style}`}>
			<h1 className={`font-heading text-center min-w-6`}>{fighterRank}</h1>
			<hr
				className={`border-l border-black dark:border-white dark:border-opacity-25 border-opacity-25 h-4`}
			/>
			{flag ? <ReactCountryFlag countryCode={flag} svg /> : ""}
			<Link href={""}>
				<p className={`${name.length > 10 ? "text-xs" : ""} text-xs sm:text-base`}>{name}</p>
			</Link>
			<p className="text-xs text-nowrap ml-auto sm:mx-0 opacity-50">{record}</p>
		</li>
	);
};

const RankingList = ({ division, fighters, championName, fighterInfo }) => {
	return (
		<ul className="shadow-inner-soft bg-light-grey dark:bg-dark-grey p-8 rounded-md defaultTransition">
			<h1 className="font-heading">{division}</h1>
			{fighters.map((fighter, index) => {
				return (
					<div
						key={index}
						className="border-b border-black dark:border-white dark:border-opacity-25 border-opacity-25 last:border-none"
					>
						{index === 0 &&
						division !== "Men's Pound-for-Pound Top Rank" &&
						division !== "Women's Pound-for-Pound Top Rank" ? (
							<RankingListItem
								rank={"🏆"}
								fighterName={championName}
								info={fighterInfo}
								style={
									"font-heading border-b border-black dark:border-white dark:border-opacity-25 border-opacity-25"
								}
							/>
						) : null}
						<RankingListItem
							rank={index}
							fighterName={fighter.name}
							info={fighterInfo}
						/>
					</div>
				);
			})}
		</ul>
	);
};

export default RankingList;
