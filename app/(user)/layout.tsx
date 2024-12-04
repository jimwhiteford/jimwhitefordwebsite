import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../app/globals.css";
import Header from "../components/Header";
import Banner from "../components/Banner";
import { VisualEditing } from "next-sanity";
import { draftMode } from "next/headers";
import { GoogleAnalytics } from "@next/third-parties/google";
import NavBar from "../components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Jim Whiteford Homesteading",
    template: "%s - The Blog",
  },
  description: "Welcome to my blog of passions and interests.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className="max-w-7xl mx-auto">
        {draftMode().isEnabled && (
          <a
            className="fixed right-0 bottom-0 bg-blue-500 text-white p-4 m-4"
            href="/api/draft-mode/disable"
          >
            Disable preview mode
          </a>
        )}
        <Header />
        <NavBar />
        {/* <Banner /> */}
        {children}
        {draftMode().isEnabled && <VisualEditing />}
      </body>
      <GoogleAnalytics gaId="G-K30J651RKJ" />
    </html>
  );
}
