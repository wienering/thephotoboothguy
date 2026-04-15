import type { Metadata } from 'next';
import { definePageMetadata } from '@/lib/page-metadata';
import HomeContent from './HomeContent';
import SchemaMarkup from '@/components/SchemaMarkup';
import { localBusinessWithRatingSchema, reviewSchema } from '@/lib/schema';

export const metadata: Metadata = definePageMetadata({
  title: "Photo Booth Rental Toronto & GTA | The Photobooth Guy",
  description: "Photo booth rental in Toronto & GTA. DSLR cameras, instant prints, custom templates. Weddings, corporate events, parties. Packages from $550.",
  keywords: "photo booth rental Toronto, GTA photo booth services, photo booth rental Mississauga, photo booth rental Brampton, photo booth rental Vaughan, photo booth rental Markham, wedding photo booth GTA, corporate photo booth Toronto, instant prints, DSLR camera, professional attendant, custom templates, backdrop, props, digital copies",
  canonicalUrl: 'https://www.thephotoboothguy.ca',
});

export default function Home() {
  const reviews = [
    reviewSchema('Sherry', 'Dennis was extremely prompt and polite with answering any questions on the phone or via email. The booking process felt easy and the service was exceptional.', 5),
    reviewSchema('Rachael', 'Great company to work with. They responded to every message very quickly and answered all of our questions. Our guests had a great experience at our wedding! Highly recommend!', 5),
    reviewSchema('Cyrus', "Dennis's team was absolutely fantastic! The team was extremely responsive, competitively priced, and very professional. It was a pleasure being part of our event.", 5),
  ];

  return (
    <>
      <SchemaMarkup schema={[localBusinessWithRatingSchema(5, 50), ...reviews]} />
      <HomeContent />
    </>
  );
}
