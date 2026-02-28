import type { Metadata } from 'next';
import BackdropsContent from './BackdropsContent';
import SchemaMarkup from '@/components/SchemaMarkup';
import { serviceSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Photo Booth Backdrops - The Photobooth Guy | Toronto',
  description: 'Photo booth backdrop collection for Toronto & GTA. Elegant, themed, modern options. Custom designs for weddings, parties, and corporate events.',
  keywords: 'photo booth backdrops, event backdrops, custom backdrops, Toronto photo booth, backdrop rental',
  alternates: {
    canonical: 'https://www.thephotoboothguy.ca/backdrops',
  },
  openGraph: { url: 'https://www.thephotoboothguy.ca/backdrops' },
};

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
