"use client";
import { fetchAPI } from "@/scripts/util";
import { useState, useEffect } from "react";
import ItemFilter from "@/components/ItemFilter";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faMapPin } from "@fortawesome/free-solid-svg-icons";

const EventItem = ({ eventData }) => {
	return (
		<div className="flex flex-col dark:bg-dark-grey bg-light-grey text-nowrap max-w-full rounded-md shadow-inner-soft">
			<div className="bg-main p-4 font-heading text-white rounded-t-md text-nowrap">
				<p className="text-lg">{eventData.name.split(" - ")[0]}</p>
				<p className="text-2xl text-wrap sm:text-nowrap">
					{eventData.name.split(" - ")[1]}
				</p>
			</div>
			<div className="text-sm p-4">
				<p className="flex items-center gap-1 text-nowrap">
					<FontAwesomeIcon icon={faMapPin} className="w-4" />
					<span className="truncate">{eventData.location}</span>
				</p>
				<p className="flex items-center gap-1">
					<FontAwesomeIcon icon={faCalendar} className="w-4" />
					{eventData.month} {eventData.day}, {eventData.year}
				</p>
			</div>
			<div></div>
		</div>
	);
};

const Schedule = () => {
	const [data, setData] = useState([]);
	const [filter, setFilter] = useState("upcoming");

	useEffect(() => {
		try {
			const fetchData = async () => {
				const response = await fetchAPI(
					`https://${process.env.HOST}/api/schedule/`,
					"get"
				);
				const content = await response.content.events;
				setData(content);
			};
			fetchData();
		} catch (error) {
			console.error(error);
		}
	}, []);
	function getFilterLabels(data) {
		if (!data || !Array.isArray(data)) {
			return <div className="spinner mx-auto"></div>;
		}

		const categoryNames = ["upcoming", "past"];
		return categoryNames;
	}

	const getFilter = (value) => {
		setFilter(value);
	};
	return (
		<div className="flex flex-col gap-4 mb-1">
			<div className="flex flex-row gap-2 justify-between items-center">
				<h1 className="font-heading text-xl">Schedule</h1>
				<ItemFilter
					resolvedFilter={getFilter}
					filterItems={getFilterLabels(data)}
					initialValue={filter}
				/>
			</div>
			<div className="defaultTransition flex flex-wrap gap-4">
				{data ? (
					data.map((event) => {
						if (
							(filter === "upcoming" && event.eventStatus === "upcoming") ||
							(filter === "past" && event.eventStatus === "past")
						) {
							return (
								<div key={event.name} className="flex-1 max-w-full">
									<Link href={`/dashboard/schedule/${event.id}`}>
										<EventItem eventData={event} />
									</Link>
								</div>
							);
						}
						return null;
					})
				) : (
					<div className="spinner mx-auto"></div>
				)}
			</div>
		</div>
	);
};

export default Schedule;
