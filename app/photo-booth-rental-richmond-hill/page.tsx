import type { Metadata } from 'next';
import ServiceLocationPage, { ServiceLocationData } from '@/components/ServiceLocationPage';
import SchemaMarkup from '@/components/SchemaMarkup';
import { serviceSchema } from '@/lib/schema';
import { venues, standardPackages } from '@/lib/sil-data';

export const metadata: Metadata = {
  title: 'Photo Booth Rental Richmond Hill | Professional Photo Booth Services | The Photobooth Guy',
  description: 'Professional photo booth rental in Richmond Hill with DSLR cameras, instant prints, custom templates, backdrop, props, and professional attendant. Serving Richmond Hill Centre, Richmond Green, and venues across the city.',
  keywords: 'photo booth rental Richmond Hill, Richmond Hill photo booth, photo booth hire Richmond Hill, wedding photo booth Richmond Hill, corporate photo booth Richmond Hill, instant prints, DSLR camera, professional attendant',
  alternates: {
    canonical: 'https://thephotoboothguy.ca/photo-booth-rental-richmond-hill',
  },
};

const pageData: ServiceLocationData = {
  serviceName: 'Photo Booth Rental',
  serviceSlug: 'photo-booth-rental',
  city: 'Richmond Hill',
  heroTitle: 'Photo Booth Rental in Richmond Hill',
  heroSubtitle: 'Professional photo booth services with instant prints, custom templates, stunning backdrops, and props for weddings, corporate events, and parties across Richmond Hill.',
  description: 'Richmond Hill\'s family-oriented community and growing corporate presence make it the perfect setting for memorable events. Our photo booth service brings professional entertainment to venues like Richmond Hill Centre for the Performing Arts and Richmond Green Sports Centre, where families celebrate milestones and businesses host important gatherings. We understand that Richmond Hill events often blend multiple generations - grandparents who want traditional keepsakes and kids who expect instant digital sharing. Our setup handles both beautifully, delivering physical prints that become family treasures while simultaneously sending digital copies to phones. The professional DSLR cameras capture every smile, the dye-sublimation printer produces vibrant prints in seconds, and our trained attendant ensures everything runs smoothly so you can focus on your guests.',
  venues: venues.richmondHill,
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
      question: 'Do you serve all areas of Richmond Hill?',
      answer: 'Yes! We provide photo booth rental services throughout Richmond Hill including the Yonge Street corridor, Oak Ridges, and all surrounding neighborhoods. We regularly serve venues like Richmond Hill Centre for the Performing Arts, Richmond Green Sports Centre, and many others across the city.',
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
      answer: 'Absolutely! We design custom print templates at no additional charge. Share your event colors, theme, logos, or any design elements you want, and we\'ll create templates that perfectly match your Richmond Hill event.',
    },
    {
      question: 'What backdrop options are available?',
      answer: 'We offer a variety of backdrop options from elegant solid colors to sequined backdrops, florals, and custom designs. View our backdrops page or contact us to discuss options for your Richmond Hill event.',
    },
  ],
  relatedServices: [
    {
      name: 'Glam Booth Richmond Hill',
      href: '/glam-booth-richmond-hill',
    },
    {
      name: 'Audio Guest Book Richmond Hill',
      href: '/audio-guest-book-richmond-hill',
    },
    {
      name: '360 Booth Richmond Hill',
      href: '/360-booth-richmond-hill',
    },
  ],
};

export default function PhotoBoothRentalRichmondHill() {
  return (
    <>
      <SchemaMarkup
        schema={serviceSchema(
          'Photo Booth Rental Richmond Hill',
          'Professional photo booth rental in Richmond Hill with DSLR cameras, instant prints, custom templates, backdrop, props, and professional attendant for weddings, corporate events, and parties.',
          '$550'
        )}
      />
      <ServiceLocationPage data={pageData} />
    </>
  );
}

