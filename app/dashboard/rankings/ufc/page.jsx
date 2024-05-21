"use client";
import ItemFilter from "@/components/ItemFilter";
import RankingList from "@/components/rankings/RankingList";
import { fetchAPI } from "@/scripts/util";
import { useEffect, useState } from "react";

const Loader = () => {
  return (
    <div className="dark:bg-dark-grey bg-light-grey rounded-md min-h-96 p-8 flex flex-col gap-4">
      {Array.from({length: 10}, (_, i) => (
        <div key={i} className="dark:bg-dark-grey bg-light-grey brightness-110 w-full animate-pulse loader-animation">&nbsp;</div>
      ))}
    </div>
  );
};

const RankingsUfc = () => {
  const [rankingsData, setRankingsData] = useState([]);
  const [filter, setFilter] = useState("Men's Pound-for-Pound Top Rank");
  const [fightersData, setFightersData] = useState([]);
  const [loading, setLoading] = useState(true);

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
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  function getFilterLabels(rankingsData) {
    if (
      !rankingsData ||
      !rankingsData.content ||
      !Array.isArray(rankingsData.content)
    ) {
      return ["Loading..."];
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
      {!loading ? (
        rankingsData.content &&
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
        ))
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default RankingsUfc;
