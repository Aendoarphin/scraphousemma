import Image from "next/image";
import Link from "next/link";

const ContentGrid = (props) => {
	return (
		<>
			<div className="col-span-2 flex flex-row w-full text-white rounded-md overflow-clip">
				<Image
					src={"/images/NewsPreview.jpg"}
					width={100}
					height={100}
					alt="picture of news headline"
					className=" self-center h-full object-cover"
				/>
				<div className="bg-main p-4 size-full">
					<p className="text-xs">Jan 4, 2023 | Source</p>
					<Link
						href="/dashboard/news/article"
						className="font-heading text-md max-w-full  hover:underline"
					>
						{props.headline}
					</Link>
				</div>
			</div>
		</>
	);
};
export default ContentGrid;
