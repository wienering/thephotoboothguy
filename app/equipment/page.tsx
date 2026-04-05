import type { Metadata } from 'next';
import EquipmentContent from './EquipmentContent';
import SchemaMarkup from '@/components/SchemaMarkup';
import { serviceSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Photo Booth Equipment: DSLR, Prints & Lighting | Toronto GTA',
  description:
    'What we bring: professional DSLR booths, dye-sublimation printers, studio-style lighting, and touchscreens—servicing Toronto & GTA weddings, corporate, and parties.',
  keywords: 'photo booth equipment Toronto, professional DSLR camera, dye-sublimation printer, photo booth technology, professional lighting, Toronto photo booth rental, GTA photo booth equipment',
  alternates: {
    canonical: 'https://www.thephotoboothguy.ca/equipment',
  },
  openGraph: { url: 'https://www.thephotoboothguy.ca/equipment' },
};

export default function Equipment() {
  const equipmentServiceSchema = serviceSchema(
    'Professional Photo Booth Equipment Rental',
    'State-of-the-art photo booth equipment including professional DSLR cameras, dye-sublimation printers, and touchscreen interfaces. Premium technology for premium results.'
  );

  return (
    <>
      <SchemaMarkup schema={equipmentServiceSchema} />
      <EquipmentContent />
    </>
  );
}
