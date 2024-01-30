import { Nunito_Sans } from "next/font/google";
import "./globals.scss";

// Light/Dark Mode
import { Providers } from "./providers";

// Components
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

// Font Awesome config
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

// Components

const nunitoSans = Nunito_Sans({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="border border-[purple]">
        <Providers>
          <Nav />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
