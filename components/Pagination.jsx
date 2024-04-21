/**
 * 
 * @param {Object} props - Component props to retrieve page count
 * @returns {JSX.Element} A JSX element that represents pagination component
 */
const Pagination = (props) => {
	return (
		<>
			<div className="flex flex-row gap-2 justify-center">
				<div className={`rounded-md flex flex-row items-center justify-evenly dark:bg-dark-grey bg-light-grey dark:text-white text-black ${props.onPage === props.page ? "border dark:border-white border-black" : "border-none"} size-10`}>
					{props.page}
				</div>
			</div>
		</>
	);
};

export default Pagination;
