import Image from "next/image"
import Link from "next/link"

const NewsGrid = (props) => {
  return (
    <>
      <div
				id="top-news"
				className="overflow-visible lg:min-h-[30rem] md:min-h-[24rem] sm:min-h-[20rem] min-h-[16rem] grid grid-rows-12 grid-cols-2 gap-4"
			>
				{props.topNews.map((item, index) => (
					<Link
						key={index}
						href={`news/${item.articleId}/${item.name}/${item.publishedDate}/${item.source}/${item.image}`}
						className={`shadow-inner-soft flex flex-col justify-end rounded-md p-4 ${
							index === 0
								? "col-start-1 row-span-full md:text-2xl"
								: index === 1
								? "row-start-1 row-span-6 text-xs sm:text-base"
								: "row-start-7 row-span-6 text-xs sm:text-base"
						} hover:scale-[102%] defaultTransition relative`}
					>
						<Image
							alt={`top story image ${index + 1}`}
							src={item.image}
							fill={true}
							className="absolute inset-0 object-cover object-top rounded-md brightness-75"
						/>
						<p className="relative text-white font-heading line-clamp-3 text-shadow">
							{item.name}
						</p>
					</Link>
				))}
			</div>
    </>
  )
}

export default NewsGrid;