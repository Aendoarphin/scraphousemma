"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import FilterItem from "@/components/ui/FilterItem";
import { filterItems, savedItems } from "@/constants";
import Image from "next/image";
import { useState } from "react";

const SavedItems = () => {
  const [hasSavedItems, setHasSavedItems] = useState(true);
  return (
    <div className="flex flex-col gap-4 min-w-96">
      <div className="flex justify-between sticky top-0 border-b border-black dark:border-white">
        <h1 className="py-4 font-heading">Your Saved Items</h1>
        <div className="flex flex-row justify-end">
          <FilterItem filterItems={filterItems} />
        </div>
      </div>
      <div className="mb-24 h-[30rem]">
        {hasSavedItems ? (
          <div className="h-full overflow-y-scroll rounded-md bg-dark-grey p-4">
            {savedItems.items.map((item, index) => (
              <div
                key={index}
                className="flex flex-row justify-between border-b border-white border-opacity-15 last-of-type:border-none"
              >
                <div className="p-4 flex flex-col gap-2">
                  <div className="uppercase dark:text-white dark:text-opacity-25 text-black text-opacity-25 text-xs">
                    {item.type}
                  </div>
                  <div className="flex justify-between font-heading">
                    <h1 className="flex flex-col gap-2">
                      {item.image && item.type === "fighter" ? (
                        <div className="flex flex-row items-center gap-4">
                          <Image
                            src={item.image}
                            width={500}
                            height={500}
                            className="w-12 h-12 object-cover object-top"
                            alt="fighter thumbnail"
                          />
                          <h1 className="w-min max-w-min flex">
                            {item.name}
                          </h1>
                        </div>
                      ) : (
                        <h1>{item.name}</h1>
                      )}
                    </h1>
                  </div>
                </div>
                <button>
                  <FontAwesomeIcon icon={faEllipsisV} />
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="h-full flex bg-dark-grey rounded-md items-center">
            <h1 className="mx-auto flex flex-col text-xl opacity-50">
              No Saved Items
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default SavedItems;