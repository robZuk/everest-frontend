import "./index.css";
import { Providers } from "./providers";
//

import Navbar1 from "../components/Navbar1";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  keywords: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar1 children={children} />

          <Footer />
        </Providers>
      </body>
    </html>
  );
}
