import type { Metadata } from 'next';
import EquipmentContent from './EquipmentContent';
import SchemaMarkup from '@/components/SchemaMarkup';
import { serviceSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Professional Photo Booth Equipment Toronto & GTA | The Photobooth Guy',
  description: 'Professional photo booth equipment for Toronto, Mississauga, Brampton, Vaughan, and Markham events. DSLR cameras, dye-sublimation printers, professional lighting, touchscreen interfaces, and props. Premium technology for weddings and corporate events across the GTA.',
  keywords: 'photo booth equipment Toronto, professional DSLR camera, dye-sublimation printer, photo booth technology, professional lighting, Toronto photo booth rental, GTA photo booth equipment',
  alternates: {
    canonical: 'https://thephotoboothguy.ca/equipment',
  },
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
