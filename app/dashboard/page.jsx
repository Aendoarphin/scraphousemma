"use client";
import FilterItem from "@/components/ui/FilterItem";
// Data
import { dashboardHomePanels, filterItems } from "@/constants";
import { faEllipsisV, faSort } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const DashboardHome = () => {
  const sections = dashboardHomePanels || [];
  const [hasSavedItems, setHasSavedItems] = useState(true);

  const Widget = () => {
    return (
      <>
        <div className="flex flex-col gap-4">
          <div className="flex flex-row justify-between">
            <h1 className="text-xl self-center">Your Saved Items</h1>
            <div className="flex flex-col justify-evenly items-end font-heading text-xs">
              <FilterItem filterItems={filterItems} />
            </div>
          </div>
          <div className="bg-light-grey dark:bg-dark-grey p-2 rounded-md min-h-96 overflow-y-scroll">
            <div className=" p-4 flex flex-col gap-4">
              <p className="font-heading flex justify-between items-center">
                Articles
                <button>
                  <FontAwesomeIcon icon={faSort} />
                </button>
              </p>
              <div className="size-full border border-[green] min-h-96 -t-white flex flex-row items-center justify-between">
                {hasSavedItems ? (
                  <div>
                    <div className="first:border-t-[1px] pt-4 bg-light-grey dark:bg-dark-grey text-xl">
                      Jones to fight Namajunas in 2024
                    </div>
                    <button>
                      <FontAwesomeIcon icon={faEllipsisV} />
                    </button>
                  </div>
                ) : (
                  <div className="font-heading text-xl size-full text-center opacity-20">
                    No Saved Items
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div>
        <h1 className="text-xl font-heading">[User]&apos;s Dashboard</h1>
      </div>
      <div className={`grid grid-rows-${sections.length} `}>
        <Widget label={sections.filter((item) => item.title)} />
      </div>
    </>
  );
};

export default DashboardHome;
