"use client";
// Components
import SavedItems from "@/components/dashboard/SavedItems";
import User from "@/components/dashboard/User";
/**
 * 
 * @returns JSX that contains user dashboard content
 */
const DashboardHome = () => {
	return (
		<>
			<div className="h-full flex flex-col justify-center gap-4 items-start rounded-md">
				<div className="size-full">
					<User />
					<SavedItems />
				</div>
			</div>
		</>
	);
};

export default DashboardHome;
