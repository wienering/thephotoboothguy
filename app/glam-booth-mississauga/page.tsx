import type { Metadata } from 'next';
import ServiceLocationPage, { ServiceLocationData } from '@/components/ServiceLocationPage';
import SchemaMarkup from '@/components/SchemaMarkup';
import { serviceSchema } from '@/lib/schema';
import { venues, glamBoothPackages } from '@/lib/sil-data';

export const metadata: Metadata = {
  title: 'Glam Booth Mississauga | Black and White Kardashian Style Photo Booth | The Photobooth Guy',
  description: 'Kardashian-style black and white glam booth rental in Mississauga. Professional lighting, high-quality prints, and stunning aesthetic for weddings and upscale events. Available at The Grand Luxe and premium Mississauga venues.',
  keywords: 'glam booth Mississauga, black and white photo booth Mississauga, Kardashian style photo booth, glamour booth Mississauga, wedding glam booth',
  alternates: {
    canonical: 'https://thephotoboothguy.ca/glam-booth-mississauga',
  },
};

const pageData: ServiceLocationData = {
  serviceName: 'Black and White Glam Booth',
  serviceSlug: 'glam-booth',
  city: 'Mississauga',
  heroTitle: 'Glam Booth in Mississauga',
  heroSubtitle: 'Kardashian-style black and white photo booth with professional lighting, elegant backdrop, and high-quality prints for sophisticated Mississauga weddings and upscale events.',
  description: 'Mississauga\'s upscale venues deserve the elegance of our black and white glam booth experience. At Renaissance by the Creek and The Grand Luxe, where sophistication meets celebration, our Kardashian-inspired photo booth elevates your event with Hollywood-style glamour. The professional lighting system we bring to Port Credit waterfront venues and Streetsville estates creates that perfect high-contrast monochrome look that makes every guest look like a star. Ideal for Mississauga couples who want their wedding photos to have that timeless, editorial quality, our glam booth combines artistic lighting with instant printing technology. Professional attendants ensure each shot captures that perfect angle, while guests receive their glamorous prints immediately.',
  venues: venues.mississauga,
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
      description: 'All glamour photos sent instantly to guests digitally, plus a complete gallery delivered after your Mississauga event.',
    },
  ],
  packages: glamBoothPackages,
  faqs: [
    {
      question: 'How much does a glam booth cost in Mississauga?',
      answer: 'Glam booth rental in Mississauga starts at $650 for our Essential package (2 hours), $850 for Signature (3 hours), and $1,050 for Premium (4 hours). All packages include the black and white glam booth setup with professional lighting, premium backdrop, high-quality instant prints, props, and digital delivery. The glam booth creates that Kardashian-style aesthetic that\'s perfect for upscale Mississauga events.',
    },
    {
      question: 'What makes a glam booth different from a regular photo booth in Mississauga?',
      answer: 'The glam booth features professional studio lighting specifically designed for black and white photography, creating that sophisticated Kardashian-style aesthetic you see in celebrity events. The lighting setup, backdrop selection, and overall design are all curated to produce elegant, magazine-quality photos that stand out from traditional color photo booths. It\'s perfect for Mississauga events where you want that high-fashion, editorial look.',
    },
    {
      question: 'Are glam booth photos only in black and white in Mississauga?',
      answer: 'Yes, the glam booth specializes exclusively in black and white photography to achieve that timeless, glamorous aesthetic. The professional lighting and monochrome styling create stunning, high-contrast photos that look like they belong in a fashion magazine. This is what gives the glam booth its distinctive, sophisticated look that Mississauga brides and event planners love.',
    },
    {
      question: 'Can I use a glam booth for an outdoor event in Mississauga?',
      answer: 'The glam booth works best indoors where we can control the lighting environment for optimal results. We regularly set up at Mississauga venues like The Grand Luxe Event Boutique, Carmen\'s Banquet Centre, and other premium indoor locations where we can achieve the perfect lighting conditions. If you have a covered outdoor space with proper lighting, we can discuss options for your Mississauga event.',
    },
    {
      question: 'Can I customize the glam booth print templates for my Mississauga wedding?',
      answer: 'Absolutely! We design custom black and white print templates that complement the glam aesthetic while incorporating your wedding details, names, dates, and design elements in an elegant style. The templates will match your Mississauga wedding theme while maintaining that sophisticated monochrome look.',
    },
    {
      question: 'What type of events are best for a glam booth in Mississauga?',
      answer: 'The glam booth is ideal for weddings, corporate galas, milestone celebrations, anniversary parties, and any upscale Mississauga event where you want to create a sophisticated, glamorous atmosphere. It\'s particularly popular at high-end venues throughout Mississauga where guests appreciate that magazine-quality aesthetic.',
    },
    {
      question: 'How long does it take to get glam booth prints in Mississauga?',
      answer: 'Just like our regular photo booths, glam booth prints are ready in about 10-15 seconds. Guests receive their black and white printed photos almost immediately, and digital copies are sent to their phones or email instantly. The glam booth experience is just as fast and convenient as our regular photo booths.',
    },
  ],
  relatedServices: [
    {
      name: 'Photo Booth Rental Mississauga',
      href: '/photo-booth-rental-mississauga',
    },
    {
      name: 'Audio Guest Book Mississauga',
      href: '/audio-guest-book-mississauga',
    },
    {
      name: '360 Booth Mississauga',
      href: '/360-booth-mississauga',
    },
  ],
};

export default function GlamBoothMississauga() {
  return (
    <>
      <SchemaMarkup
        schema={serviceSchema(
          'Black and White Glam Booth Mississauga',
          'Kardashian-style black and white glam photo booth rental in Mississauga with professional lighting, premium backdrop, and high-quality prints for weddings and upscale events.',
          '$650'
        )}
      />
      <ServiceLocationPage data={pageData} />
    </>
  );
}

