"use client";
import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faArrowAltCircleLeft,
	faArrowAltCircleRight,
	faFireAlt,
} from "@fortawesome/free-solid-svg-icons";
import NewsItem from "@/components/news/NewsItem";
import NewsGrid from "@/components/news/NewsGrid";
import Pagination from "@/components/Pagination";
import { sampleNewsData } from "@/constants";

const News = () => {
	const [currentPage, setCurrentPage] = useState(0);
	
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

	const handlePageClick = (pageGroupIndex) => {
		setCurrentPage(pageGroupIndex);
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
		<div className="flex flex-col gap-4">
			<div className="font-heading col-span-2 text-xl">
				<FontAwesomeIcon icon={faFireAlt} /> Top News
			</div>
			<NewsGrid topNews={topStories} />
			<div className="font-heading text-xl">Other News</div>
			<div id="news-item-list" className="flex flex-col gap-4">
				{groupStories[currentPage].map((item, index) => (
					<Link
						key={index}
						href={`news/${item.articleId}/${item.name}/${item.publishedDate}/${item.source}/${item.image}`}
					>
						<NewsItem
							name={item.name}
							publishedDate={item.publishedDate}
							source={item.source}
							image={item.image}
						/>
					</Link>
				))}
			</div>
			<div className="flex flex-row gap-2 justify-center items-center">
				<button onClick={() => handleArrowClick("left")}>
					<FontAwesomeIcon size="xl" icon={faArrowAltCircleLeft} />
				</button>
				{groupStories.map((_, index) => (
					<button key={index} onClick={() => handlePageClick(index)}>
						<Pagination page={index + 1} onPage={currentPage + 1} />
					</button>
				))}
				<button onClick={() => handleArrowClick("right")}>
					<FontAwesomeIcon size="xl" icon={faArrowAltCircleRight} />
				</button>
			</div>
		</div>
	);
};

export default News;
