"use client";
import ItemFilter from "@/components/ui/ItemFilter";
import RankingList from "@/components/ui/rankings/RankingList";
import { useEffect, useState } from "react";

const RankingsUfc = () => {
	const getRankings = async () => {
		const res = await fetch("http://localhost:3000/api/ufc/rankings/");
		return res.json();
	};

	const [rankingsData, setRankingsData] = useState([]);
	const [filter, setFilter] = useState("Men's Pound-for-Pound Top Rank");

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await getRankings();
				setRankingsData(data);
			} catch (error) {
				console.error("Error fetching rankings:", error);
			}
		};
		fetchData();
	}, [filter]);

	const getFilter = (value) => {
		setFilter(value);
	};

	const filterLabels = rankingsData.map((item, index) => (
		item.categoryName
	))

	return (
		<div className="bg-white dark:bg-black defaultTransition overflow-visible pb-2 gap-4 flex flex-col">
			<div className="flex flex-row gap-2 justify-end">
				<ItemFilter
					resolvedFilter={getFilter}
					filterItems={filterLabels}
					initialValue={filter}
				/>
			</div>
			{rankingsData.length !== 0 ? (
				rankingsData.map((item, index) => {
					return (
						<div key={index} className={`${item.categoryName === filter ? "visible" : "hidden"}`}>
							<RankingList
								division={item.categoryName}
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
