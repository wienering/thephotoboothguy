import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SchemaMarkup from "@/components/SchemaMarkup";
import { organizationSchema } from "@/lib/schema";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Photo Booth Rental Toronto & GTA | The Photobooth Guy",
  description: "Professional photo booth rental services in Toronto, Mississauga, Brampton, Vaughan, and Markham. Premium DSLR cameras, instant prints, custom templates, stunning backdrops, and exceptional service for weddings, corporate events, and parties.",
  keywords: "photo booth rental, Toronto, GTA, Mississauga, Brampton, Vaughan, Markham, wedding photo booth, corporate photo booth, event photography, instant prints, DSLR camera, professional attendant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <SchemaMarkup schema={organizationSchema} />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
