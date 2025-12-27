import type { Metadata } from 'next';
import ContactContent from './ContactContent';

export const metadata: Metadata = {
  title: 'Contact Us - The Photo Booth Guy | Toronto Photo Booth Rental',
  description: 'Get in touch with The Photo Booth Guy for your event. Call 647-378-5332 or email info@photoboothguys.ca. Serving Toronto and surrounding areas.',
  keywords: 'contact photo booth rental, Toronto photo booth, event booking, photo booth inquiry',
};

export default function Contact() {
  return <ContactContent />;
}
