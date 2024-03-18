"use client";
import { ThemeProvider } from "next-themes";
/**
 * A component that wraps the application with theme provider.
 * @param {React.ReactNode} props.children - The child elements to be wrapped by the theme provider.
 * @returns {JSX.Element} A JSX element representing the wrapped application with theme provider.
 */
export function Providers({ children }) {
	return (
		<ThemeProvider attribute="class">
			{children}
		</ThemeProvider>
	);
}
