import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import NextTopLoader from "nextjs-toploader";
import FloatingButton from "@/components/FloatingButton/FloatingButton";
import {
  Zilla_Slab,
  Open_Sans,
  League_Spartan,
  Lato,
  Jost,
  Heebo,
  Inter,
} from "next/font/google";

import Header3 from "@/components/Header/Header3";
import { ToastContainer } from "react-toastify";
import {
  defaultDescription,
  defaultTitle,
  FRONTEND_URL,
  GraphImage,
} from "@/utils/utilsimp";
import LenisWrapper from "@/components/LenisWrapper";
import AosComp from "@/components/AOS/Aos";

export const LatoFonts = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: defaultTitle,
  description: defaultDescription,
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: `${FRONTEND_URL}`,
    type: "website",
    images: [
      {
        url: `${FRONTEND_URL}${GraphImage}`,
        width: 1200,
        height: 630,
        alt: defaultTitle,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: [`${GraphImage}`],
  },
  alternates: {
    canonical: `${FRONTEND_URL}`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={LatoFonts.className}>
        {/* <LenisWrapper> */}
        <AosComp />
        <NextTopLoader showSpinner={false} easing="ease" color={"#f88e4f"} />
        {/* <AnnouncementBar /> */}
        <Header3 />
        {children}
        <ToastContainer />
        <FloatingButton />
        <Footer />
        {/* </LenisWrapper> */}
      </body>
    </html>
  );
}
