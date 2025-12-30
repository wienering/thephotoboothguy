import type { Metadata } from 'next';
import ServiceLocationPage, { ServiceLocationData } from '@/components/ServiceLocationPage';
import SchemaMarkup from '@/components/SchemaMarkup';
import { serviceSchema } from '@/lib/schema';
import { venues, glamBoothPackages } from '@/lib/sil-data';

export const metadata: Metadata = {
  title: 'Glam Booth Ajax | Black and White Kardashian Style Photo Booth | The Photobooth Guy',
  description: 'Kardashian-style black and white glam booth rental in Ajax. Professional lighting, high-quality prints, and stunning aesthetic for weddings and upscale events. Available at Ajax Community Centre and premium Ajax venues.',
  keywords: 'glam booth Ajax, black and white photo booth Ajax, Kardashian style photo booth, glamour booth Ajax, wedding glam booth, upscale photo booth Ajax',
  alternates: {
    canonical: 'https://thephotoboothguy.ca/glam-booth-ajax',
  },
};

const pageData: ServiceLocationData = {
  serviceName: 'Black and White Glam Booth',
  serviceSlug: 'glam-booth',
  city: 'Ajax',
  heroTitle: 'Glam Booth in Ajax',
  heroSubtitle: 'Kardashian-style black and white photo booth with professional lighting, elegant backdrop, and high-quality prints for sophisticated Ajax weddings and upscale events.',
  description: 'Ajax\'s growing community and beautiful lakeside venues deserve a photo experience that matches their sophistication. Our black and white glam booth brings that coveted Kardashian-style elegance to Ajax Community Centre, Ajax Convention Centre, and other premier venues throughout the town. The monochrome aesthetic creates timeless photos that look like they belong in a high-end magazine, perfect for Ajax brides who want their wedding photos to have that magazine-worthy quality. The professional studio lighting flatters every guest, creating stunning high-contrast images that complement Ajax\'s elegant style. Whether you\'re hosting a wedding at one of Ajax\'s community centres or a milestone celebration, our glam booth elevates the entire event experience with its sophisticated black and white aesthetic.',
  venues: venues.ajax,
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
      description: 'All glamour photos sent instantly to guests digitally, plus a complete gallery delivered after your Ajax event.',
    },
  ],
  packages: glamBoothPackages,
  faqs: [
    {
      question: 'How much does a glam booth cost in Ajax?',
      answer: 'Glam booth rental in Ajax starts at $650 for our Essential package (2 hours), $850 for Signature (3 hours), and $1,050 for Premium (4 hours). All packages include the black and white glam booth setup with professional lighting, premium backdrop, high-quality instant prints, props, and digital delivery. The glam booth creates that Kardashian-style aesthetic that\'s perfect for upscale Ajax events.',
    },
    {
      question: 'What makes a glam booth different from a regular photo booth in Ajax?',
      answer: 'The glam booth features professional studio lighting specifically designed for black and white photography, creating that sophisticated Kardashian-style aesthetic you see in celebrity events. The lighting setup, backdrop selection, and overall design are all curated to produce elegant, magazine-quality photos that stand out from traditional color photo booths. It\'s perfect for Ajax events where you want that high-fashion, editorial look.',
    },
    {
      question: 'Are glam booth photos only in black and white in Ajax?',
      answer: 'Yes, the glam booth specializes exclusively in black and white photography to achieve that timeless, glamorous aesthetic. The professional lighting and monochrome styling create stunning, high-contrast photos that look like they belong in a fashion magazine. This is what gives the glam booth its distinctive, sophisticated look that Ajax brides and event planners love.',
    },
    {
      question: 'Can I use a glam booth for an outdoor event in Ajax?',
      answer: 'The glam booth works best indoors where we can control the lighting environment for optimal results. We regularly set up at Ajax venues like Ajax Community Centre, Ajax Convention Centre, and other premium indoor locations where we can achieve the perfect lighting conditions. If you have a covered outdoor space with proper lighting, we can discuss options for your Ajax event.',
    },
    {
      question: 'Can I customize the glam booth print templates for my Ajax wedding?',
      answer: 'Absolutely! We design custom black and white print templates that complement the glam aesthetic while incorporating your wedding details, names, dates, and design elements in an elegant style. The templates will match your Ajax wedding theme while maintaining that sophisticated monochrome look.',
    },
    {
      question: 'What type of events are best for a glam booth in Ajax?',
      answer: 'The glam booth is ideal for weddings, corporate galas, milestone celebrations, anniversary parties, and any upscale Ajax event where you want to create a sophisticated, glamorous atmosphere. It\'s particularly popular at high-end venues throughout Ajax where guests appreciate that magazine-quality aesthetic.',
    },
    {
      question: 'How long does it take to get glam booth prints in Ajax?',
      answer: 'Just like our regular photo booths, glam booth prints are ready in about 10-15 seconds. Guests receive their black and white printed photos almost immediately, and digital copies are sent to their phones or email instantly. The glam booth experience is just as fast and convenient as our regular photo booths.',
    },
  ],
  relatedServices: [
    {
      name: 'Photo Booth Rental Ajax',
      href: '/photo-booth-rental-ajax',
    },
    {
      name: 'Audio Guest Book Ajax',
      href: '/audio-guest-book-ajax',
    },
    {
      name: '360 Booth Ajax',
      href: '/360-booth-ajax',
    },
  ],
};

export default function GlamBoothAjax() {
  return (
    <>
      <SchemaMarkup
        schema={serviceSchema(
          'Black and White Glam Booth Ajax',
          'Kardashian-style black and white glam photo booth rental in Ajax with professional lighting, premium backdrop, and high-quality prints for weddings and upscale events.',
          '$650'
        )}
      />
      <ServiceLocationPage data={pageData} />
    </>
  );
}

