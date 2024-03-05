"use client";
import FilterItem from "@/components/ui/FilterItem";
// Data
import { dashboardHomePanels, filterItems, savedItems } from "@/constants";
import { faEllipsisV, faSort } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const DashboardHome = () => {
	const sections = dashboardHomePanels || [];
	const [hasSavedItems, setHasSavedItems] = useState(true);

	const Widget = () => {
		return (
			<>
				<div className="flex flex-col gap-4">
					<div className="flex flex-row justify-between">
						<h1 className="text-xl self-center">Your Saved Items</h1>
						<div className="flex flex-col justify-evenly items-end font-heading text-xs">
							<FilterItem filterItems={filterItems} />
						</div>
					</div>
					<div className="bg-light-grey dark:bg-dark-grey p-2 rounded-md min-h-96 max-h-96">
						<div className="size-full p-4 flex flex-col gap-4">
							<p className="font-heading flex justify-between">
								Articles
								<button>
									<FontAwesomeIcon icon={faSort} />
								</button>
							</p>
							<div className="rounded-md overflow-y-scroll">
								{hasSavedItems ? (
									<div>{savedItems.articles.map((article, index) => <h1 className="justify-between flex flex-row even:bg-[#181818] odd:bg-[#242424] p-4 font-heading text-xl" key={index}>{article.articleName}<button id={"item-options"}><FontAwesomeIcon icon={faEllipsisV}/></button></h1>)}</div>
								) : (
									<h1 className="mx-auto justify-center flex flex-col text-xl opacity-50">No Saved Items</h1>
								)}
							</div>
						</div>
					</div>
				</div>
			</>
		);
	};

	return (
		<>
			<div>
				<h1 className="text-xl font-heading">[User]&apos;s Dashboard</h1>
			</div>
			<div className={`grid grid-rows-${sections.length} `}>
				<Widget label={sections.filter((item) => item.title)} />
			</div>
		</>
	);
};

export default DashboardHome;
