import type { Metadata } from 'next';
import HomeContent from './HomeContent';
import SchemaMarkup from '@/components/SchemaMarkup';
import { localBusinessSchema, aggregateRatingSchema, reviewSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'The Photobooth Guy - Toronto\'s Premier Photo Booth Rental',
  description: 'Professional photo booth rental services in Toronto. Premium equipment, custom templates, stunning backdrops, and exceptional service for your events. Packages starting at $550.',
  keywords: 'photo booth rental Toronto, event photography, photo booth hire, party rental, wedding photo booth',
};

export default function Home() {
  const reviews = [
    reviewSchema('Sherry', 'Dennis was extremely prompt and polite with answering any questions on the phone or via email. The booking process felt easy and the service was exceptional.', 5),
    reviewSchema('Rachael', 'Great company to work with. They responded to every message very quickly and answered all of our questions. Our guests had a great experience at our wedding! Highly recommend!', 5),
    reviewSchema('Cyrus', 'Dennis\'s team was absolutely fantastic! The team was extremely responsive, competitively priced, and very professional. It was a pleasure being part of our event.', 5),
  ];

  return (
    <>
      <SchemaMarkup schema={[localBusinessSchema, aggregateRatingSchema(5, 50), ...reviews]} />
      <HomeContent />
    </>
  );
}
