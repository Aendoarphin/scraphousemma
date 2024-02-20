import Image from "next/image";
import Link from "next/link";

const CardNews = () => {
	return (
		<>
			<div className="flex flex-row w-full text-white rounded-md overflow-clip">
				<Image
					src={"/images/NewsPreview.jpg"}
					width={100}
					height={100}
					alt="picture of news headline"
					className=" self-center h-full object-cover"
				/>
				<div className="bg-main p-4">
					<p className="text-xs">Jan 4, 2023 | Source</p>
					<Link
						href="/dashboard/news/article"
						className="font-bold text-md max-w-full  hover:underline"
					>
						{"Jones to fight Rose Namajunas"}
					</Link>
				</div>
			</div>
		</>
	);
};

export default CardNews;
