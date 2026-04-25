import type { Metadata } from "next";
import { definePageMetadata } from "@/lib/page-metadata";
import ServiceLocationPage, {
  ServiceLocationData,
} from "@/components/ServiceLocationPage";
import SchemaMarkup from "@/components/SchemaMarkup";
import { faqSchema, serviceSchema } from "@/lib/schema";
import { venues, standardPackages } from "@/lib/sil-data";

export const metadata: Metadata = definePageMetadata({
  title: "Toronto Photo Booth Rental from $550 | Weddings & Corporate",
  description: "Toronto photo booth rental: DSLR quality, instant prints, custom templates, pro attendant. Weddings, corporate & parties. GTA-wide. Book or call 647-378-5332.",
  keywords: "photo booth rental Toronto, Toronto photo booth, photo booth hire Toronto, wedding photo booth Toronto, corporate photo booth Toronto, instant prints, DSLR camera, professional attendant",
  canonicalUrl: 'https://www.thephotoboothguy.ca/photo-booth-rental-toronto',
});

const pageData: ServiceLocationData = {
  serviceName: "Photo Booth Rental",
  serviceSlug: "photo-booth-rental",
  city: "Toronto",
  heroTitle: "Photo Booth Rental in Toronto",
  heroSubtitle:
    "Weddings, corporate galas, and private parties: instant prints, custom templates, pro lighting, and an on-site attendant. Packages from $550.",
  description:
    "Planning a Toronto wedding, corporate event, or private party? We provide photo booth rental in Toronto and across the GTA: a staffed booth with a DSLR, dye-sublimation instant prints, custom print templates, backdrops, props, and digital delivery to your guests, plus a full gallery after the event. The same inclusions are on every package tier. You choose the hours (Essential 2 hours from $550, Signature 3 hours at $750, Premium 4 hours at $950).\n\nWe work in Toronto and the region often, including at hotels, banquet halls, and private event spaces. We are used to downtown load-ins, coordinating with venue staff, and running a line from cocktail hour through the reception. Our attendants set up, run, and take down the booth on schedule, and the equipment is tested before the doors open.",
  venues: venues.toronto,
  features: [
    {
      icon: "📸",
      title: "Professional DSLR Camera",
      description:
        "Photo booth rental in Toronto. DSLR cameras, instant prints, custom templates. Weddings, corporate events, parties. Serving the GTA.",
    },
    {
      icon: "🖨️",
      title: "Instant Prints",
      description:
        "Photo booth rental in Toronto. DSLR cameras, instant prints, custom templates. Weddings, corporate events, parties. Serving the GTA.",
    },
    {
      icon: "🎨",
      title: "Custom Templates",
      description:
        "Photo booth rental in Toronto. DSLR cameras, instant prints, custom templates. Weddings, corporate events, parties. Serving the GTA.",
    },
    {
      icon: "🎭",
      title: "Backdrop & Props",
      description:
        "Photo booth rental in Toronto. DSLR cameras, instant prints, custom templates. Weddings, corporate events, parties. Serving the GTA.",
    },
    {
      icon: "👤",
      title: "Professional Attendant",
      description:
        "Photo booth rental in Toronto. DSLR cameras, instant prints, custom templates. Weddings, corporate events, parties. Serving the GTA.",
    },
    {
      icon: "📱",
      title: "Digital Copies",
      description:
        "Photo booth rental in Toronto. DSLR cameras, instant prints, custom templates. Weddings, corporate events, parties. Serving the GTA.",
    },
  ],
  packages: standardPackages,
  faqs: [
    {
      question: "How Much Does It Cost to Rent a Photo Booth in Toronto?",
      answer:
        "Photo booth rental in Toronto starts at $550 for our Essential package, which includes 2 hours of service with a professional attendant, instant prints, custom templates, backdrop selection, props, and digital delivery. Our Signature package is $750 for 3 hours, and our Premium package is $950 for 4 hours. All packages include the same high-quality equipment and service - you're just choosing how long you need the photo booth at your Toronto event.",
    },
    {
      question: "What Areas of Toronto Do You Serve for Photo Booth Rentals?",
      answer:
        "We provide photo booth rental services throughout all areas of Toronto including downtown Toronto, North York, Scarborough, Etobicoke, and surrounding neighborhoods. We regularly serve venues like The Liberty Grand, Arcadian Court, Harbour Castle, and many others across the city. If you're planning an event anywhere in the GTA, we can help.",
    },
    {
      question: "Where in Toronto Do You Set Up the Photo Booth?",
      answer:
        "We set up in the area your venue and planner clear for the booth, often a ballroom edge, a pre-reception area, or another spot that does not block emergency exits. You need a level floor for the backdrop and the booth, enough room in front of the camera for small groups, and a short queue space at busy times. We also need a standard 120V outlet within a reasonable distance. At booking we can go over a typical floor plan to share with the venue, but final placement follows their rules and your timeline.",
    },
    {
      question: "How Long Does It Take to Get Photo Booth Prints in Toronto?",
      answer:
        "Our dye-sublimation printer produces high-quality prints in approximately 10-15 seconds. Guests receive their custom printed photos almost immediately after taking their picture, and digital copies are sent to their phones or email instantly. There's no waiting around - your Toronto event guests get their photos right away.",
    },
    {
      question:
        "Can I Customize the Photo Booth Print Template for My Toronto Wedding?",
      answer:
        "Absolutely! We design custom print templates at no additional charge for all Toronto events. Just share your wedding colors, theme, logos, or any design elements you want, and we'll create templates that perfectly match your Toronto wedding. Many couples include their names, wedding date, or a special message on the templates.",
    },
    {
      question:
        "What Type of Camera Do You Use for Photo Booth Rentals in Toronto?",
      answer:
        "We use professional DSLR cameras with high-quality lenses and professional lighting to ensure every photo looks amazing. The equipment is maintained to the highest standards and tested before every Toronto event. You get the same quality you'd expect from a professional photographer, but in a fun, interactive photo booth format.",
    },
    {
      question: "Do You Provide a Photo Booth Attendant for Events in Toronto?",
      answer:
        "Yes! Every photo booth rental in Toronto includes a professional attendant who stays on site for the entire duration of your event. They handle setup, assist guests, troubleshoot any issues, and make sure everything runs smoothly so you can enjoy your celebration without worrying about the photo booth.",
    },
    {
      question:
        "What Backdrop Options Are Available for Photo Booth Rentals in Toronto?",
      answer:
        "We offer a wide variety of backdrop options for Toronto photo booth rentals, from elegant solid colors to sequined backdrops, florals, and custom designs. You can view our backdrops page to see options, or contact us to discuss what would work best for your Toronto event. We can also create custom backdrops if you have something specific in mind.",
    },
  ],
  relatedServices: [
    {
      name: "Wedding Photo Booth Toronto",
      href: "/wedding-photo-booth-toronto",
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
    {
      name: "360 Booth Toronto",
      href: "/360-booth-toronto",
    },
  ],
};

export default function PhotoBoothRentalToronto() {
  return (
    <>
      <SchemaMarkup
        schema={[
          serviceSchema(
            "Photo Booth Rental Toronto",
            "Professional photo booth rental in Toronto with DSLR cameras, instant prints, custom templates, backdrop, props, and professional attendant for weddings, corporate events, and parties.",
            "$550",
          ),
          faqSchema(pageData.faqs),
        ]}
      />
      <ServiceLocationPage data={pageData} />
    </>
  );
}
