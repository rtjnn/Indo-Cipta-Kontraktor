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
  title: {
    default: "PT Indo Cipta Kontraktor | Perusahaan Tambang Nikel Indonesia",
    template: "%s | PT Indo Cipta Kontraktor",
  },
  description:
    "PT Indo Cipta Kontraktor adalah perusahaan pertambangan nikel terpercaya di Indonesia dengan layanan profesional dan berpengalaman.",
  keywords: [
    "tambang nikel",
    "perusahaan tambang nikel",
    "kontraktor pertambangan",
    "nickel mining indonesia",
    "PT Indo Cipta Kontraktor",
  ],
  authors: [{ name: "PT Indo Cipta Kontraktor" }],
  creator: "PT Indo Cipta Kontraktor",
  publisher: "PT Indo Cipta Kontraktor",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "PT Indo Cipta Kontraktor",
    description:
      "Perusahaan pertambangan nikel terpercaya di Indonesia.",
    url: "https://indo-cipta-kontraktor-13bf.vercel.app",
    siteName: "PT Indo Cipta Kontraktor",
    images: [
      {
        url: "https://indo-cipta-kontraktor-13bf.vercel.app/logo/logoick1.png",
        width: 1200,
        height: 630,
        alt: "PT Indo Cipta Kontraktor",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PT Indo Cipta Kontraktor",
    description:
      "Perusahaan pertambangan nikel terpercaya di Indonesia.",
    images: ["https://indo-cipta-kontraktor-13bf.vercel.app/logo/logoick1.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <head>
        <link rel="icon" href="/logo/logoick.ico" />
        <meta
          name="google-site-verification"
          content="MLmyth0zVnKaFu_zifsdWceIqrcIzALjJU5HxWyHtHw"
        />
      </head>
      <body className={`${poppins.variable} antialiased overflow-y-scroll`}>
        <Header />
        <PrelineScriptWrapper />
        {children}
      </body>
    </html>
  );
}
