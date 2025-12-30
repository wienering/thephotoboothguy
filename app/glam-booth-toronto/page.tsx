import type { Metadata } from 'next';
import ServiceLocationPage, { ServiceLocationData } from '@/components/ServiceLocationPage';
import SchemaMarkup from '@/components/SchemaMarkup';
import { serviceSchema } from '@/lib/schema';
import { venues, glamBoothPackages } from '@/lib/sil-data';

export const metadata: Metadata = {
  title: 'Glam Booth Toronto | Black and White Kardashian Style Photo Booth | The Photobooth Guy',
  description: 'Kardashian-style black and white glam booth rental in Toronto. Professional lighting, high-quality prints, and stunning aesthetic for weddings and upscale events. Available at Liberty Grand, Arcadian Court, and premium Toronto venues.',
  keywords: 'glam booth Toronto, black and white photo booth Toronto, Kardashian style photo booth, glamour booth Toronto, wedding glam booth, upscale photo booth Toronto',
  alternates: {
    canonical: 'https://thephotoboothguy.ca/glam-booth-toronto',
  },
};

const pageData: ServiceLocationData = {
  serviceName: 'Black and White Glam Booth',
  serviceSlug: 'glam-booth',
  city: 'Toronto',
  heroTitle: 'Glam Booth in Toronto',
  heroSubtitle: 'Kardashian-style black and white photo booth with professional lighting, elegant backdrop, and high-quality prints for sophisticated Toronto weddings and upscale events.',
  description: 'Toronto\'s fashion-forward scene calls for a photo experience that matches its cosmopolitan energy. Our black and white glam booth brings Kardashian-style glamour to the city\'s most prestigious venues. From King West weddings to Bay Street corporate events, our studio-quality lighting and monochrome aesthetic create that coveted magazine-worthy look. Perfect for Toronto brides who want their Liberty Grand or Arcadian Court wedding photos to stand out on Instagram, our glam booth delivers professional results that complement the city\'s sophisticated style. Each setup includes premium backdrops, a trained attendant who understands lighting angles, and instant digital delivery so your downtown Toronto guests can share their glamorous photos immediately.',
  venues: venues.toronto,
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
      description: 'All glamour photos sent instantly to guests digitally, plus a complete gallery delivered after your Toronto event.',
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
      question: 'Is the glam booth suitable for outdoor Toronto events?',
      answer: 'The glam booth works best indoors where we can control the lighting environment for optimal results. We regularly set up at Toronto venues like The Liberty Grand, Arcadian Court, and other premium indoor locations where we can achieve the perfect lighting conditions.',
    },
    {
      question: 'Can we still customize the print templates?',
      answer: 'Absolutely! We design custom black and white print templates that complement the glam aesthetic while incorporating your event details, names, dates, and design elements in an elegant style.',
    },
    {
      question: 'What type of events is the glam booth perfect for?',
      answer: 'The glam booth is ideal for weddings, corporate galas, milestone celebrations, anniversary parties, and any upscale Toronto event where you want to create a sophisticated, glamorous atmosphere. It\'s particularly popular at high-end venues throughout Toronto.',
    },
  ],
  relatedServices: [
    {
      name: 'Photo Booth Rental Toronto',
      href: '/photo-booth-rental-toronto',
    },
    {
      name: 'Audio Guest Book Toronto',
      href: '/audio-guest-book-toronto',
    },
    {
      name: '360 Booth Toronto',
      href: '/360-booth-toronto',
    },
  ],
};

export default function GlamBoothToronto() {
  return (
    <>
      <SchemaMarkup
        schema={serviceSchema(
          'Black and White Glam Booth Toronto',
          'Kardashian-style black and white glam photo booth rental in Toronto with professional lighting, premium backdrop, and high-quality prints for weddings and upscale events.',
          '$650'
        )}
      />
      <ServiceLocationPage data={pageData} />
    </>
  );
}

