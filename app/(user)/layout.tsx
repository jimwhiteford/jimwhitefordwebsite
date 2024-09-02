import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../app/globals.css";
import Header from "../components/Header";
import Banner from "../components/Banner"
// import BlogList from "../components/BlogList"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Blog",
  description: "Built by Jim Whiteford",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
     <body className={inter.className}>
        <Header />
        <Banner />
        {/* <BlogList posts= /> */}
        {children}
      </body>
    </html>
  );
}
