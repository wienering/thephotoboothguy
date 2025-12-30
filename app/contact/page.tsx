import type { Metadata } from 'next';
import ContactContent from './ContactContent';
import SchemaMarkup from '@/components/SchemaMarkup';
import { contactPageSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Book Photo Booth Rental Toronto | Contact The Photobooth Guy',
  description: 'Book your photo booth rental for Toronto, Mississauga, Brampton, Vaughan, or Markham events. Call 647-378-5332 or email contact@thephotoboothguy.ca. Professional DSLR cameras, instant prints, and exceptional service.',
  keywords: 'contact photo booth rental Toronto, book photo booth GTA, photo booth inquiry, wedding photo booth booking, corporate event photo booth Toronto',
  alternates: {
    canonical: 'https://thephotoboothguy.ca/contact',
  },
};

export default function Contact() {
  return (
    <>
      <SchemaMarkup schema={contactPageSchema} />
      <ContactContent />
    </>
  );
}
