import DashboardNav from "@/components/layout/DashboardNav";

export default function DashboardLayout({ children }) {
	return (
		<div
			className="
		overflow-hidden
		pt-24 px-8 sm:px-20 md:px-40 lg:px-20 xl:px-[30%]
		flex flex-col h-min"
		>
			<DashboardNav />
			{children}
		</div>
	);
}
