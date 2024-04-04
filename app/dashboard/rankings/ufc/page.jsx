"use client";
import ItemFilter from "@/components/ui/ItemFilter";
import RankingList from "@/components/ui/rankings/RankingList";
import { useEffect, useState } from "react";

const RankingsUfc = () => {
	const getRankings = async () => {
		const res = await fetch("http://localhost:3000/api/ufc/rankings/", {
			method: "GET",
		});
		return res.json();
	};

	const [rankingsData, setRankingsData] = useState([]);
	const [filter, setFilter] = useState("Men's Pound-for-Pound Top Rank");

	useEffect(() => {
		const fetchData = async () => {
			try {
				const ufcRankings = await getRankings();
				setRankingsData(ufcRankings);
			} catch (error) {
				console.error("Error fetching rankings:", error);
			}
		};
		fetchData();
	}, [filter]);

	const getFilter = (value) => {
		setFilter(value);
	};

	return (
		<div className="bg-white dark:bg-black defaultTransition overflow-visible pb-2 gap-4 flex flex-col">
			<div className="flex flex-row gap-2 justify-end">
				<ItemFilter
					resolvedFilter={getFilter}
					filterItems={rankingsData.map((item) => item.categoryName)}
					initialValue={filter}
				/>
			</div>
			{rankingsData.length !== 0 ? (
				rankingsData.map((item, index) => {
					return (
						<div
							key={index}
							className={`${
								item.categoryName === filter ? "visible" : "hidden"
							}`}
						>
							<RankingList
								division={item.categoryName}
								championName={item.champion.championName}
								fighters={item.fighters}
							/>
						</div>
					);
				})
			) : (
				<div>nothing</div>
			)}
		</div>
	);
}; // making rankings template

export default RankingsUfc;
