"use client";
import ItemFilter from "@/components/ItemFilter";
import RankingList from "@/components/rankings/RankingList";
import { fetchAPI } from "@/scripts/util";
import { useEffect, useState } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/navigation";

const RankingsUfc = () => {
	const { user } = useUser();
	const router = useRouter();

	const [rankingsData, setRankingsData] = useState([]);
	const [filter, setFilter] = useState("Men's Pound-for-Pound Top Rank");
	const [fightersData, setFightersData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			if (!user) {
				router.push("/api/auth/login");
			}

			if (!user) {
				return null;
			}
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
	}, [filter, user, router]);

	function getFilterLabels(rankingsData) {
		if (
			!rankingsData ||
			!rankingsData.content ||
			!Array.isArray(rankingsData.content)
		) {
			return ["Error: Invalid data structure or missing content array."];
		}

		const categoryNames = rankingsData.content
			.map((item) => (item && item.categoryName ? item.categoryName : null))
			.filter(Boolean);
		return categoryNames;
	}

	const getFilter = (value) => {
		setFilter(value);
	};

	const resolvedFighterData = fightersData.map(({ details }) => ({
		name: details.name,
		flag: details.flag,
		wins: details.wins,
		losses: details.losses,
		draws: details.draws,
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
							fighterInfo={resolvedFighterData}
						/>
					</div>
				))}
		</div>
	);
};

export default RankingsUfc;
