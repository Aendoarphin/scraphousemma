"use client";
// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
// Static data
import { filterItems, savedItems } from "@/constants";
// Next
import Image from "next/image";
// Hooks
import { useState } from "react";
import ItemFilter from "@/components/ui/ItemFilter";

const SavedItems = () => {
	const [hasSavedItems] = useState(savedItems.items.length > 0);
	const [currentFilterValue, setCurrentFilterValue] = useState("all");

	const getCurrentFilter = (value) => {
		setCurrentFilterValue(value);
	};

	return (
		<div className="flex flex-col min-w-80 w-full mb-8">
			<div className="flex justify-between sticky top-0 defaultTransition">
				<h1 className="py-4 font-heading">Your Saved Items</h1>
				<div className="flex flex-row justify-end">
					<ItemFilter
						resolvedFilter={getCurrentFilter}
						filterItems={filterItems.dashboard}
						initialValue={filterItems.dashboard.all}
					/>
				</div>
			</div>
			<div className=" h-96">
				{hasSavedItems ? (
					<div className="defaultTransition shadow-inner-soft h-full overflow-y-scroll rounded-md bg-light-grey dark:bg-dark-grey p-4">
						{savedItems.items.map((item, index) => {
							const isFighterWithImage = item.type === "fighter" && item.image;
							return (
								<div
									key={index}
									className={`group ${
										currentFilterValue !== "all"
											? item.type === currentFilterValue
												? "flex"
												: "hidden"
											: "flex"
									} h-32 items-center flex-row justify-between border-b border-black dark:border-white border-opacity-15 last-of-type:border-none defaultTransition ${
										isFighterWithImage ? "flex-row" : ""
									}`}
								>
									<div className="p-4 flex flex-col gap-2 group-hover:scale-105 defaultTransition">
										<div className="uppercase dark:text-white dark:text-opacity-25 defaultTransition text-black text-opacity-25 text-xs">
											{item.type}
										</div>
										<div className="flex justify-between font-heading">
											<div className="flex flex-col gap-2">
												{isFighterWithImage ? (
													<div className="flex flex-row items-center gap-4">
														<Image
															src={item.image}
															width={500}
															height={500}
															className="w-12 h-12 object-cover object-top"
															alt="fighter thumbnail"
														/>
														<h1 className="w-full flex">{item.name}</h1>
													</div>
												) : (
													<h1>{item.name}</h1>
												)}
											</div>
										</div>
									</div>
									<button className="px-4">
										<FontAwesomeIcon icon={faEllipsisV} />
									</button>
								</div>
							);
						})}
					</div>
				) : (
					<div className="h-full flex shadow-inner-soft bg-light-grey dark:bg-dark-grey defaultTransition rounded-md items-center">
						<h1 className="mx-auto flex flex-col text-xl opacity-50">
							No Saved Items
						</h1>
					</div>
				)}
			</div>
		</div>
	);
};

export default SavedItems;
