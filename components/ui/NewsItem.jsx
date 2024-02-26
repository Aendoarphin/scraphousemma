import Image from "next/image";
import Link from "next/link";

const NewsItem = (props) => {

  return (
    <>
      <div className=" flex flex-row w-full items text-white rounded-md overflow-hidden hover:scale-[102%] ease-in transition-transform">
        {/* Headline */}
        <div className="bg-light-grey text-black p-4 w-full truncate dark:bg-dark-grey dark:text-white">
          <p className="text-xs overflow-hidden">
            {props.source} | {props.published}
          </p>
          <Link
            href="/dashboard/news/article"
            className="font-heading text-md max-w-full hover:underline"
          >
            {props.headline}
          </Link>
        </div>
				{/* Thumbnail */}
        <div className="w-1/2 max-h-10 min-h-8">
          <Image
            src={props.image}
						width={50}
						height={50}
            alt="picture of news headline"
            className="self-center w-full object-cover"
          />
        </div>
      </div>
    </>
  );
};
export default NewsItem;
