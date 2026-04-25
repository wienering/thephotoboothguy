import type { Metadata } from "next";
import Link from "next/link";
import { definePageMetadata } from "@/lib/page-metadata";
import SchemaMarkup from "@/components/SchemaMarkup";
import { blogPostingSchema } from "@/lib/schema";

const CANON =
  "https://www.thephotoboothguy.ca/blog/how-much-does-a-wedding-photo-booth-cost-in-toronto";
const PUBLISHED = "2026-04-25";

export const metadata: Metadata = definePageMetadata({
  title: "How Much Does a Wedding Photo Booth Cost in Toronto? | The Photobooth Guy",
  description:
    "Wedding photo booth cost in Toronto: our published packages run from $550 to $950 (2 to 4 hours) with the same inclusions. What affects the total and how to budget.",
  keywords:
    "wedding photo booth cost Toronto, photo booth price wedding Toronto, how much is a photo booth Toronto, wedding photo booth packages Toronto",
  canonicalUrl: CANON,
});

export default function BlogWeddingBoothCostToronto() {
  return (
    <>
      <SchemaMarkup
        schema={blogPostingSchema({
          headline: "How Much Does a Wedding Photo Booth Cost in Toronto?",
          description:
            "A clear look at The Photobooth Guy package pricing for Toronto weddings, what changes the number, and how to line it up in your budget.",
          url: CANON,
          datePublished: PUBLISHED,
        })}
      />
      <article className="min-h-screen bg-white">
        <div className="w-full max-w-3xl mx-auto px-6 sm:px-8 lg:px-12 py-24">
          <p className="text-sm text-gray-500 font-light mb-4">
            <time dateTime={PUBLISHED}>April 25, 2026</time>
          </p>
          <h1 className="text-4xl md:text-5xl font-light text-black mb-8 leading-tight">
            How Much Does a Wedding Photo Booth Cost in Toronto?
          </h1>

          <p className="text-xl text-gray-800 font-light leading-relaxed mb-8">
            For a staffed booth with a DSLR, instant prints on a custom template, backdrops, props, a
            trained attendant, and digital delivery to your guests, our published line runs from $550
            to $950 at the time of writing, depending on how long you need us on site. That range
            matches our Essential, Signature, and Premium packages, not a separate wedding rate.
          </p>

          <h2 className="text-2xl font-light text-black mt-12 mb-4">What Moves the Number</h2>
          <p className="text-gray-700 font-light leading-relaxed mb-4">
            The main lever is the length of the booking. All three tiers on our site use the same
            equipment and the same inclusions, you are not paying extra to unlock prints or a
            template on the higher row. A longer reception or a very large guest list usually points
            toward 3 or 4 hours so the line does not get cut off before late arrivals.
          </p>
          <p className="text-gray-700 font-light leading-relaxed mb-4">
            Venue logistics can matter for travel, load-in time, and where the booth is placed, but
            our public prices are the same structure for a typical Toronto and GTA wedding. If your
            location is a special case, we tell you that when you get a quote.
          </p>

          <h2 className="text-2xl font-light text-black mt-12 mb-4">How the Market Is Usually Split</h2>
          <p className="text-gray-700 font-light leading-relaxed mb-4">
            You will see a wide range online. Shorter or unattended options can sit at the low end. A
            full service booth with a host and instant strips for a full block of the night is more
            often in a mid to upper band. Our tiers are in that mid band with everything listed
            up front, not a long list of add-ons for core items.
          </p>

          <h2 className="text-2xl font-light text-black mt-12 mb-4">What Is Included in Our Packages</h2>
          <p className="text-gray-700 font-light leading-relaxed mb-4">
            On every published tier you get: professional attendant on site, physical prints on a
            custom 2x6 or 4x6 template, backdrop selection, props, digital image delivery to guests
            by SMS or email, and a full digital gallery after the event. That is the same whether you
            are booking a wedding, a corporate event, or a private party.{" "}
            <Link
              href="/photo-booth-rental-toronto-prices"
              className="text-black underline hover:no-underline"
            >
              See the full table on our photo booth pricing in Toronto
            </Link>{" "}
            page.
          </p>

          <h2 className="text-2xl font-light text-black mt-12 mb-4">How to Line It Up in a Wedding Budget</h2>
          <p className="text-gray-700 font-light leading-relaxed mb-4">
            Treat the booth like any other time-based vendor: you are buying coverage for the hours
            when guests are most likely to use it, usually from part of the reception through the
            dance floor. If the rest of the line item list is set, the choice between 2, 3, and 4
            hours is the main budget call on our side.
          </p>
          <p className="text-gray-700 font-light leading-relaxed mb-4">
            For a wedding first pass on placement and print design, the{" "}
            <Link
              href="/wedding-photo-booth-toronto"
              className="text-black underline hover:no-underline"
            >
              Toronto wedding photo booth
            </Link>{" "}
            page is the right next step. If you know your date,{" "}
            <Link href="/book" className="text-black underline hover:no-underline">
              book
            </Link>{" "}
            or{" "}
            <Link href="/quote" className="text-black underline hover:no-underline">
              request a quote
            </Link>{" "}
            and we confirm availability and your hours.
          </p>

          <p className="text-sm text-gray-500 font-light mt-12">
            <Link href="/blog" className="text-black underline hover:no-underline">
              Back to blog
            </Link>
          </p>
        </div>
      </article>
    </>
  );
}
