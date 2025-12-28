import type { Metadata } from 'next';
import ContactContent from './ContactContent';
import SchemaMarkup from '@/components/SchemaMarkup';
import { contactPageSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Contact Us - The Photobooth Guy | Toronto Photo Booth Rental',
  description: 'Get in touch with The Photobooth Guy for your event. Call 647-378-5332 or email info@photoboothguys.ca. Serving Toronto and surrounding areas.',
  keywords: 'contact photo booth rental, Toronto photo booth, event booking, photo booth inquiry',
};

export default function Contact() {
  return (
    <>
      <SchemaMarkup schema={contactPageSchema} />
      <ContactContent />
    </>
  );
}
