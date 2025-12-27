import type { Metadata } from 'next';
import TemplatesContent from './TemplatesContent';

export const metadata: Metadata = {
  title: 'Custom Photo Templates - The Photo Booth Guy',
  description: 'Personalized photo booth templates for your event. Custom designs, color matching, logo integration, and theme customization. Perfect templates for weddings, corporate events, and celebrations.',
  keywords: 'photo booth templates, custom photo templates, event templates, photo booth design, Toronto',
};

export default function Templates() {
  return <TemplatesContent />;
}

