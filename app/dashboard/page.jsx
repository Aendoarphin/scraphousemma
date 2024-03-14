"use client";
import Form from "@/components/ui/Form";
import SavedItems from "@/components/ui/dashboard/SavedItems";
import User from "@/components/ui/dashboard/User";

const DashboardHome = () => {
	return (
		<>
			<div className="h-full flex flex-col justify-center gap-4 items-start">
				{false ? (
					<div className="size-full">
						<User />
						<SavedItems />
					</div>
				) : (
					<div className="flex flex-row p-4 border size-full items-center justify-evenly">
						<Form type={"login"} />
						<p>OR</p>
						<Form type={"register"} />
					</div>
				)}
			</div>
		</>
	);
};

export default DashboardHome;
