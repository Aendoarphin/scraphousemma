"use client";
import ItemFilter from "@/components/ui/ItemFilter";
import RankingList from "@/components/ui/rankings/RankingList";
import { fetchAPI } from "@/scripts/util";
import { useEffect, useState } from "react";

const RankingsUfc = () => {
	const [rankingsData, setRankingsData] = useState([]);
	const [filter, setFilter] = useState("Men's Pound-for-Pound Top Rank");
	const [fightersData, setFightersData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const ufcRankings = await fetchAPI(
					"http://localhost:3000/api/ufc/rankings/"
				);
				setRankingsData(ufcRankings);
				const ufcFighters = await fetchAPI(
					"http://localhost:3000/api/ufc/fighters/"
				);
				setFightersData(ufcFighters.content);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};
		fetchData();
	}, [filter]);

	function getFilterLabels(rankingsData) {
		// Check if rankingsData and rankingsData.content are defined
		if (
			!rankingsData ||
			!rankingsData.content ||
			!Array.isArray(rankingsData.content)
		) {
			return ["Error: Invalid data structure or missing content array."];
		}

		// Extract category names
		const categoryNames = rankingsData.content
			.map((item) =>
				// Check if the item has a categoryName property
				item && item.categoryName ? item.categoryName : null
			)
			.filter(Boolean); // Filter out any null values

		return categoryNames;
	}

	const getFilter = (value) => {
		setFilter(value);
	};

	const resolvedFlags = fightersData.map((obj) => ({
		name: obj.details.name,
		flag: obj.details.flag,
	}));

	return (
		<div className="bg-white dark:bg-black defaultTransition overflow-visible pb-2 gap-4 flex flex-col">
			<div className="flex flex-row gap-2 justify-between items-center">
				<h1 className="font-heading text-xl">Rankings</h1>
				<ItemFilter
					resolvedFilter={getFilter}
					filterItems={getFilterLabels(rankingsData)}
					initialValue={filter}
				/>
			</div>
			{rankingsData.content &&
				rankingsData.content.length > 0 &&
				fightersData.length > 0 &&
				rankingsData.content.map((item, index) => (
					<div
						key={index}
						className={`${item.categoryName === filter ? "visible" : "hidden"}`}
					>
						<RankingList
							division={item.categoryName}
							championName={item.champion.championName}
							fighters={item.fighters}
							resolvedFlags={resolvedFlags}
						/>
					</div>
				))}
		</div>
	);
};

export default RankingsUfc;
