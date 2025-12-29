import type { Metadata } from 'next';
import ServiceLocationPage, { ServiceLocationData } from '@/components/ServiceLocationPage';
import SchemaMarkup from '@/components/SchemaMarkup';
import { serviceSchema } from '@/lib/schema';
import { venues, standardPackages } from '@/lib/sil-data';

export const metadata: Metadata = {
  title: 'Photo Booth Rental Markham | Professional Photo Booth Services | The Photobooth Guy',
  description: 'Professional photo booth rental in Markham with DSLR cameras, instant prints, custom templates, backdrop, props, and professional attendant. Serving Flato Markham Theatre, Paradise Banquet Hall, and venues across Markham.',
  keywords: 'photo booth rental Markham, Markham photo booth, photo booth hire Markham, wedding photo booth Markham, corporate photo booth Markham, instant prints, professional attendant',
};

const pageData: ServiceLocationData = {
  serviceName: 'Photo Booth Rental',
  serviceSlug: 'photo-booth-rental',
  city: 'Markham',
  heroTitle: 'Photo Booth Rental in Markham',
  heroSubtitle: 'Professional photo booth services with instant prints, custom templates, stunning backdrops, and props for weddings, corporate events, and parties across Markham.',
  description: 'As one of Canada\'s most diverse and tech-savvy cities, Markham deserves a photo booth experience that\'s both culturally aware and technologically advanced. From elegant Chinese banquets at Paradise Banquet Hall to contemporary celebrations in Unionville\'s historic district, we provide photo booth rentals equipped with cutting-edge DSLR technology and instant wireless sharing capabilities. Our service includes bilingual support, culturally appropriate backdrop selections, and templates that can incorporate multiple languages and scripts. Professional attendants understand the flow of various cultural ceremonies, ensuring seamless integration whether you\'re celebrating at Le Parc or a modern venue in Cornell. All images are shared instantly via WeChat, SMS, or email, with comprehensive galleries delivered within 48 hours.',
  venues: venues.markham,
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
      question: 'Do you serve all areas of Markham?',
      answer: 'Yes! We provide photo booth rental services throughout Markham including Unionville, Thornhill, Milliken, Berczy Village, and all surrounding areas. We regularly serve venues like Paradise Banquet Hall Markham, Le Parc Banquet Hall, Cedar Valley Event Centre, and many others across the city.',
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
      answer: 'Absolutely! We design custom print templates at no additional charge. Share your event colors, theme, logos, or any design elements you want, and we\'ll create templates that perfectly match your Markham event.',
    },
    {
      question: 'What backdrop options are available?',
      answer: 'We offer a variety of backdrop options from elegant solid colors to sequined backdrops, florals, and custom designs. View our backdrops page or contact us to discuss options for your Markham event.',
    },
  ],
  relatedServices: [
    {
      name: 'Glam Booth Markham',
      href: '/glam-booth-markham',
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

export default function PhotoBoothRentalMarkham() {
  return (
    <>
      <SchemaMarkup
        schema={serviceSchema(
          'Photo Booth Rental Markham',
          'Professional photo booth rental in Markham with DSLR cameras, instant prints, custom templates, backdrop, props, and professional attendant for weddings, corporate events, and parties.',
          '$550'
        )}
      />
      <ServiceLocationPage data={pageData} />
    </>
  );
}

