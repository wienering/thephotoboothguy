import type { Metadata } from 'next';
import HomeContent from './HomeContent';
import SchemaMarkup from '@/components/SchemaMarkup';
import { localBusinessWithRatingSchema, reviewSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Photo Booth Rental Toronto | GTA Photo Booth Services | The Photobooth Guy',
  description: 'Professional photo booth rental in Toronto, Mississauga, Brampton, Vaughan, and Markham. DSLR cameras, instant prints, custom templates, backdrop, props, and professional attendant. Serving weddings, corporate events, and parties across the GTA. Packages starting at $550.',
  keywords: 'photo booth rental Toronto, GTA photo booth services, photo booth rental Mississauga, photo booth rental Brampton, photo booth rental Vaughan, photo booth rental Markham, wedding photo booth GTA, corporate photo booth Toronto, instant prints, DSLR camera, professional attendant, custom templates, backdrop, props, digital copies',
  alternates: {
    canonical: 'https://thephotoboothguy.ca',
  },
};

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
