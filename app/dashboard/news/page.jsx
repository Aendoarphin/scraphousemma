"use client";
import NewsItem from "@/components/ui/news/NewsItem";
import NewsGrid from "@/components/ui/news/NewsGrid";
import { sampleNewsData } from "@/constants";
import {
	faArrowAltCircleLeft,
	faArrowAltCircleRight,
	faNewspaper,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Pagination from "@/components/ui/Pagination";
import { useState } from "react";

const News = () => {
	let topStories = sampleNewsData.slice(0, 3);
	let otherStories = sampleNewsData.slice(3);

	let groupStories = [];
	let articleGroup = [];

	otherStories.forEach((article, index) => {
		articleGroup.push(article);
		if (articleGroup.length === 5 || index === otherStories.length - 1) {
			groupStories.push(articleGroup);
			articleGroup = [];
		}
	});

	if (articleGroup.length > 0) {
		groupStories.push(articleGroup);
	}

	const [currentPage, setCurrentPage] = useState(0);

	const handlePageClick = (whatPage) => {
		setCurrentPage(whatPage);
	};

	const handleArrowClick = (side) => {
		if (side === "left") {
			setCurrentPage(currentPage > 0 ? currentPage - 1 : 0);
		}
		if (side === "right") {
			setCurrentPage(
				currentPage < groupStories.length - 1 ? currentPage + 1 : currentPage
			);
		}
	};

	return (
		<>
			<div className="font-heading col-span-2 text-xl">
				<FontAwesomeIcon icon={faNewspaper} /> Top News
			</div>
			<NewsGrid topNews={topStories} />
			<div className="font-heading text-xl">Other News</div>
			<div id="news-item-list" className="flex flex-col gap-4">
				{groupStories[currentPage].map((item, index) => (
					<NewsItem
						key={index}
						name={item.name}
						published={item.published}
						source={item.source}
						image={item.image}
					/>
				))}
			</div>
			<div className="flex flex-row gap-2 justify-center items-center">
				<button onClick={() => handleArrowClick("left")}>
					<FontAwesomeIcon size="xl" icon={faArrowAltCircleLeft} />
				</button>
				{groupStories.map((_, index) => (
					<button
						key={index}
						onClick={() => handlePageClick(index)}
						className="  ease-in transition-all"
					>
						<Pagination page={index + 1} onPage={currentPage + 1} />
					</button>
				))}
				<button onClick={() => handleArrowClick("right")}>
					<FontAwesomeIcon size="xl" icon={faArrowAltCircleRight} />
				</button>
			</div>
		</>
	);
};

export default News;
