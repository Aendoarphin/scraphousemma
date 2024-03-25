import ItemFilter from "@/components/ui/ItemFilter";
import React from "react";

const PageUfc = () => {
  const gender = "Men";
  const division = "P4P";
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row justify-between">
        <h1 className="font-heading">
          {division}
        </h1>
        <ItemFilter initialValue="Men"/>
      </div>
      <div className="bg-dark-grey p-4 rounded-md">
        ranks
      </div>
      
    </div>
  );
}; // making rankings template

export default PageUfc;
