import Image from "next/image";

const Panel = (props) => {
	return (
		<>
			<div>
				<div className="bg-dark-grey rounded-t-md h-min p-8 flex gap-8 max-w-full overflow-hidden flex-col">
					<div className="justify-around flex gap-4">
						<Image
							src={'/images/dev-thumbnail.jpg'}
							alt="news thumbnail"
							height={100}
							width={100}
							className=" object-cover"
						/>
						<div className="flex flex-col py-1">
							<h1 className="text-lg font-extrabold">This is a heading for a news article headline</h1>
							<p className="text-sm opacity-25">Jan 1, 2023 | Source</p>
						</div>
					</div>
				</div>
				<div className="hover:-translate-y-1 active:contrast-50 rounded-b-md mt-1 bg-main p-2 flex max-w-full overflow-hidden">
					<h1 className="m-auto font-extrabold">{props.buttonLabel}</h1>
				</div>
			</div>
		</>
	);
};
// left off here
export default Panel;
