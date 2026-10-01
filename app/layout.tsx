import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";
import RootLayoutClient from "@/components/layout/RootLayoutClient";
import { siteMetadata } from "@/data/contentData";

export const metadata: Metadata = {
  title: siteMetadata.title,
  description: siteMetadata.description,
  metadataBase: new URL("https://forgeautomotive.co.uk"),
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.url,
    siteName: siteMetadata.siteName,
    locale: siteMetadata.locale,
    type: "website",
    images: [
      {
        url: "/images/cta.jpg",
        width: 1200,
        height: 630,
        alt: "Forge Automotive — bespoke luxury builds",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: ["/images/cta.jpg"],
  },
  appleWebApp: {
    title: "Forge",
    capable: true,
    statusBarStyle: "default",
  },
};

export const viewport: Viewport = {
  themeColor: "#0c0c0c",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB">
      <body className="bg-[#0c0c0c] text-[#f2f1ed] antialiased">
        <RootLayoutClient>{children}</RootLayoutClient>
      </body>
    </html>
  );
}
