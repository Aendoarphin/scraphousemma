import DashboardNav from "@/components/layout/DashboardNav";

export default function DashboardLayout({ children }) {
	return (
		<div className="overflow-hidden border border-[green] pt-24 p-8 h-screen flex flex-col gap-4 sm:p-20 sm:pt-24">
			<DashboardNav/>
      {children}
    </div>
	);
}
