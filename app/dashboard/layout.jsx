import DashboardNav from "@/components/layout/DashboardNav";

export default function DashboardLayout({ children }) {
	return (
		<div className="
		overflow-hidden border
		border-[green] 
		pt-24 sm:pt-32 sm:p-20 p-8 md:p-28 lg:p-40
		min-h-screen h-min 
		flex flex-col gap-4">
			<DashboardNav/>
      {children}
    </div>
	);
}
