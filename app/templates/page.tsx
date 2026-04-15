import type { Metadata } from 'next';
import { definePageMetadata } from '@/lib/page-metadata';
import TemplatesContent from './TemplatesContent';
import SchemaMarkup from '@/components/SchemaMarkup';
import { serviceSchema } from '@/lib/schema';

export const metadata: Metadata = definePageMetadata({
  title: "Custom Photo Templates - The Photobooth Guy",
  description: "Custom photo booth templates for your event. Personalized designs, logo integration, theme matching. Weddings, corporate events, and celebrations across the GTA.",
  keywords: "photo booth templates, custom photo templates, event templates, photo booth design, Toronto",
  canonicalUrl: 'https://www.thephotoboothguy.ca/templates',
});

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

