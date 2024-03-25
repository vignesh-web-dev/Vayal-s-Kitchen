import "./globals.css";
import { Bebas_Neue } from "next/font/google";
import { Providers } from "./Redux/Providers";
import Head from "next/head";
import Floating from "@/Components/FloatingCTA/page";
import Popup from "@/Components/Popup/page";

export const metadata = {
  metadataBase: new URL("https://vayals-restaurant.vercel.app"),
  title: {
    default: "Vayal's Indian Kitchen - Phoenix | Vayals Food Truck",
    template: "Vayal's Indian Kitchen • %s",
  },
  description:
    "Vayal's Indian Kitchen is a Food Truck that has been proudly serving the Phoenix area and beyond since 2022. Since then, our mission has been to provide high-quality, authentic (home feel like) food for all those that wish to combine fun and bring back memories of our hometown and home cooked food.",
  
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon-16x16.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180×180",
      url: "/apple-touch-icon.png",
    },
  ],
  openGraph: {
    title: "Vayal's Indian Kitchen - Phoenix | Vayals Food Truck",
    description:
      "Vayals Indian Kitchen is a Food Truck that has been proudly serving the Phoenix area and beyond since 2022. Since then, our mission has been to provide high-quality, authentic (home feel like) food for all those that wish to combine fun and bring back memories of our hometown and home cooked food.",
    type: "website",
    locale: "en_US",
    url: "https://vayals-restaurant.vercel.app",
    siteName: "Vayal's Indian Kitchen",
    images: "/cover.png",
  },
};
const bebas_neue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Providers>
        <body className={` ${bebas_neue.className}`}>
          {children}
          <Floating></Floating>
          <Popup></Popup>
        </body>
      </Providers>
    </html>
  );
}
