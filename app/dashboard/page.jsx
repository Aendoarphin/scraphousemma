"use client";
import ItemFilter from "@/components/ui/ItemFilter";
// Data
import { dashboardHomePanels } from "@/constants";

const DashboardHome = () => {
	const sections = dashboardHomePanels || [];

	const Widget = () => {
		return (
			<>
				<div className="flex flex-col gap-4">
					<div className="flex flex-row justify-between">
						<h1 className="font-heading text-xl self-center">
							Your Saved Items
						</h1>
						<div className="flex flex-col justify-evenly items-end font-heading text-xs">
							<ItemFilter/>
						</div>
					</div>
					<div className="bg-light-grey dark:bg-dark-grey p-4 rounded-md min-h-96">
						<div className="border border-main h-full"></div>
					</div>
				</div>
			</>
		);
	};

	return (
		<>
			<div>
				<h1 className="text-xl">[User]&apos;s Dashboard</h1>
			</div>
			<div className={`grid grid-rows-${sections.length} `}>
				<Widget label={sections.filter((item) => item.title)} />
			</div>
		</>
	);
};

export default DashboardHome;
