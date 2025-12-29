import type { Metadata } from 'next';
import ServiceLocationPage, { ServiceLocationData } from '@/components/ServiceLocationPage';
import SchemaMarkup from '@/components/SchemaMarkup';
import { serviceSchema } from '@/lib/schema';
import { venues, glamBoothPackages } from '@/lib/sil-data';

export const metadata: Metadata = {
  title: 'Glam Booth Brampton | Black and White Kardashian Style Photo Booth | The Photobooth Guy',
  description: 'Kardashian-style black and white glam booth rental in Brampton. Professional lighting, high-quality prints, and stunning aesthetic for weddings and upscale events. Available at Great Hall and premium Brampton venues.',
  keywords: 'glam booth Brampton, black and white photo booth Brampton, Kardashian style photo booth, glamour booth Brampton, wedding glam booth',
};

const pageData: ServiceLocationData = {
  serviceName: 'Black and White Glam Booth',
  serviceSlug: 'glam-booth',
  city: 'Brampton',
  heroTitle: 'Glam Booth in Brampton',
  heroSubtitle: 'Kardashian-style black and white photo booth with professional lighting, elegant backdrop, and high-quality prints for sophisticated Brampton weddings and upscale events.',
  description: 'Brampton celebrations are known for their grandeur, and our black and white glam booth adds Hollywood sophistication to your spectacular event. Whether you\'re hosting an elegant reception at Great Hall or an intimate affair in Heart Lake, the dramatic lighting and monochrome aesthetic of our glam booth creates stunning keepsake photos. The Kardashian-style setup is particularly popular for Brampton\'s South Asian weddings, where the high-contrast black and white photography beautifully captures elaborate jewelry, intricate henna, and stunning bridal attire. Our professional attendants understand how to work with various cultural dress styles and ensure every guest gets that perfect, magazine-worthy shot with flattering angles and optimal lighting.',
  venues: venues.brampton,
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
      description: 'All glamour photos sent instantly to guests digitally, plus a complete gallery delivered after your Brampton event.',
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
      question: 'Is the glam booth suitable for outdoor Brampton events?',
      answer: 'The glam booth works best indoors where we can control the lighting environment for optimal results. We regularly set up at Brampton venues like Great Hall Banquet & Convention Centre, Terrace Banquet Hall, and other premium indoor locations where we can achieve the perfect lighting conditions.',
    },
    {
      question: 'Can we still customize the print templates?',
      answer: 'Absolutely! We design custom black and white print templates that complement the glam aesthetic while incorporating your event details, names, dates, and design elements in an elegant style.',
    },
    {
      question: 'What type of events is the glam booth perfect for?',
      answer: 'The glam booth is ideal for weddings, corporate galas, milestone celebrations, anniversary parties, and any upscale Brampton event where you want to create a sophisticated, glamorous atmosphere. It\'s particularly popular at high-end venues throughout Brampton.',
    },
  ],
  relatedServices: [
    {
      name: 'Photo Booth Rental Brampton',
      href: '/photo-booth-rental-brampton',
    },
    {
      name: 'Audio Guest Book Brampton',
      href: '/audio-guest-book-brampton',
    },
    {
      name: '360 Booth Brampton',
      href: '/360-booth-brampton',
    },
  ],
};

export default function GlamBoothBrampton() {
  return (
    <>
      <SchemaMarkup
        schema={serviceSchema(
          'Black and White Glam Booth Brampton',
          'Kardashian-style black and white glam photo booth rental in Brampton with professional lighting, premium backdrop, and high-quality prints for weddings and upscale events.',
          '$650'
        )}
      />
      <ServiceLocationPage data={pageData} />
    </>
  );
}

