import type { Metadata } from 'next';
import { definePageMetadata } from '@/lib/page-metadata';
import ContactContent from './ContactContent';
import SchemaMarkup from '@/components/SchemaMarkup';
import { contactPageSchema } from '@/lib/schema';

export const metadata: Metadata = definePageMetadata({
  title: "Book Photo Booth Rental Toronto | Contact The Photobooth Guy",
  description: "Book photo booth rental for Toronto & GTA. Call 647-378-5332 or email contact@thephotoboothguy.ca. DSLR cameras, instant prints, professional service.",
  keywords: "contact photo booth rental Toronto, book photo booth GTA, photo booth inquiry, wedding photo booth booking, corporate event photo booth Toronto",
  canonicalUrl: 'https://www.thephotoboothguy.ca/contact',
});

export default function Contact() {
  return (
    <>
      <SchemaMarkup schema={contactPageSchema} />
      <ContactContent />
    </>
  );
}
