import NewsItem from "@/components/ui/news/NewsItem";
import NewsGrid from "@/components/ui/news/NewsGrid";
import { sampleNewsData } from "@/constants";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Pagination from "@/components/ui/Pagination";

const News = () => {
	let topStories = [...sampleNewsData].slice(0, 3);
	return (
		<>
			<div className="font-heading col-span-2 text-xl"><FontAwesomeIcon icon={faNewspaper}/> Top News</div>
			<NewsGrid topNews={topStories} />
			<div className="font-heading text-xl">Other News</div>
			<div id="news-item-list" className="flex flex-col gap-4">
				{sampleNewsData.slice(3).map((item, index) => (
					<NewsItem
						key={index}
						name={item.name}
						published={item.published}
						source={item.source}
						image={item.image}
					/>
				))}
			</div>
			<Pagination/>
		</>
	);
};

export default News;
