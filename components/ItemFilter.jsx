"use client";
// Icons
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Hooks
import { useState, useEffect, useRef } from "react";

/**
 * A dropdown to filter items.
 */
const ItemFilter = (props) => {
	const [currentFilterValue, setCurrentFilterValue] = useState(
		props.initialValue
	);

	const node = useRef();

	const handleFilterSelected = (selectedValue) => {
		props.resolvedFilter(selectedValue);
		setCurrentFilterValue(selectedValue);
		setFilterIsOpen(false);
	};

	const [filterIsOpen, setFilterIsOpen] = useState(false);
	const handleFilterClick = () => {
		setFilterIsOpen(!filterIsOpen);
	};

	const handleClickOutside = (event) => {
		if (node.current && !node.current.contains(event.target)) {
			setFilterIsOpen(false);
		}
	};

	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<div className="flex justify-end" ref={node}>
			<button
				className="self-center p-2 rounded-md bg-light-grey dark:bg-dark-grey shadow-inner-soft defaultTransition"
				onClick={handleFilterClick}
				title={props.toolTip}
			>
				<div
					id="current-value"
					className="text-xs uppercase flex flex-row items-center gap-2"
				>
					{currentFilterValue} <FontAwesomeIcon icon={faFilter} />
				</div>
			</button>
			{filterIsOpen && (
				<div className=" z-10 absolute flex flex-col gap-2 p-2 bg-light-grey dark:bg-dark-grey rounded-md dark:shadow-black shadow-inner-soft translate-y-14">
					{Object.keys(props.filterItems).map((key) => (
						<button
							key={key}
							name={props.filterItems[key]}
							value={props.filterItems[key]}
							className="text-xs uppercase text-start hover:text-opacity-100"
							onClick={() => handleFilterSelected(props.filterItems[key])}
						>
							<div className="text-[grey] hover:text-black dark:hover:text-white">
								{props.filterItems[key]}
							</div>
						</button>
					))}
				</div>
			)}
		</div>
	);
};

export default ItemFilter;
