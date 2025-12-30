import type { Metadata } from 'next';
import ServiceLocationPage, { ServiceLocationData } from '@/components/ServiceLocationPage';
import SchemaMarkup from '@/components/SchemaMarkup';
import { serviceSchema } from '@/lib/schema';
import { venues, standardPackages } from '@/lib/sil-data';

export const metadata: Metadata = {
  title: 'Photo Booth Rental North York | Professional Photo Booth Services | The Photobooth Guy',
  description: 'Professional photo booth rental in North York with DSLR cameras, instant prints, custom templates, backdrop, props, and professional attendant. Serving Toronto Congress Centre, The International Centre, and venues across North York.',
  keywords: 'photo booth rental North York, North York photo booth, photo booth hire North York, wedding photo booth North York, corporate photo booth North York, instant prints, DSLR camera, professional attendant',
  alternates: {
    canonical: 'https://thephotoboothguy.ca/photo-booth-rental-north-york',
  },
};

const pageData: ServiceLocationData = {
  serviceName: 'Photo Booth Rental',
  serviceSlug: 'photo-booth-rental',
  city: 'North York',
  heroTitle: 'Photo Booth Rental in North York',
  heroSubtitle: 'Professional photo booth services with instant prints, custom templates, stunning backdrops, and props for weddings, corporate events, and parties across North York.',
  description: 'North York\'s bustling business district and diverse residential neighborhoods create the perfect setting for memorable events. Our photo booth service brings professional entertainment to venues like Toronto Congress Centre and The International Centre, where corporate events and family celebrations come together. North York events often feature large gatherings with guests from across the GTA, and our professional DSLR cameras capture every moment with stunning clarity. The dye-sublimation printer delivers vibrant prints that become instant keepsakes, while digital copies are sent to phones immediately so guests can share their photos right away. Our trained attendant ensures everything runs smoothly throughout your North York event, handling setup, operation, and any questions from guests so you can focus on enjoying the celebration.',
  venues: venues.northYork,
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
      question: 'Do you serve all areas of North York?',
      answer: 'Yes! We provide photo booth rental services throughout North York including Yonge and Finch, Sheppard, Downsview, and all surrounding neighborhoods. We regularly serve venues like Toronto Congress Centre, The International Centre, York Mills Gallery, and many others across the area.',
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
      answer: 'Absolutely! We design custom print templates at no additional charge. Share your event colors, theme, logos, or any design elements you want, and we\'ll create templates that perfectly match your North York event.',
    },
    {
      question: 'What backdrop options are available?',
      answer: 'We offer a variety of backdrop options from elegant solid colors to sequined backdrops, florals, and custom designs. View our backdrops page or contact us to discuss options for your North York event.',
    },
  ],
  relatedServices: [
    {
      name: 'Glam Booth North York',
      href: '/glam-booth-north-york',
    },
    {
      name: 'Audio Guest Book North York',
      href: '/audio-guest-book-north-york',
    },
    {
      name: '360 Booth North York',
      href: '/360-booth-north-york',
    },
  ],
};

export default function PhotoBoothRentalNorthYork() {
  return (
    <>
      <SchemaMarkup
        schema={serviceSchema(
          'Photo Booth Rental North York',
          'Professional photo booth rental in North York with DSLR cameras, instant prints, custom templates, backdrop, props, and professional attendant for weddings, corporate events, and parties.',
          '$550'
        )}
      />
      <ServiceLocationPage data={pageData} />
    </>
  );
}

