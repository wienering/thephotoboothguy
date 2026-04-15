import type { Metadata } from 'next';
import { definePageMetadata } from '@/lib/page-metadata';
import QuoteContent from './QuoteContent';

export const metadata: Metadata = definePageMetadata({
  title: "Get a Photo Booth Quote | The Photobooth Guy",
  description: "Get an instant photo booth quote for Toronto and the GTA. Packages from $550. Choose your hours and add-ons.",
  canonicalUrl: 'https://www.thephotoboothguy.ca/quote',
});

export default function QuotePage() {
  return <QuoteContent />;
}
