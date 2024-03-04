import { useState } from "react";

const ItemFilter = ({ filterItems = { date: "Date", popularity: "Popularity" } }) => {
    const [currentFilterValue, setCurrentFilterValue] = useState("Date");
    const handleFilterSelected = (selectedValue) => {
        setCurrentFilterValue(selectedValue);
        setFilterIsOpen(false)
    };

    const [filterIsOpen, setFilterIsOpen] = useState(false);
    const handleFilterClick = () => {
        setFilterIsOpen(!filterIsOpen);
    };

    return (
        <>
            <button
                className="self-center p-2 font-heading bg-dark-grey rounded-md"
                onClick={handleFilterClick}
            >
                <div id="current-value">Filter By {currentFilterValue} ▼</div>
            </button>
            {filterIsOpen && (
                <div className="absolute flex flex-col gap-2 p-2 bg-dark-grey rounded-md shadow-black shadow-md translate-y-12">
                    {Object.keys(filterItems).map((key) => (
                        <button
                            key={key}
                            name={filterItems[key]}
                            value={filterItems[key]}
                            className="text-start hover:text-opacity-100"
                            onClick={() => handleFilterSelected(filterItems[key])}
                        >
                            <p className="text-[grey] hover:text-white">{filterItems[key]}</p>
                        </button>
                    ))}
                </div>
            )}
        </>
    );
};

export default ItemFilter;
