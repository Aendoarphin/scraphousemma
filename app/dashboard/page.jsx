"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import SavedItems from "@/components/dashboard/SavedItems";
import DashboardOptions from "@/components/dashboard/DashboardOptions";

const DashboardHome = () => {

	const { user, isLoading } = useUser();

	return (
		<>
			{!isLoading && <div className="h-full flex flex-col gap-4 rounded-md">
				<div className="size-full">
					<DashboardOptions />
					<SavedItems />
				</div>
			</div>}
		</>
	);
};

export default DashboardHome;
