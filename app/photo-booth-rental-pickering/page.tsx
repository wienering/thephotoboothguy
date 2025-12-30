import type { Metadata } from 'next';
import ServiceLocationPage, { ServiceLocationData } from '@/components/ServiceLocationPage';
import SchemaMarkup from '@/components/SchemaMarkup';
import { serviceSchema } from '@/lib/schema';
import { venues, standardPackages } from '@/lib/sil-data';

export const metadata: Metadata = {
  title: 'Photo Booth Rental Pickering | Professional Photo Booth Services | The Photobooth Guy',
  description: 'Professional photo booth rental in Pickering with DSLR cameras, instant prints, custom templates, backdrop, props, and professional attendant. Serving Pickering Recreation Complex, Pickering Convention Centre, and venues across Pickering.',
  keywords: 'photo booth rental Pickering, Pickering photo booth, photo booth hire Pickering, wedding photo booth Pickering, corporate photo booth Pickering, instant prints, DSLR camera, professional attendant',
  alternates: {
    canonical: 'https://thephotoboothguy.ca/photo-booth-rental-pickering',
  },
};

const pageData: ServiceLocationData = {
  serviceName: 'Photo Booth Rental',
  serviceSlug: 'photo-booth-rental',
  city: 'Pickering',
  heroTitle: 'Photo Booth Rental in Pickering',
  heroSubtitle: 'Professional photo booth services with instant prints, custom templates, stunning backdrops, and props for weddings, corporate events, and parties across Pickering.',
  description: 'Pickering\'s beautiful lakeside setting and growing community make it an ideal location for memorable celebrations. Our photo booth service brings professional entertainment to venues like Pickering Recreation Complex and Pickering Convention Centre, where families and friends come together to celebrate life\'s special moments. Pickering events often feature close-knit communities who want to capture genuine moments together, and our professional DSLR cameras do exactly that - capturing every smile, laugh, and special interaction with stunning clarity. The dye-sublimation printer delivers vibrant prints that become instant keepsakes, while digital copies are sent to phones immediately so guests can share their photos right away. Our trained attendant ensures everything runs smoothly throughout your Pickering event, so you can focus on enjoying the celebration with your guests.',
  venues: venues.pickering,
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
      question: 'How much does it cost to rent a photo booth in Pickering?',
      answer: 'Photo booth rental in Pickering starts at $550 for our Essential package, which includes 2 hours of service with a professional attendant, instant prints, custom templates, backdrop selection, props, and digital delivery. Our Signature package is $750 for 3 hours, and our Premium package is $950 for 4 hours. All packages include the same high-quality equipment and service - you\'re just choosing how long you need the photo booth at your Pickering event.',
    },
    {
      question: 'What areas of Pickering do you serve for photo booth rentals?',
      answer: 'We provide photo booth rental services throughout all areas of Pickering including the downtown core, Rouge Park, Frenchman\'s Bay, and surrounding neighborhoods. We regularly serve venues like Pickering Recreation Complex, Pickering Convention Centre, Frenchman\'s Bay Yacht Club, and many others across the city. If you\'re planning an event anywhere in Pickering, we can help.',
    },
    {
      question: 'How long does it take to get photo booth prints in Pickering?',
      answer: 'Our dye-sublimation printer produces high-quality prints in approximately 10-15 seconds. Guests receive their custom printed photos almost immediately after taking their picture, and digital copies are sent to their phones or email instantly. There\'s no waiting around - your Pickering event guests get their photos right away.',
    },
    {
      question: 'Can I customize the photo booth print template for my Pickering wedding?',
      answer: 'Absolutely! We design custom print templates at no additional charge for all Pickering events. Just share your wedding colors, theme, logos, or any design elements you want, and we\'ll create templates that perfectly match your Pickering wedding. Many couples include their names, wedding date, or a special message on the templates.',
    },
    {
      question: 'What type of camera do you use for photo booth rentals in Pickering?',
      answer: 'We use professional DSLR cameras with high-quality lenses and professional lighting to ensure every photo looks amazing. The equipment is maintained to the highest standards and tested before every Pickering event. You get the same quality you\'d expect from a professional photographer, but in a fun, interactive photo booth format.',
    },
    {
      question: 'Do you provide a photo booth attendant for events in Pickering?',
      answer: 'Yes! Every photo booth rental in Pickering includes a professional attendant who stays on site for the entire duration of your event. They handle setup, assist guests, troubleshoot any issues, and make sure everything runs smoothly so you can enjoy your celebration without worrying about the photo booth.',
    },
    {
      question: 'What backdrop options are available for photo booth rentals in Pickering?',
      answer: 'We offer a wide variety of backdrop options for Pickering photo booth rentals, from elegant solid colors to sequined backdrops, florals, and custom designs. You can view our backdrops page to see options, or contact us to discuss what would work best for your Pickering event. We can also create custom backdrops if you have something specific in mind.',
    },
  ],
  relatedServices: [
    {
      name: 'Glam Booth Pickering',
      href: '/glam-booth-pickering',
    },
    {
      name: 'Audio Guest Book Pickering',
      href: '/audio-guest-book-pickering',
    },
    {
      name: '360 Booth Pickering',
      href: '/360-booth-pickering',
    },
  ],
};

export default function PhotoBoothRentalPickering() {
  return (
    <>
      <SchemaMarkup
        schema={serviceSchema(
          'Photo Booth Rental Pickering',
          'Professional photo booth rental in Pickering with DSLR cameras, instant prints, custom templates, backdrop, props, and professional attendant for weddings, corporate events, and parties.',
          '$550'
        )}
      />
      <ServiceLocationPage data={pageData} />
    </>
  );
}

