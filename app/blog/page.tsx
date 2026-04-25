import type { Metadata } from "next";
import Link from "next/link";
import { definePageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = definePageMetadata({
  title: "Blog | The Photobooth Guy | Toronto Photo Booth",
  description:
    "Practical updates on photo booth rental, Toronto weddings, pricing, and what to expect at your event.",
  keywords: "photo booth blog Toronto, wedding photo booth advice, photo booth rental tips",
  canonicalUrl: "https://www.thephotoboothguy.ca/blog",
});

export default function BlogIndex() {
  return (
    <div className="min-h-screen bg-white">
      <div className="w-full max-w-3xl mx-auto px-6 sm:px-8 lg:px-12 py-24">
        <h1 className="text-4xl md:text-5xl font-light text-black mb-4">Blog</h1>
        <p className="text-lg text-gray-600 font-light mb-12">
          Short posts on pricing, planning, and what is included in our service.
        </p>
        <ul className="space-y-6">
          <li className="border-b border-gray-200 pb-6">
            <Link
              href="/blog/how-much-does-a-wedding-photo-booth-cost-in-toronto"
              className="text-xl font-light text-black hover:underline"
            >
              How Much Does a Wedding Photo Booth Cost in Toronto?
            </Link>
            <p className="text-sm text-gray-500 mt-2">April 25, 2026</p>
            <p className="text-gray-600 font-light mt-2">
              A straight answer on our published packages, what moves price, and how to budget.
            </p>
          </li>
        </ul>
        <p className="mt-12">
          <Link
            href="/wedding-photo-booth-toronto"
            className="text-black underline hover:no-underline"
          >
            Toronto wedding photo booth
          </Link>{" "}
          ·{" "}
          <Link
            href="/photo-booth-rental-toronto-prices"
            className="text-black underline hover:no-underline"
          >
            Photo booth pricing in Toronto
          </Link>
        </p>
      </div>
    </div>
  );
}
