import { Inter, Exo } from "next/font/google";
import "./globals.css";

const inter = Exo({ subsets: ["latin"] });

export const metadata = {
  title: "Bulk Email Sender",
  description: "Ignition",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} m-5`}>
        {/* <NavBar /> */}
        <div className="max-w-4xl mx-auto tracking-wide my-5">{children}</div>
      </body>
    </html>
  );
}
