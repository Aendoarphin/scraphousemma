import NewsItem from "@/components/ui/NewsItem";
import Image from "next/image";
import Link from "next/link";
import { sampleNewsData } from "@/constants";

const News = () => {
  let topStories = [...sampleNewsData].slice(0, 3);
  return (
    <>
      <div className="font-heading col-span-2 text-xl">Top News</div>
      <div
        id="top-news"
        className="lg:min-h-96 grid grid-rows-12 grid-cols-2 gap-4 sm:h-60"
      >
        {topStories.map((story, index) => (
          <Link
            key={index}
            href={`news/${story.articleId}`}
            className={`flex flex-col justify-end bg-light-grey rounded-md p-4 ${
              index === 0
                ? "col-start-1 row-span-full"
                : index === 1
                ? "row-start-1 row-span-6 text-md"
                : "row-start-7 row-span-6 text-md"
            } hover:scale-[102%] ease-in transition-transform relative`}
          >
            <Image
              alt={`top story image ${index + 1}`}
              src={story.image}
              fill={true}
              className="absolute inset-0 object-cover object-top rounded-md brightness-50"
            />
            <p className="relative text-white font-heading text-shadow line-clamp-3">
              {story.name}
            </p>
          </Link>
        ))}
      </div>

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
    </>
  );
};

export default News;
