import type { Metadata } from 'next';
import ServiceLocationPage, { ServiceLocationData } from '@/components/ServiceLocationPage';
import SchemaMarkup from '@/components/SchemaMarkup';
import { serviceSchema } from '@/lib/schema';
import { venues, standardPackages } from '@/lib/sil-data';

export const metadata: Metadata = {
  title: 'Photo Booth Rental Etobicoke | Professional Photo Booth Services | The Photobooth Guy',
  description: 'Professional photo booth rental in Etobicoke with DSLR cameras, instant prints, custom templates, backdrop, props, and professional attendant. Serving The Old Mill, Humber Valley Golf Club, and venues across Etobicoke.',
  keywords: 'photo booth rental Etobicoke, Etobicoke photo booth, photo booth hire Etobicoke, wedding photo booth Etobicoke, corporate photo booth Etobicoke, instant prints, DSLR camera, professional attendant',
  alternates: {
    canonical: 'https://thephotoboothguy.ca/photo-booth-rental-etobicoke',
  },
};

const pageData: ServiceLocationData = {
  serviceName: 'Photo Booth Rental',
  serviceSlug: 'photo-booth-rental',
  city: 'Etobicoke',
  heroTitle: 'Photo Booth Rental in Etobicoke',
  heroSubtitle: 'Professional photo booth services with instant prints, custom templates, stunning backdrops, and props for weddings, corporate events, and parties across Etobicoke.',
  description: 'Etobicoke\'s diverse neighborhoods and beautiful Humber River setting create the perfect backdrop for memorable events. Our photo booth service brings professional entertainment to venues like The Old Mill Toronto and Humber Valley Golf Club, where historic charm meets modern celebration. Etobicoke events often bring together families from across the GTA, and our professional DSLR cameras capture every moment with stunning clarity. The dye-sublimation printer delivers vibrant prints that become instant keepsakes, while digital copies are sent to phones immediately so guests can share their photos right away. Our trained attendant ensures everything runs smoothly throughout your Etobicoke event, handling setup, operation, and any questions from guests so you can focus on enjoying the celebration.',
  venues: venues.etobicoke,
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
      question: 'Do you serve all areas of Etobicoke?',
      answer: 'Yes! We provide photo booth rental services throughout Etobicoke including The Kingsway, Islington, Mimico, New Toronto, and all surrounding neighborhoods. We regularly serve venues like The Old Mill Toronto, Humber Valley Golf Club, Etobicoke Olympium, and many others across the area.',
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
      answer: 'Absolutely! We design custom print templates at no additional charge. Share your event colors, theme, logos, or any design elements you want, and we\'ll create templates that perfectly match your Etobicoke event.',
    },
    {
      question: 'What backdrop options are available?',
      answer: 'We offer a variety of backdrop options from elegant solid colors to sequined backdrops, florals, and custom designs. View our backdrops page or contact us to discuss options for your Etobicoke event.',
    },
  ],
  relatedServices: [
    {
      name: 'Glam Booth Etobicoke',
      href: '/glam-booth-etobicoke',
    },
    {
      name: 'Audio Guest Book Etobicoke',
      href: '/audio-guest-book-etobicoke',
    },
    {
      name: '360 Booth Etobicoke',
      href: '/360-booth-etobicoke',
    },
  ],
};

export default function PhotoBoothRentalEtobicoke() {
  return (
    <>
      <SchemaMarkup
        schema={serviceSchema(
          'Photo Booth Rental Etobicoke',
          'Professional photo booth rental in Etobicoke with DSLR cameras, instant prints, custom templates, backdrop, props, and professional attendant for weddings, corporate events, and parties.',
          '$550'
        )}
      />
      <ServiceLocationPage data={pageData} />
    </>
  );
}

