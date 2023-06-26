import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BUYBEST",
  description: "Welcome to this store!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-neutral-900 text-white`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
