"use client";
// Icons
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Hooks
import { useState, useEffect, useRef } from "react";

/**
 * A button to filter saved items.
 * @param {Object} props - The props object containing the component's properties.
 * @param {string} props.initialValue - The default value to display on the button.
 * @returns {JSX.Element} A JSX element representing the filter button.
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
				className="self-center p-2 rounded-md bg-light-grey dark:bg-dark-grey defaultTransition"
				onClick={handleFilterClick}
			>
				<div
					id="current-value"
					className="text-xs uppercase flex flex-row items-center gap-2"
				>
					{currentFilterValue} <FontAwesomeIcon icon={faFilter} />
				</div>
			</button>
			{filterIsOpen && (
				<div className=" absolute flex flex-col gap-2 p-2 bg-light-grey dark:bg-dark-grey rounded-md dark:shadow-black shadow-md translate-y-12">
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
