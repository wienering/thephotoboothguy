import type { Metadata } from 'next';
import ServiceLocationPage, { ServiceLocationData } from '@/components/ServiceLocationPage';
import SchemaMarkup from '@/components/SchemaMarkup';
import { serviceSchema } from '@/lib/schema';
import { venues, standardPackages } from '@/lib/sil-data';

export const metadata: Metadata = {
  title: 'Photo Booth Rental Toronto | Professional Photo Booth Services | The Photobooth Guy',
  description: 'Professional photo booth rental in Toronto with DSLR cameras, instant prints, custom templates, backdrop, props, and professional attendant. Serving Liberty Grand, Arcadian Court, and venues across Toronto.',
  keywords: 'photo booth rental Toronto, Toronto photo booth, photo booth hire Toronto, wedding photo booth Toronto, corporate photo booth Toronto, instant prints, DSLR camera, professional attendant',
  alternates: {
    canonical: 'https://thephotoboothguy.ca/photo-booth-rental-toronto',
  },
};

const pageData: ServiceLocationData = {
  serviceName: 'Photo Booth Rental',
  serviceSlug: 'photo-booth-rental',
  city: 'Toronto',
  heroTitle: 'Photo Booth Rental in Toronto',
  heroSubtitle: 'Professional photo booth services with instant prints, custom templates, stunning backdrops, and props for weddings, corporate events, and parties across Toronto.',
  description: 'Planning an event in Canada\'s largest city? Our Toronto photo booth rental service delivers premium entertainment that matches the sophistication of your downtown wedding, North York corporate gala, or Scarborough celebration. We bring professional DSLR cameras, instant dye-sublimation printing, and custom-designed templates that reflect Toronto\'s vibrant energy. Our trained attendants ensure seamless operation whether you\'re hosting 50 or 500 guests at iconic venues like The Liberty Grand or intimate spaces across the GTA. Every photo is instantly shared via SMS or email, with a complete digital gallery delivered within 48 hours.',
  venues: venues.toronto,
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
      question: 'Do you serve all areas of Toronto?',
      answer: 'Yes! We provide photo booth rental services throughout Toronto including downtown Toronto, North York, Scarborough, Etobicoke, and all surrounding areas. We regularly serve venues like The Liberty Grand, Arcadian Court, Harbour Castle, and many others across the city.',
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
      answer: 'Absolutely! We design custom print templates at no additional charge. Share your event colors, theme, logos, or any design elements you want, and we\'ll create templates that perfectly match your Toronto event.',
    },
    {
      question: 'What backdrop options are available?',
      answer: 'We offer a variety of backdrop options from elegant solid colors to sequined backdrops, florals, and custom designs. View our backdrops page or contact us to discuss options for your Toronto event.',
    },
  ],
  relatedServices: [
    {
      name: 'Glam Booth Toronto',
      href: '/glam-booth-toronto',
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

export default function PhotoBoothRentalToronto() {
  return (
    <>
      <SchemaMarkup
        schema={serviceSchema(
          'Photo Booth Rental Toronto',
          'Professional photo booth rental in Toronto with DSLR cameras, instant prints, custom templates, backdrop, props, and professional attendant for weddings, corporate events, and parties.',
          '$550'
        )}
      />
      <ServiceLocationPage data={pageData} />
    </>
  );
}

