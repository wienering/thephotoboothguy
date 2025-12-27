import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "The Photo Booth Guy - Toronto's Premier Photo Booth Rental",
  description: "Professional photo booth rental services in Toronto. Premium equipment, custom templates, stunning backdrops, and exceptional service for your events.",
  keywords: "photo booth rental, Toronto, event photography, photo booth hire, party rental",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navigation />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
