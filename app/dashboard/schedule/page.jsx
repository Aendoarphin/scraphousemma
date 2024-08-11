"use client";
import { useState, useEffect } from "react";
import { fetchAPI } from "@/scripts/util";
import ItemFilter from "@/components/ItemFilter";
import { filterItems, months } from "@/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";

const Schedule = () => {
	const [schedule, setSchedule] = useState({ content: [] });
	const [LeagueFilter, setLeagueFilter] = useState(filterItems.schedule.ufc);
	const [YearFilter, setYearFilter] = useState(filterItems.scheduleYear[2024]);
	const [EventStateFilter, setEventStateFilter] = useState(
		filterItems.eventState.upcoming
	);

	useEffect(() => {
		const fetchSchedule = async () => {
			const data = await fetchAPI(
				`http://${process.env.HOST}:3000/api/ufc/schedule/`,
				"get"
			);
			setSchedule(data);
		};
		fetchSchedule();
	}, [YearFilter]);

	return (
		<div className="flex flex-col gap-4">
			<div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-2 sm:gap-0">
				<h1 className="font-heading text-xl">Schedule</h1>
				<div className="flex flex-row gap-2">
					<ItemFilter
						initialValue={LeagueFilter}
						resolvedFilter={setLeagueFilter}
						filterItems={filterItems.schedule}
						toolTip={"League"}
					/>
					<ItemFilter
						initialValue={YearFilter}
						resolvedFilter={setYearFilter}
						filterItems={filterItems.scheduleYear}
						toolTip={"Year"}
					/>
					<ItemFilter
						initialValue={EventStateFilter}
						resolvedFilter={setEventStateFilter}
						filterItems={filterItems.eventState}
						toolTip={"View finished or upcoming events"}
					/>
				</div>
			</div>
			<div
				id="eventsContainer"
				className="p-4 overflow-x-clip shadow-inner-soft dark:bg-dark-grey bg-light-grey rounded-md h-min gap-2 flex flex-col"
			>
				{schedule.content.length > 0 ? (
					schedule.content.map((event, index) => {
						const trimmedEventName = event.eventName.replace(/\s+\d{4}$/, "");
						const [venueType, venueName] = trimmedEventName.split(":");

						const date = event.eventDate.split("-");
						const parsedDate = new Date(event.eventDate);
						const today = new Date();
						today.setHours(0, 0, 0, 0);
						const yesterday = new Date(today);
						const pastEvent =
							parsedDate < yesterday.setDate(today.getDate() - 1);

						const states = {
							past: pastEvent,
							upcoming: !pastEvent,
							all: true,
						};

						return (
							states[EventStateFilter] &&
							event.eventYear === YearFilter && (
								<div
									className={`flex flex-row last-of-type:mb-0 text-black dark:text-white rounded-md hover:outline outline-1 outline-black dark:outline-white defaultTransition ${
										pastEvent ? "opacity-50" : ""
									}`}
								>
									<div className="bg-main flex-col items-center font-heading flex justify-center text-center min-w-20 min-h-20 max-w-20 max-h-20 rounded-l-md text-white">
										{months[parseFloat(date[date.length - 2])]}
										<p className="text-2xl">{date[date.length - 1]}</p>
									</div>
									<div
										key={index}
										className="border-white last-of-type:border-b-0 p-4 border-opacity-25 max-h-20 w-full flex flex-col justify-center"
									>
										<p
											className={`font-heading ${
												venueType.length > 12 ? "text-[12px]" : ""
											}`}
										>
											{venueType}
										</p>
										<p
											className={`lg:text-2xl ${
												venueName.length > 20
													? "text-sm text-nowrap"
													: venueName.length > 25
													? "text-[12px]"
													: ""
											}`}
										>
											{venueName}
										</p>
									</div>
									<button className="my-auto ml-auto mr-4 h-min p-1">
										<FontAwesomeIcon icon={faEllipsisV} size="lg" />
									</button>
								</div>
							)
						);
					})
				) : (
					<div className="spinner mx-auto"></div>
				)}
			</div>
		</div>
	);
};

export default Schedule;
