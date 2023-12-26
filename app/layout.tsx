import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ram Kole | Portfolio",
  description: "a front end dev with 7 years into ReactJs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} sm:pt-36 bg-gray-50 text-gray-950 relative`}
      >
        <div className="bg-[#06b6d4] absolute top[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] -z-10 sm:w-[68.75rem]"></div>
        <div className="bg-[#fef2f2] absolute top[-6rem] right-[11rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] -z-10 sm:w-[68.75rem]"></div>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
