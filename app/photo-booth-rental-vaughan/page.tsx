import type { Metadata } from 'next';
import ServiceLocationPage, { ServiceLocationData } from '@/components/ServiceLocationPage';
import SchemaMarkup from '@/components/SchemaMarkup';
import { serviceSchema } from '@/lib/schema';
import { venues, standardPackages } from '@/lib/sil-data';

export const metadata: Metadata = {
  title: 'Photo Booth Rental Vaughan | Professional Photo Booth Services | The Photobooth Guy',
  description: 'Professional photo booth rental in Vaughan with DSLR cameras, instant prints, custom templates, backdrop, props, and professional attendant. Serving Paradise Banquet & Convention Centre, The Manor, and venues across Vaughan.',
  keywords: 'photo booth rental Vaughan, Vaughan photo booth, photo booth hire Vaughan, wedding photo booth Vaughan, corporate photo booth Vaughan, instant prints, professional attendant',
  alternates: {
    canonical: 'https://thephotoboothguy.ca/photo-booth-rental-vaughan',
  },
};

const pageData: ServiceLocationData = {
  serviceName: 'Photo Booth Rental',
  serviceSlug: 'photo-booth-rental',
  city: 'Vaughan',
  heroTitle: 'Photo Booth Rental in Vaughan',
  heroSubtitle: 'Professional photo booth services with instant prints, custom templates, stunning backdrops, and props for weddings, corporate events, and parties across Vaughan.',
  description: 'Vaughan\'s elegant venues from Woodbridge to Concord demand a photo booth service that matches their sophistication. We specialize in upscale events at locations like Paradise Convention Centre and The Manor, where attention to detail matters. Our premium photo booth setup features professional DSLR cameras with superior low-light performance, museum-quality print output, and refined backdrop options that complement Vaughan\'s luxurious event spaces. Whether you\'re planning an Italian wedding in Woodbridge, a corporate function in the Vaughan Metropolitan Centre, or an intimate gathering in Maple, our experienced attendants ensure flawless execution. Every guest receives instant digital copies, and you\'ll have access to your complete gallery within 48 hours.',
  venues: venues.vaughan,
  features: [
    {
      icon: '📸',
      title: 'Professional DSLR Camera',
      description: 'High-resolution images captured with professional camera equipment and optimal lighting for stunning photo quality.',
    },
    {
      icon: '🖨️',
      title: 'Instant Prints',
      description: 'Dye-sublimation printer delivers vibrant 4x6 or 2x6 prints instantly on custom templates featuring your event details.',
    },
    {
      icon: '🎨',
      title: 'Custom Templates',
      description: 'Personalized print templates designed to match your event theme, colors, and style at no extra charge.',
    },
    {
      icon: '🎭',
      title: 'Backdrop & Props',
      description: 'Choose from our collection of elegant backdrops and fun props to create memorable photos for your guests.',
    },
    {
      icon: '👤',
      title: 'Professional Attendant',
      description: 'Trained on-site attendant ensures smooth operation, assists guests, and maintains the photo booth throughout your event.',
    },
    {
      icon: '📱',
      title: 'Digital Copies',
      description: 'All photos sent instantly to guests via SMS or email, plus complete digital gallery delivered after your event.',
    },
  ],
  packages: standardPackages,
  faqs: [
    {
      question: 'Do you serve all areas of Vaughan?',
      answer: 'Yes! We provide photo booth rental services throughout Vaughan including Woodbridge, Concord, Thornhill, Maple, and all surrounding areas. We regularly serve venues like Paradise Banquet & Convention Centre, The Manor by Peter & Paul\'s, Venetian Banquet Hall, and many others across the city.',
    },
    {
      question: 'What type of camera do you use?',
      answer: 'We use professional DSLR cameras with high-quality lenses and professional lighting to ensure every photo looks amazing. The equipment is maintained to the highest standards and tested before every event.',
    },
    {
      question: 'How long does it take to get prints?',
      answer: 'Our dye-sublimation printer produces high-quality prints in approximately 10-15 seconds. Guests receive their custom printed photos almost immediately, and digital copies are sent to their phones or email instantly.',
    },
    {
      question: 'Can we customize the print template?',
      answer: 'Absolutely! We design custom print templates at no additional charge. Share your event colors, theme, logos, or any design elements you want, and we\'ll create templates that perfectly match your Vaughan event.',
    },
    {
      question: 'What backdrop options are available?',
      answer: 'We offer a variety of backdrop options from elegant solid colors to sequined backdrops, florals, and custom designs. View our backdrops page or contact us to discuss options for your Vaughan event.',
    },
  ],
  relatedServices: [
    {
      name: 'Glam Booth Vaughan',
      href: '/glam-booth-vaughan',
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

export default function PhotoBoothRentalVaughan() {
  return (
    <>
      <SchemaMarkup
        schema={serviceSchema(
          'Photo Booth Rental Vaughan',
          'Professional photo booth rental in Vaughan with DSLR cameras, instant prints, custom templates, backdrop, props, and professional attendant for weddings, corporate events, and parties.',
          '$550'
        )}
      />
      <ServiceLocationPage data={pageData} />
    </>
  );
}

