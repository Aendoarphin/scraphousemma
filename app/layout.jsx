"use client";
// Next
import { Poppins } from "next/font/google";
// Styles
import "./globals.scss";
// Providers
import { Providers } from "./providers";
import { UserProvider } from "@auth0/nextjs-auth0/client";
// Components
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
// Font Awesome config
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { usePathname } from "next/navigation";
config.autoAddCss = false;

const poppins = Poppins({ weight: "300", subsets: ["latin"] });

/**
 * The application root.
 */
export default function RootLayout({ children }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<UserProvider>
				<body
					className={`flex flex-col justify-between min-h-screen ${
						["/", "/about"].includes(usePathname()) ? "h-screen" : ""
					} ${poppins.className}
`}
				>
					<Providers>
						<Nav />
						<main>{children}</main>
						<Footer />
					</Providers>
				</body>
			</UserProvider>
		</html>
	);
}
