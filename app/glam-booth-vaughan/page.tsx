import type { Metadata } from 'next';
import ServiceLocationPage, { ServiceLocationData } from '@/components/ServiceLocationPage';
import SchemaMarkup from '@/components/SchemaMarkup';
import { serviceSchema } from '@/lib/schema';
import { venues, glamBoothPackages } from '@/lib/sil-data';

export const metadata: Metadata = {
  title: 'Glam Booth Vaughan | Black and White Kardashian Style Photo Booth | The Photobooth Guy',
  description: 'Kardashian-style black and white glam booth rental in Vaughan. Professional lighting, high-quality prints, and stunning aesthetic for weddings and upscale events. Available at Paradise Convention Centre and premium Vaughan venues.',
  keywords: 'glam booth Vaughan, black and white photo booth Vaughan, Kardashian style photo booth, glamour booth Vaughan, wedding glam booth',
};

const pageData: ServiceLocationData = {
  serviceName: 'Black and White Glam Booth',
  serviceSlug: 'glam-booth',
  city: 'Vaughan',
  heroTitle: 'Glam Booth in Vaughan',
  heroSubtitle: 'Kardashian-style black and white photo booth with professional lighting, elegant backdrop, and high-quality prints for sophisticated Vaughan weddings and upscale events.',
  description: 'Bring Hollywood glamour to your Vaughan event with our black and white glam booth. Inspired by the Kardashian aesthetic, our glam booth features professional lighting to create stunning, magazine-quality photos with timeless black and white styling. Perfect for weddings, corporate galas, and upscale events at Vaughan\'s premier venues. Each setup includes a professional attendant, premium backdrop, high-quality instant prints, props, and digital copies delivered instantly to guests.',
  venues: venues.vaughan,
  features: [
    {
      icon: '✨',
      title: 'Kardashian Aesthetic',
      description: 'Black and white photography with professional lighting that creates the glamorous, high-fashion look popularized by celebrity events.',
    },
    {
      icon: '💡',
      title: 'Professional Lighting',
      description: 'Studio-grade lighting setup designed to flatter every guest and create stunning, magazine-quality photos with perfect contrast.',
    },
    {
      icon: '🖼️',
      title: 'Premium Backdrop',
      description: 'Elegant backdrop options specifically chosen to complement the black and white aesthetic and enhance the glamorous feel.',
    },
    {
      icon: '🖨️',
      title: 'High-Quality Prints',
      description: 'Instant black and white prints on premium photo paper with custom templates that match your event sophistication.',
    },
    {
      icon: '👤',
      title: 'Professional Attendant',
      description: 'Experienced attendant on site to ensure optimal lighting, assist guests, and maintain the glam booth experience.',
    },
    {
      icon: '📱',
      title: 'Digital Copies',
      description: 'All glamour photos sent instantly to guests digitally, plus a complete gallery delivered after your Vaughan event.',
    },
  ],
  packages: glamBoothPackages,
  faqs: [
    {
      question: 'What makes the glam booth different from a regular photo booth?',
      answer: 'Our glam booth features professional studio lighting specifically designed for black and white photography, creating the sophisticated Kardashian-style aesthetic. The lighting setup, backdrop selection, and overall design are curated to produce elegant, magazine-quality photos that stand out from traditional color photo booths.',
    },
    {
      question: 'Are the photos only in black and white?',
      answer: 'Yes, the glam booth specializes in black and white photography to achieve that timeless, glamorous aesthetic. The professional lighting and monochrome styling create stunning, high-contrast photos that look like they belong in a fashion magazine.',
    },
    {
      question: 'Is the glam booth suitable for outdoor Vaughan events?',
      answer: 'The glam booth works best indoors where we can control the lighting environment for optimal results. We regularly set up at Vaughan venues like Paradise Banquet & Convention Centre, The Manor by Peter & Paul\'s, and other premium indoor locations where we can achieve the perfect lighting conditions.',
    },
    {
      question: 'Can we still customize the print templates?',
      answer: 'Absolutely! We design custom black and white print templates that complement the glam aesthetic while incorporating your event details, names, dates, and design elements in an elegant style.',
    },
    {
      question: 'What type of events is the glam booth perfect for?',
      answer: 'The glam booth is ideal for weddings, corporate galas, milestone celebrations, anniversary parties, and any upscale Vaughan event where you want to create a sophisticated, glamorous atmosphere. It\'s particularly popular at high-end venues throughout Vaughan.',
    },
  ],
  relatedServices: [
    {
      name: 'Photo Booth Rental Vaughan',
      href: '/photo-booth-rental-vaughan',
    },
    {
      name: 'Audio Guest Book Vaughan',
      href: '/audio-guest-book-vaughan',
    },
    {
      name: '360 Booth Vaughan',
      href: '/360-booth-vaughan',
    },
  ],
};

export default function GlamBoothVaughan() {
  return (
    <>
      <SchemaMarkup
        schema={serviceSchema(
          'Black and White Glam Booth Vaughan',
          'Kardashian-style black and white glam photo booth rental in Vaughan with professional lighting, premium backdrop, and high-quality prints for weddings and upscale events.',
          '$650'
        )}
      />
      <ServiceLocationPage data={pageData} />
    </>
  );
}

