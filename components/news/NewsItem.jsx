import Image from "next/image";

const NewsItem = ({ publishedAt, source, title, urlToImage }) => {
	return (
		<>
			<div className="shadow-inner-soft defaultTransition bg-light-grey dark:bg-dark-grey rounded-md flex flex-row h-24 sm:h-28 md:h-32 items-center overflow-hidden hover:scale-[102%]">
				<div className="p-4 w-full truncate">
					<p className="text-xs truncate">
						{publishedAt} | {source}
					</p>
					<h1 className="font-heading text-lg line-clamp-1 whitespace-normal">
						{title}
					</h1>
				</div>
				{urlToImage ? (
					<Image
						src={urlToImage}
						width={500}
						height={200}
						quality={50}
						priority
						alt="news article thumbnail"
						className="h-24 sm:h-28 md:h-32 max-w-24 sm:max-w-28 md:max-w-32 object-cover"
					/>
				) : null}
			</div>
		</>
	);
};
export default NewsItem;
