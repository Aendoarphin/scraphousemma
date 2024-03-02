import Image from "next/image"
import Link from "next/link"

const NewsGrid = (props) => {
  return (
    <>
      <div
				id="top-news"
				className="md:border md:border-main lg:min-h-[30rem] md:min-h-[24rem] sm:min-h-[20rem] min-h-[16rem] grid grid-rows-12 grid-cols-2 gap-4"
			>
				{props.topNews.map((story, index) => (
					<Link
						key={index}
						href={`news/${story.articleId}`}
						className={`flex flex-col justify-end bg-light-grey rounded-md p-4 ${
							index === 0
								? "col-start-1 row-span-full"
								: index === 1
								? "row-start-1 row-span-6 text-md"
								: "row-start-7 row-span-6 text-md"
						} hover:scale-[102%] ease-in transition-transform relative lg:text-xl`}
					>
						<Image
							alt={`top story image ${index + 1}`}
							src={story.image}
							fill={true}
							className="absolute inset-0 object-cover object-top rounded-md brightness-75"
						/>
						<p className="relative text-white font-heading line-clamp-3 text-shadow">
							{story.name}
						</p>
					</Link>
				))}
			</div>
    </>
  )
}

export default NewsGrid;