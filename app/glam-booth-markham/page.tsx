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
      question: 'How much does a glam booth cost in Markham?',
      answer: 'Glam booth rental in Markham starts at $650 for our Essential package (2 hours), $850 for Signature (3 hours), and $1,050 for Premium (4 hours). All packages include the black and white glam booth setup with professional lighting, premium backdrop, high-quality instant prints, props, and digital delivery. The glam booth creates that Kardashian-style aesthetic that\'s perfect for upscale Markham events.',
    },
    {
      question: 'What makes a glam booth different from a regular photo booth in Markham?',
      answer: 'The glam booth features professional studio lighting specifically designed for black and white photography, creating that sophisticated Kardashian-style aesthetic you see in celebrity events. The lighting setup, backdrop selection, and overall design are all curated to produce elegant, magazine-quality photos that stand out from traditional color photo booths. It\'s perfect for Markham events where you want that high-fashion, editorial look.',
    },
    {
      question: 'Are glam booth photos only in black and white in Markham?',
      answer: 'Yes, the glam booth specializes exclusively in black and white photography to achieve that timeless, glamorous aesthetic. The professional lighting and monochrome styling create stunning, high-contrast photos that look like they belong in a fashion magazine. This is what gives the glam booth its distinctive, sophisticated look that Markham brides and event planners love.',
    },
    {
      question: 'Can I use a glam booth for an outdoor event in Markham?',
      answer: 'The glam booth works best indoors where we can control the lighting environment for optimal results. We regularly set up at Markham venues like Paradise Banquet Hall Markham, Le Parc Banquet Hall, and other premium indoor locations where we can achieve the perfect lighting conditions. If you have a covered outdoor space with proper lighting, we can discuss options for your Markham event.',
    },
    {
      question: 'Can I customize the glam booth print templates for my Markham wedding?',
      answer: 'Absolutely! We design custom black and white print templates that complement the glam aesthetic while incorporating your wedding details, names, dates, and design elements in an elegant style. The templates will match your Markham wedding theme while maintaining that sophisticated monochrome look.',
    },
    {
      question: 'What type of events are best for a glam booth in Markham?',
      answer: 'The glam booth is ideal for weddings, corporate galas, milestone celebrations, anniversary parties, and any upscale Markham event where you want to create a sophisticated, glamorous atmosphere. It\'s particularly popular at high-end venues throughout Markham where guests appreciate that magazine-quality aesthetic.',
    },
    {
      question: 'How long does it take to get glam booth prints in Markham?',
      answer: 'Just like our regular photo booths, glam booth prints are ready in about 10-15 seconds. Guests receive their black and white printed photos almost immediately, and digital copies are sent to their phones or email instantly. The glam booth experience is just as fast and convenient as our regular photo booths.',
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

