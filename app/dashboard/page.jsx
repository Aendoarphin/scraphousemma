"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import SavedItems from "@/components/dashboard/SavedItems";
import User from "@/components/dashboard/User";

const DashboardHome = () => {

	const { user, isLoading } = useUser();

	return (
		<>
			{!isLoading && <div className="h-full flex flex-col gap-4 rounded-md">
				<div className="size-full">
					<User userName={user.name} image={user.picture} />
					<SavedItems />
				</div>
			</div>}
		</>
	);
};

export default DashboardHome;
