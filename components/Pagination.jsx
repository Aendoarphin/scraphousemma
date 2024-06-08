const Pagination = ({ page, onPage }) => {
	return (
		<>
			<div className="flex flex-row gap-2 justify-center">
				<div className={`rounded-md flex flex-row items-center justify-evenly dark:bg-dark-grey bg-light-grey dark:text-white text-black ${onPage === page ? "border dark:border-white border-black" : "border-none"} size-10`}>
					{page}
				</div>
			</div>
		</>
	);
};

export default Pagination;
