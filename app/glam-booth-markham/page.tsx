import type { Metadata } from 'next';
import ServiceLocationPage, { ServiceLocationData } from '@/components/ServiceLocationPage';
import SchemaMarkup from '@/components/SchemaMarkup';
import { serviceSchema } from '@/lib/schema';
import { venues, glamBoothPackages } from '@/lib/sil-data';

export const metadata: Metadata = {
  title: 'Glam Booth Markham | Black and White Kardashian Style Photo Booth | The Photobooth Guy',
  description: 'Kardashian-style black and white glam booth rental in Markham. Professional lighting, high-quality prints, and stunning aesthetic for weddings and upscale events. Available at Paradise Banquet Hall and premium Markham venues.',
  keywords: 'glam booth Markham, black and white photo booth Markham, Kardashian style photo booth, glamour booth Markham, wedding glam booth',
  alternates: {
    canonical: 'https://thephotoboothguy.ca/glam-booth-markham',
  },
};

const pageData: ServiceLocationData = {
  serviceName: 'Black and White Glam Booth',
  serviceSlug: 'glam-booth',
  city: 'Markham',
  heroTitle: 'Glam Booth in Markham',
  heroSubtitle: 'Kardashian-style black and white photo booth with professional lighting, elegant backdrop, and high-quality prints for sophisticated Markham weddings and upscale events.',
  description: 'Markham\'s upscale venues and sophisticated events deserve a photo experience that matches their quality. Our black and white glam booth brings that Kardashian-style elegance to venues like Paradise Banquet Hall and Le Parc, creating timeless photos that look like they belong in a magazine. The professional studio lighting flatters everyone, creating stunning high-contrast images that stand out from regular color photos. Whether you\'re hosting a wedding, corporate gala, or milestone celebration, our glam booth elevates the entire event experience. The monochrome aesthetic creates a classic, sophisticated look that works beautifully for any type of celebration in Markham.',
  venues: venues.markham,
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
      description: 'All glamour photos sent instantly to guests digitally, plus a complete gallery delivered after your Markham event.',
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
      question: 'Is the glam booth suitable for outdoor Markham events?',
      answer: 'The glam booth works best indoors where we can control the lighting environment for optimal results. We regularly set up at Markham venues like Paradise Banquet Hall Markham, Le Parc Banquet Hall, and other premium indoor locations where we can achieve the perfect lighting conditions.',
    },
    {
      question: 'Can we still customize the print templates?',
      answer: 'Absolutely! We design custom black and white print templates that complement the glam aesthetic while incorporating your event details, names, dates, and design elements in an elegant style.',
    },
    {
      question: 'What type of events is the glam booth perfect for?',
      answer: 'The glam booth is ideal for weddings, corporate galas, milestone celebrations, anniversary parties, and any upscale Markham event where you want to create a sophisticated, glamorous atmosphere. It\'s particularly popular at high-end venues throughout Markham.',
    },
  ],
  relatedServices: [
    {
      name: 'Photo Booth Rental Markham',
      href: '/photo-booth-rental-markham',
    },
    {
      name: 'Audio Guest Book Markham',
      href: '/audio-guest-book-markham',
    },
    {
      name: '360 Booth Markham',
      href: '/360-booth-markham',
    },
  ],
};

export default function GlamBoothMarkham() {
  return (
    <>
      <SchemaMarkup
        schema={serviceSchema(
          'Black and White Glam Booth Markham',
          'Kardashian-style black and white glam photo booth rental in Markham with professional lighting, premium backdrop, and high-quality prints for weddings and upscale events.',
          '$650'
        )}
      />
      <ServiceLocationPage data={pageData} />
    </>
  );
}

