"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faArrowAltCircleLeft,
	faArrowAltCircleRight,
	faFireAlt,
} from "@fortawesome/free-solid-svg-icons";
import NewsItem from "@/components/news/NewsItem";
import NewsGrid from "@/components/news/NewsGrid";
import Pagination from "@/components/news/Pagination";
import { fetchAPI } from "@/scripts/util";

const News = () => {
	const months = {
		1: "Jan",
		2: "Feb",
		3: "Mar",
		4: "Apr",
		5: "May",
		6: "Jun",
		7: "Jul",
		8: "Aug",
		9: "Sep",
		10: "Oct",
		11: "Nov",
		12: "Dec",
	};
	const [currentPage, setCurrentPage] = useState(0);
	const [news, setnews] = useState([]);

	useEffect(() => {
		const getNewsArticles = async () => {
			try {
				const response = await fetchAPI(`http://${process.env.HOST}:3000/api/news/`, "get");
				let articleArr = response.articles.map((article) => {
					const date = new Date(article.publishedAt);
					let month = date.getUTCMonth() + 1;
					let day = date.getUTCDate();
					return {
						source: article.source.name,
						author: article.author,
						title: article.title,
						description: article.description,
						url: article.url,
						urlToImage: article.urlToImage,
						publishedAt: months[month] + " " + day,
						content: article.content,
					};
				});

				setnews(articleArr);
			} catch (error) {
				console.error(error);
			}
		};
		getNewsArticles();
	}, []);

	let topStories = news.slice(0, 3);
	let otherStories = news.slice(3);
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
			{topStories.length > 0 ? (<NewsGrid topNews={topStories} />) : <div className="spinner mx-auto"></div>}
			<div className="font-heading text-xl">Other News</div>
			<div id="news-item-list" className="flex flex-col gap-4">
				{groupStories.length > 0 ?
					groupStories[currentPage].map((item, index) => (
						<Link
							key={index}
							href={{
								pathname: "/dashboard/news/article",
								query: {
									index: index,
									title: item.title,
									publishedAt: item.publishedAt,
									source: item.source,
									urlToImage: item.urlToImage,
									url: item.url,
									content: item.content,
								},
							}}
						>
							<NewsItem
								title={item.title}
								publishedAt={item.publishedAt}
								source={item.source}
								urlToImage={item.urlToImage}
							/>
						</Link>
					)) : <div className="spinner mx-auto"></div>}
			</div>
			<div className="flex gap-2 flex-row justify-center items-center">
				<button onClick={() => handleArrowClick("left")}>
					<FontAwesomeIcon size="xl" icon={faArrowAltCircleLeft} />
				</button>
				<div className="flex flex-wrap flex-row justify-start gap-2">
				{groupStories.map((_, index) => (
					<button key={index} onClick={() => handlePageClick(index)}>
						<Pagination page={index + 1} onPage={currentPage + 1} />
					</button>
				))}
				</div>
				<button onClick={() => handleArrowClick("right")}>
					<FontAwesomeIcon size="xl" icon={faArrowAltCircleRight} />
				</button>
			</div>
		</div>
	);
};

export default News;
