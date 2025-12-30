import type { Metadata } from 'next';
import ServiceLocationPage, { ServiceLocationData } from '@/components/ServiceLocationPage';
import SchemaMarkup from '@/components/SchemaMarkup';
import { serviceSchema } from '@/lib/schema';
import { venues, standardPackages } from '@/lib/sil-data';

export const metadata: Metadata = {
  title: 'Photo Booth Rental Oshawa | Professional Photo Booth Services | The Photobooth Guy',
  description: 'Professional photo booth rental in Oshawa with DSLR cameras, instant prints, custom templates, backdrop, props, and professional attendant. Serving Oshawa Convention Centre, Regent Theatre, and venues across Oshawa.',
  keywords: 'photo booth rental Oshawa, Oshawa photo booth, photo booth hire Oshawa, wedding photo booth Oshawa, corporate photo booth Oshawa, instant prints, DSLR camera, professional attendant',
  alternates: {
    canonical: 'https://thephotoboothguy.ca/photo-booth-rental-oshawa',
  },
};

const pageData: ServiceLocationData = {
  serviceName: 'Photo Booth Rental',
  serviceSlug: 'photo-booth-rental',
  city: 'Oshawa',
  heroTitle: 'Photo Booth Rental in Oshawa',
  heroSubtitle: 'Professional photo booth services with instant prints, custom templates, stunning backdrops, and props for weddings, corporate events, and parties across Oshawa.',
  description: 'Oshawa\'s vibrant downtown and rich industrial heritage create the perfect setting for memorable celebrations. Our photo booth service brings professional entertainment to venues like Oshawa Convention Centre and Regent Theatre, where families and friends come together to celebrate life\'s special moments. Oshawa events often feature close-knit communities who want to capture genuine moments together, and our professional DSLR cameras do exactly that - capturing every smile, laugh, and special interaction with stunning clarity. The dye-sublimation printer delivers vibrant prints that become instant keepsakes, while digital copies are sent to phones immediately so guests can share their photos right away. Our trained attendant ensures everything runs smoothly throughout your Oshawa event, so you can focus on enjoying the celebration with your guests.',
  venues: venues.oshawa,
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
      question: 'Do you serve all areas of Oshawa?',
      answer: 'Yes! We provide photo booth rental services throughout Oshawa including the downtown core, North Oshawa, South Oshawa, and all surrounding neighborhoods. We regularly serve venues like Oshawa Convention Centre, Regent Theatre, Oshawa Golf & Curling Club, and many others across the city.',
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
      answer: 'Absolutely! We design custom print templates at no additional charge. Share your event colors, theme, logos, or any design elements you want, and we\'ll create templates that perfectly match your Oshawa event.',
    },
    {
      question: 'What backdrop options are available?',
      answer: 'We offer a variety of backdrop options from elegant solid colors to sequined backdrops, florals, and custom designs. View our backdrops page or contact us to discuss options for your Oshawa event.',
    },
  ],
  relatedServices: [
    {
      name: 'Glam Booth Oshawa',
      href: '/glam-booth-oshawa',
    },
    {
      name: 'Audio Guest Book Oshawa',
      href: '/audio-guest-book-oshawa',
    },
    {
      name: '360 Booth Oshawa',
      href: '/360-booth-oshawa',
    },
  ],
};

export default function PhotoBoothRentalOshawa() {
  return (
    <>
      <SchemaMarkup
        schema={serviceSchema(
          'Photo Booth Rental Oshawa',
          'Professional photo booth rental in Oshawa with DSLR cameras, instant prints, custom templates, backdrop, props, and professional attendant for weddings, corporate events, and parties.',
          '$550'
        )}
      />
      <ServiceLocationPage data={pageData} />
    </>
  );
}

