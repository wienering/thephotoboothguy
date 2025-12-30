import type { Metadata } from 'next';
import ServiceLocationPage, { ServiceLocationData } from '@/components/ServiceLocationPage';
import SchemaMarkup from '@/components/SchemaMarkup';
import { serviceSchema } from '@/lib/schema';
import { venues, glamBoothPackages } from '@/lib/sil-data';

export const metadata: Metadata = {
  title: 'Glam Booth Burlington | Black and White Kardashian Style Photo Booth | The Photobooth Guy',
  description: 'Kardashian-style black and white glam booth rental in Burlington. Professional lighting, high-quality prints, and stunning aesthetic for weddings and upscale events. Available at Burlington Convention Centre and premium Burlington venues.',
  keywords: 'glam booth Burlington, black and white photo booth Burlington, Kardashian style photo booth, glamour booth Burlington, wedding glam booth, upscale photo booth Burlington',
  alternates: {
    canonical: 'https://thephotoboothguy.ca/glam-booth-burlington',
  },
};

const pageData: ServiceLocationData = {
  serviceName: 'Black and White Glam Booth',
  serviceSlug: 'glam-booth',
  city: 'Burlington',
  heroTitle: 'Glam Booth in Burlington',
  heroSubtitle: 'Kardashian-style black and white photo booth with professional lighting, elegant backdrop, and high-quality prints for sophisticated Burlington weddings and upscale events.',
  description: 'Burlington\'s elegant lakeside venues and sophisticated community deserve a photo experience that matches their refined aesthetic. Our black and white glam booth brings that coveted Kardashian-style sophistication to Burlington Convention Centre, Royal Botanical Gardens, and other premier venues throughout the city. The monochrome aesthetic creates timeless photos that look like they belong in a high-end magazine, perfect for Burlington brides who want their wedding photos to have that magazine-worthy quality. The professional studio lighting flatters every guest, creating stunning high-contrast images that complement Burlington\'s elegant style. Whether you\'re hosting a wedding at one of Burlington\'s prestigious venues or a milestone celebration, our glam booth elevates the entire event experience with its sophisticated black and white aesthetic.',
  venues: venues.burlington,
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
      description: 'All glamour photos sent instantly to guests digitally, plus a complete gallery delivered after your Burlington event.',
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
      question: 'Is the glam booth suitable for outdoor Burlington events?',
      answer: 'The glam booth works best indoors where we can control the lighting environment for optimal results. We regularly set up at Burlington venues like Burlington Convention Centre, Royal Botanical Gardens, and other premium indoor locations where we can achieve the perfect lighting conditions.',
    },
    {
      question: 'Can we still customize the print templates?',
      answer: 'Absolutely! We design custom black and white print templates that complement the glam aesthetic while incorporating your event details, names, dates, and design elements in an elegant style.',
    },
    {
      question: 'What type of events is the glam booth perfect for?',
      answer: 'The glam booth is ideal for weddings, corporate galas, milestone celebrations, anniversary parties, and any upscale Burlington event where you want to create a sophisticated, glamorous atmosphere. It\'s particularly popular at high-end venues throughout Burlington.',
    },
  ],
  relatedServices: [
    {
      name: 'Photo Booth Rental Burlington',
      href: '/photo-booth-rental-burlington',
    },
    {
      name: 'Audio Guest Book Burlington',
      href: '/audio-guest-book-burlington',
    },
    {
      name: '360 Booth Burlington',
      href: '/360-booth-burlington',
    },
  ],
};

export default function GlamBoothBurlington() {
  return (
    <>
      <SchemaMarkup
        schema={serviceSchema(
          'Black and White Glam Booth Burlington',
          'Kardashian-style black and white glam photo booth rental in Burlington with professional lighting, premium backdrop, and high-quality prints for weddings and upscale events.',
          '$650'
        )}
      />
      <ServiceLocationPage data={pageData} />
    </>
  );
}

