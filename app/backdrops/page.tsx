import type { Metadata } from 'next';
import BackdropsContent from './BackdropsContent';
import SchemaMarkup from '@/components/SchemaMarkup';
import { serviceSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Photo Booth Backdrops - The Photobooth Guy | Toronto',
  description: 'Stunning backdrop collection for photo booths. Elegant, fun, themed, and modern backdrops. Custom backdrop design available. Perfect for weddings, parties, and corporate events in Toronto.',
  keywords: 'photo booth backdrops, event backdrops, custom backdrops, Toronto photo booth, backdrop rental',
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
