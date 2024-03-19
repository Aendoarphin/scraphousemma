// Components
import DashboardNav from "@/components/layout/DashboardNav";
/**
 * DashboardLayout component provides a layout structure for the dashboard pages.
 * It includes a navigation widget and renders children components.
 * @param {Object} children - The components to be rendered within the layout.
 * @returns {JSX.Element} The DashboardLayout component.
 */
export default function DashboardLayout({ children }) {
	return (
		<div
			className="
		overflow-hidden
		pt-24 px-8 sm:px-20 md:px-16 lg:px-80
		flex flex-col h-min"
		>
			<DashboardNav />
			{children}
		</div>
	);
}
