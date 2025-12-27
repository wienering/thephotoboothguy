import type { Metadata } from 'next';
import EquipmentContent from './EquipmentContent';

export const metadata: Metadata = {
  title: 'Professional Photo Booth Equipment - The Photo Booth Guy',
  description: 'State-of-the-art photo booth equipment including professional DSLR cameras, dye-sublimation printers, and touchscreen interfaces. Premium technology for premium results.',
  keywords: 'photo booth equipment, professional cameras, photo booth technology, Toronto photo booth rental',
};

export default function Equipment() {
  return <EquipmentContent />;
}
