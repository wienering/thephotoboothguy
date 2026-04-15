import type { Metadata } from 'next';
import { definePageMetadata } from '@/lib/page-metadata';
import BackdropsContent from './BackdropsContent';
import SchemaMarkup from '@/components/SchemaMarkup';
import { serviceSchema } from '@/lib/schema';

export const metadata: Metadata = definePageMetadata({
  title: "Photo Booth Backdrops Toronto & GTA | Sequin, Floral, Custom",
  description: "Browse photo booth backdrops for Toronto & GTA events: sequin, floral, modern, and custom-print options for weddings, parties, and corporate. See what pairs with our booth rental.",
  keywords: "photo booth backdrops, event backdrops, custom backdrops, Toronto photo booth, backdrop rental",
  canonicalUrl: 'https://www.thephotoboothguy.ca/backdrops',
});

export default function Backdrops() {
  const backdropsServiceSchema = serviceSchema(
    'Photo Booth Backdrop Rental',
    'Stunning backdrop collection for photo booths. Elegant, fun, themed, and modern backdrops. Custom backdrop design available. Perfect for weddings, parties, and corporate events in Toronto.'
  );

  return (
    <>
      <SchemaMarkup schema={backdropsServiceSchema} />
      <BackdropsContent />
    </>
  );
}
