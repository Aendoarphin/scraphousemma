// Next
import { Nunito_Sans } from "next/font/google";
// Styles
import "./globals.scss";
// Light/Dark Mode
import { Providers } from "./providers";
// Components
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
// Font Awesome config
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const nunitoSans = Nunito_Sans({ subsets: ["latin"] });

/**
 * The application root.
 */
export default function RootLayout({ children }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className="flex flex-col min-h-screen">
				<div className="">
					<Providers>
						<Nav />
						<main>{children}</main>
					</Providers>
				</div>
				<Footer />
			</body>
		</html>
	);
}
