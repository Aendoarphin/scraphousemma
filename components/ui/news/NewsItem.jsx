import Image from "next/image";
import Link from "next/link";

const NewsItem = (props) => {
	return (
		<>
			<div className="defaultTransition bg-light-grey dark:bg-dark-grey rounded-md flex flex-row h-24 sm:h-28 md:h-32 items-center overflow-hidden hover:scale-[102%]">
				<div className="p-4 w-full truncate">
					<p className="text-xs truncate">
						{props.publishedDate} | {props.source}
					</p>
					<h1 className="font-heading text-lg line-clamp-1 whitespace-normal">
						{props.name}
					</h1>
				</div>
				<Image
					src={props.image}
					width={500}
					height={500}
					alt="news article thumbnail"
					className="h-24 sm:h-28 md:h-32 max-w-24 sm:max-w-28 md:max-w-32 object-cover"
				/>
			</div>
		</>
	);
};
export default NewsItem;
