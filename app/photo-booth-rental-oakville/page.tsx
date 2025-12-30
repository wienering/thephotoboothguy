import type { Metadata } from 'next';
import ServiceLocationPage, { ServiceLocationData } from '@/components/ServiceLocationPage';
import SchemaMarkup from '@/components/SchemaMarkup';
import { serviceSchema } from '@/lib/schema';
import { venues, standardPackages } from '@/lib/sil-data';

export const metadata: Metadata = {
  title: 'Photo Booth Rental Oakville | Professional Photo Booth Services | The Photobooth Guy',
  description: 'Professional photo booth rental in Oakville with DSLR cameras, instant prints, custom templates, backdrop, props, and professional attendant. Serving Oakville Conference Centre, Oakville Centre, and venues across the city.',
  keywords: 'photo booth rental Oakville, Oakville photo booth, photo booth hire Oakville, wedding photo booth Oakville, corporate photo booth Oakville, instant prints, DSLR camera, professional attendant',
  alternates: {
    canonical: 'https://thephotoboothguy.ca/photo-booth-rental-oakville',
  },
};

const pageData: ServiceLocationData = {
  serviceName: 'Photo Booth Rental',
  serviceSlug: 'photo-booth-rental',
  city: 'Oakville',
  heroTitle: 'Photo Booth Rental in Oakville',
  heroSubtitle: 'Professional photo booth services with instant prints, custom templates, stunning backdrops, and props for weddings, corporate events, and parties across Oakville.',
  description: 'Oakville\'s sophisticated lakeside community and thriving business district create the perfect backdrop for memorable events. Our photo booth service brings professional entertainment to venues like Oakville Conference Centre and Oakville Centre for the Performing Arts, where elegance meets functionality. Oakville events often attract guests who appreciate quality and attention to detail - from lakeside weddings at Glen Abbey Golf Club to corporate gatherings at the Conference Centre. Our professional DSLR cameras capture every moment with stunning clarity, the dye-sublimation printer delivers vibrant prints that become instant keepsakes, and our trained attendant ensures seamless operation so you can enjoy your Oakville event without worry. Whether you\'re hosting an intimate gathering or a large celebration, we bring the same level of professionalism and quality that Oakville residents expect.',
  venues: venues.oakville,
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
      question: 'Do you serve all areas of Oakville?',
      answer: 'Yes! We provide photo booth rental services throughout Oakville including the downtown core, Bronte, Kerr Village, and all surrounding neighborhoods. We regularly serve venues like Oakville Conference Centre, Oakville Centre for the Performing Arts, Glen Abbey Golf Club, and many others across the city.',
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
      answer: 'Absolutely! We design custom print templates at no additional charge. Share your event colors, theme, logos, or any design elements you want, and we\'ll create templates that perfectly match your Oakville event.',
    },
    {
      question: 'What backdrop options are available?',
      answer: 'We offer a variety of backdrop options from elegant solid colors to sequined backdrops, florals, and custom designs. View our backdrops page or contact us to discuss options for your Oakville event.',
    },
  ],
  relatedServices: [
    {
      name: 'Glam Booth Oakville',
      href: '/glam-booth-oakville',
    },
    {
      name: 'Audio Guest Book Oakville',
      href: '/audio-guest-book-oakville',
    },
    {
      name: '360 Booth Oakville',
      href: '/360-booth-oakville',
    },
  ],
};

export default function PhotoBoothRentalOakville() {
  return (
    <>
      <SchemaMarkup
        schema={serviceSchema(
          'Photo Booth Rental Oakville',
          'Professional photo booth rental in Oakville with DSLR cameras, instant prints, custom templates, backdrop, props, and professional attendant for weddings, corporate events, and parties.',
          '$550'
        )}
      />
      <ServiceLocationPage data={pageData} />
    </>
  );
}

