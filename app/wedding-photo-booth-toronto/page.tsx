import type { Metadata } from "next";
import { definePageMetadata } from "@/lib/page-metadata";
import ServiceLocationPage, {
  ServiceLocationData,
} from "@/components/ServiceLocationPage";
import SchemaMarkup from "@/components/SchemaMarkup";
import { faqSchema, serviceSchema } from "@/lib/schema";
import { venues, standardPackages } from "@/lib/sil-data";

export const metadata: Metadata = definePageMetadata({
  title: "Wedding Photo Booth Toronto | Custom Templates & Prints from $550",
  description:
    "Wedding photo booth Toronto: custom templates with names and date, instant prints, DSLR, attendant, guests love it. Fits cocktail hour through reception. Packages from $550. Book or quote.",
  keywords:
    "wedding photo booth Toronto, photo booth rental for weddings, Toronto wedding photo booth, photo booth rental Toronto, custom template wedding, instant prints wedding",
  canonicalUrl: "https://www.thephotoboothguy.ca/wedding-photo-booth-toronto",
});

const pageData: ServiceLocationData = {
  serviceName: "Wedding Photo Booth",
  serviceSlug: "photo-booth-rental",
  city: "Toronto",
  heroTitle: "Wedding Photo Booth Toronto",
  heroSubtitle:
    "Custom print templates, instant strips, a trained attendant, and a booth that works from cocktail hour to late night. Same packages as our full line, from $550.",
  description:
    "A wedding photo booth should feel on-brand, move quickly when the room is full, and give every guest a print or a digital share. We bring a professional DSLR, dye-sublimation instant prints, and templates designed for your names, date, and colours. A trained attendant stays for your whole booking, runs the line, and handles setup and pack-down around your schedule.\n\nWe often place the booth for the cocktail and reception block so guests hit it on the way in, between courses, and after speeches, right through when the floor opens. If you want a different flow, we align with your planner. Packages match our standard Toronto line: 2, 3, or 4 hours, same inclusions in each tier. See our venue list for spaces we are used to working in, or ask for your specific hall.",
  venues: venues.toronto,
  features: [
    { icon: "📸", title: "Professional DSLR Camera", description: "Placeholder" },
    { icon: "🖨️", title: "Instant Prints", description: "Placeholder" },
    { icon: "🎨", title: "Custom Templates", description: "Placeholder" },
    { icon: "🎭", title: "Backdrop & Props", description: "Placeholder" },
    { icon: "👤", title: "Professional Attendant", description: "Placeholder" },
    { icon: "📱", title: "Digital Copies", description: "Placeholder" },
  ],
  packages: standardPackages,
  faqs: [
    {
      question: "What Is on the Wedding Print Template?",
      answer:
        "We work with you on a layout for 2x6 or 4x6 prints. Most couples add first names, wedding date, a monogram, or a simple graphic that matches the stationery. We send a proof before the day so you can request tweaks.",
    },
    {
      question: "When Should We Run the Booth During the Wedding?",
      answer:
        "Many receptions use the booth from cocktail or early reception through the busy dance block. We stay for the hours you book and keep the line moving. Tell us your rough timeline and we suggest placement in the room relative to the bar, dance floor, and exits.",
    },
    {
      question: "How Many Hours Do We Need?",
      answer:
        "Essential is 2 hours, Signature 3, Premium 4. Bigger guest lists and long receptions usually lean toward 3 or 4 hours. If you are unsure, describe your headcount and we help you size it, without selling you hours you will not use.",
    },
    {
      question: "Is the Attendant Included for the Whole Time?",
      answer:
        "Yes. The attendant sets up, runs the booth, helps guests, and repacks at the end. You are not asking a friend to troubleshoot the printer in a suit.",
    },
    {
      question: "What Does a Wedding Package Cost?",
      answer:
        "As with all our Toronto clients, rates start at $550 for 2 hours (Essential), $750 for 3 (Signature), and $950 for 4 (Premium), with the same inclusions in each. Only the time changes, not the features.",
    },
    {
      question: "How Do We Book or Get a Custom Quote?",
      answer:
        "Use the Get a Quote or Book links on this site with your date and venue, or call 647-378-5332. We confirm availability, package length, and print details through our normal booking process.",
    },
  ],
  relatedServices: [
    {
      name: "Photo Booth Rental Toronto",
      href: "/photo-booth-rental-toronto",
    },
    {
      name: "Photo Booth Pricing (Toronto)",
      href: "/photo-booth-rental-toronto-prices",
    },
    {
      name: "Glam Booth Toronto",
      href: "/glam-booth-toronto",
    },
    {
      name: "Audio Guest Book Toronto",
      href: "/audio-guest-book-toronto",
    },
  ],
};

export default function WeddingPhotoBoothToronto() {
  return (
    <>
      <SchemaMarkup
        schema={[
          serviceSchema(
            "Wedding Photo Booth Toronto",
            "Wedding photo booth in Toronto: custom templates, names and date on prints, instant strips, professional attendant, DSLR, backdrops, props, digital guest delivery, post-event gallery. Packages from $550.",
            "$550",
          ),
          faqSchema(pageData.faqs),
        ]}
      />
      <ServiceLocationPage data={pageData} />
    </>
  );
}
