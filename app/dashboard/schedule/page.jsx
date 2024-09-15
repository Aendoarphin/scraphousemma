"use client";
import { fetchAPI } from "@/scripts/util";
import { useState, useEffect } from "react";
import ItemFilter from "@/components/ItemFilter";
import Link from "next/link";

const EventItem = ({ eventData }) => {
	return (
		<div className="flex flex-col">
			<Link href={``}><h1 className="font-heading">{eventData.name}</h1></Link>
			<div className="text-sm">
				<p>{eventData.location}</p>
				<p>
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
			<div className="shadow-inner-soft bg-light-grey dark:bg-dark-grey p-8 rounded-md defaultTransition flex flex-col gap-4">
				{data ? (
					data.map((event) => {
						if ((filter === "upcoming" && event.eventStatus === "upcoming") ||
								(filter === "past" && event.eventStatus === "past")) {
							return (
								<div key={event.name} className="border-b dark:border-white dark:border-opacity-25 border-black border-opacity-25 last-of-type:border-none pb-4">
									<EventItem eventData={event} />
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
