import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SchemaMarkup from "@/components/SchemaMarkup";
import ClarityProvider from "@/components/ClarityProvider";
import { organizationSchema } from "@/lib/schema";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Photo Booth Rental Toronto & GTA | The Photobooth Guy",
  description: "Photo booth rental in Toronto & GTA. DSLR cameras, instant prints, custom templates. Weddings, corporate events, parties. Packages from $550.",
  keywords: "photo booth rental, Toronto, GTA, Mississauga, Brampton, Vaughan, Markham, wedding photo booth, corporate photo booth, event photography, instant prints, DSLR camera, professional attendant",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Photo Booth Rental Toronto & GTA | The Photobooth Guy",
    description: "Photo booth rental in Toronto & GTA. DSLR cameras, instant prints, custom templates. Weddings, corporate events, parties. Packages from $550.",
    url: "https://www.thephotoboothguy.ca",
    siteName: "The Photobooth Guy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Photo Booth Rental Toronto & GTA | The Photobooth Guy",
    description: "Photo booth rental in Toronto & GTA. DSLR cameras, instant prints, custom templates. Weddings, corporate events, parties. Packages from $550.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <ClarityProvider />
        <SchemaMarkup schema={organizationSchema} />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
