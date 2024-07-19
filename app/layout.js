import { Roboto,Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const roboto = Roboto({ subsets: ["latin"], weight: ['300', '400'] });
const poppins = Poppins({ subsets: ['latin'], weight: ['300'] })

export const metadata = {
  title: "Blog Sphere",
  description: "Your one stop platform for finding blogs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
