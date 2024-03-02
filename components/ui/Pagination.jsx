"use client"
const Pagination = (props) => {
	return (
		
		<>
			<div className="flex flex-row gap-2 justify-center">
				<div className={`rounded-md flex flex-row items-center justify-evenly bg-dark-grey text-white ${props.onPage === props.page ? "border border-white" : "border-none"} size-10`}>
					{props.page}
				</div>
			</div>
		</>
	);
};

export default Pagination;
