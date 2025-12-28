import type { Metadata } from 'next';
import TemplatesContent from './TemplatesContent';
import SchemaMarkup from '@/components/SchemaMarkup';
import { serviceSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Custom Photo Templates - The Photobooth Guy',
  description: 'Personalized photo booth templates for your event. Custom designs, color matching, logo integration, and theme customization. Perfect templates for weddings, corporate events, and celebrations.',
  keywords: 'photo booth templates, custom photo templates, event templates, photo booth design, Toronto',
};

export default function Templates() {
  const templatesServiceSchema = serviceSchema(
    'Custom Photo Booth Templates',
    'Personalized photo booth templates for your event. Custom designs, color matching, logo integration, and theme customization. Perfect templates for weddings, corporate events, and celebrations.'
  );

  return (
    <>
      <SchemaMarkup schema={templatesServiceSchema} />
      <TemplatesContent />
    </>
  );
}

