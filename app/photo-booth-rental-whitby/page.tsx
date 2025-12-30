import type { Metadata } from 'next';
import ServiceLocationPage, { ServiceLocationData } from '@/components/ServiceLocationPage';
import SchemaMarkup from '@/components/SchemaMarkup';
import { serviceSchema } from '@/lib/schema';
import { venues, standardPackages } from '@/lib/sil-data';

export const metadata: Metadata = {
  title: 'Photo Booth Rental Whitby | Professional Photo Booth Services | The Photobooth Guy',
  description: 'Professional photo booth rental in Whitby with DSLR cameras, instant prints, custom templates, backdrop, props, and professional attendant. Serving Whitby Convention Centre, Iroquois Park Sports Centre, and venues across Whitby.',
  keywords: 'photo booth rental Whitby, Whitby photo booth, photo booth hire Whitby, wedding photo booth Whitby, corporate photo booth Whitby, instant prints, DSLR camera, professional attendant',
  alternates: {
    canonical: 'https://thephotoboothguy.ca/photo-booth-rental-whitby',
  },
};

const pageData: ServiceLocationData = {
  serviceName: 'Photo Booth Rental',
  serviceSlug: 'photo-booth-rental',
  city: 'Whitby',
  heroTitle: 'Photo Booth Rental in Whitby',
  heroSubtitle: 'Professional photo booth services with instant prints, custom templates, stunning backdrops, and props for weddings, corporate events, and parties across Whitby.',
  description: 'Whitby\'s charming downtown and beautiful waterfront setting make it an ideal location for memorable celebrations. Our photo booth service brings professional entertainment to venues like Whitby Convention Centre and Iroquois Park Sports Centre, where families and friends come together to celebrate life\'s special moments. Whitby events often feature close-knit communities who want to capture genuine moments together, and our professional DSLR cameras do exactly that - capturing every smile, laugh, and special interaction with stunning clarity. The dye-sublimation printer delivers vibrant prints that become instant keepsakes, while digital copies are sent to phones immediately so guests can share their photos right away. Our trained attendant ensures everything runs smoothly throughout your Whitby event, so you can focus on enjoying the celebration with your guests.',
  venues: venues.whitby,
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
      question: 'Do you serve all areas of Whitby?',
      answer: 'Yes! We provide photo booth rental services throughout Whitby including the downtown core, Port Whitby, Brooklin, and all surrounding neighborhoods. We regularly serve venues like Whitby Convention Centre, Iroquois Park Sports Centre, Whitby Golf & Country Club, and many others across the town.',
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
      answer: 'Absolutely! We design custom print templates at no additional charge. Share your event colors, theme, logos, or any design elements you want, and we\'ll create templates that perfectly match your Whitby event.',
    },
    {
      question: 'What backdrop options are available?',
      answer: 'We offer a variety of backdrop options from elegant solid colors to sequined backdrops, florals, and custom designs. View our backdrops page or contact us to discuss options for your Whitby event.',
    },
  ],
  relatedServices: [
    {
      name: 'Glam Booth Whitby',
      href: '/glam-booth-whitby',
    },
    {
      name: 'Audio Guest Book Whitby',
      href: '/audio-guest-book-whitby',
    },
    {
      name: '360 Booth Whitby',
      href: '/360-booth-whitby',
    },
  ],
};

export default function PhotoBoothRentalWhitby() {
  return (
    <>
      <SchemaMarkup
        schema={serviceSchema(
          'Photo Booth Rental Whitby',
          'Professional photo booth rental in Whitby with DSLR cameras, instant prints, custom templates, backdrop, props, and professional attendant for weddings, corporate events, and parties.',
          '$550'
        )}
      />
      <ServiceLocationPage data={pageData} />
    </>
  );
}

