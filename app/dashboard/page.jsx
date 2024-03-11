"use client";
import SavedItems from "@/components/ui/dashboard/SavedItems";
import { faUserAlt, faUserLargeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DashboardHome = () => {
  return (
    <>
      <h1 className="text-xl font-heading">[User]&apos;s Dashboard</h1>
      <div className="flex flex-col lg:flex-row justify-center gap-4">
        <div className="flex flex-col h-full min-w-96 w-full bg-dark-grey rounded-md p-4">
          <FontAwesomeIcon icon={faUser}/>
        </div>
        <SavedItems />
      </div>
    </>
  );
};

export default DashboardHome;
