import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import PrelineScriptWrapper from "@/components/PrelineScriptWrapper";
import Header from "@/components/header/header";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "PT Indo Cipta Kontraktor",
  description: "Perusahaan Kontraktor Pertambangan Nikel Terpercaya di Indonesia",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo/logoick.ico" />
      </head>
      <body className={`${poppins.variable} antialiased overflow-y-scroll`}>
        <Header />
        <PrelineScriptWrapper />
        {children}
      </body>
    </html>
  );
}
