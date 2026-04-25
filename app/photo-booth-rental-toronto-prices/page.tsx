import type { Metadata } from "next";
import { definePageMetadata } from "@/lib/page-metadata";
import SchemaMarkup from "@/components/SchemaMarkup";
import { faqSchema, serviceSchema } from "@/lib/schema";
import PricingPageContent from "./PricingPageContent";

const pricingFaq = [
  {
    question: "Are There Hidden Fees on Top of the Package Price?",
    answer:
      "Our listed packages are for the booth service as described, including the attendant, prints on your template, backdrops, props, and digital guest delivery. If your venue is outside our normal service area, travel may apply: ask at booking so we can quote it. We do not add a surprise setup fee on top of a confirmed package for standard Toronto and GTA work.",
  },
  {
    question: "Why Is One Company Cheaper Than Your Rates Online?",
    answer:
      "Some options use tablet-only photos, or drop the attendant, or only cover a short part of the night. We price for a full staffed booth, pro capture, and instant prints for the full hours you book. If your priority is a different format, you can still compare, but the service is not always the same thing under a similar headline.",
  },
  {
    question: "What If I Need More or Less Time?",
    answer:
      "Packages are 2, 3, or 4 hours. If you are between lengths, the middle tier is usually the best value. If you are not sure, tell us your guest count and schedule and we can suggest a fit.",
  },
];

export const metadata: Metadata = definePageMetadata({
  title: "Photo Booth Rental Toronto Prices | Packages from $550",
  description:
    "Clear photo booth rental Toronto prices: Essential $550 (2h), Signature $750 (3h), Premium $950 (4h). Same features in every package. No hidden fees. Book or get a quote.",
  keywords:
    "photo booth pricing Toronto, photo booth rental Toronto cost, photo booth prices GTA, wedding photo booth cost Toronto, Toronto photo booth packages",
  canonicalUrl: "https://www.thephotoboothguy.ca/photo-booth-rental-toronto-prices",
});

export default function PhotoBoothRentalTorontoPrices() {
  return (
    <>
      <SchemaMarkup
        schema={[
          serviceSchema(
            "Photo Booth Rental Toronto Prices",
            "Published photo booth package pricing for Toronto and GTA. Essential, Signature, and Premium include the same service; price varies by rental duration. Professional attendant, DSLR, instant custom prints, backdrops, props, digital guest delivery, and post-event gallery.",
            "$550"
          ),
          faqSchema(pricingFaq),
        ]}
      />
      <PricingPageContent />
    </>
  );
}
