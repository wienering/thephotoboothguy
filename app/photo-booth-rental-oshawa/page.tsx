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
      question: 'How much does it cost to rent a photo booth in Oshawa?',
      answer: 'Photo booth rental in Oshawa starts at $550 for our Essential package, which includes 2 hours of service with a professional attendant, instant prints, custom templates, backdrop selection, props, and digital delivery. Our Signature package is $750 for 3 hours, and our Premium package is $950 for 4 hours. All packages include the same high-quality equipment and service - you\'re just choosing how long you need the photo booth at your Oshawa event.',
    },
    {
      question: 'What areas of Oshawa do you serve for photo booth rentals?',
      answer: 'We provide photo booth rental services throughout all areas of Oshawa including the downtown core, North Oshawa, South Oshawa, and surrounding neighborhoods. We regularly serve venues like Oshawa Convention Centre, Regent Theatre, Oshawa Golf & Curling Club, and many others across the city. If you\'re planning an event anywhere in Oshawa, we can help.',
    },
    {
      question: 'How long does it take to get photo booth prints in Oshawa?',
      answer: 'Our dye-sublimation printer produces high-quality prints in approximately 10-15 seconds. Guests receive their custom printed photos almost immediately after taking their picture, and digital copies are sent to their phones or email instantly. There\'s no waiting around - your Oshawa event guests get their photos right away.',
    },
    {
      question: 'Can I customize the photo booth print template for my Oshawa wedding?',
      answer: 'Absolutely! We design custom print templates at no additional charge for all Oshawa events. Just share your wedding colors, theme, logos, or any design elements you want, and we\'ll create templates that perfectly match your Oshawa wedding. Many couples include their names, wedding date, or a special message on the templates.',
    },
    {
      question: 'What type of camera do you use for photo booth rentals in Oshawa?',
      answer: 'We use professional DSLR cameras with high-quality lenses and professional lighting to ensure every photo looks amazing. The equipment is maintained to the highest standards and tested before every Oshawa event. You get the same quality you\'d expect from a professional photographer, but in a fun, interactive photo booth format.',
    },
    {
      question: 'Do you provide a photo booth attendant for events in Oshawa?',
      answer: 'Yes! Every photo booth rental in Oshawa includes a professional attendant who stays on site for the entire duration of your event. They handle setup, assist guests, troubleshoot any issues, and make sure everything runs smoothly so you can enjoy your celebration without worrying about the photo booth.',
    },
    {
      question: 'What backdrop options are available for photo booth rentals in Oshawa?',
      answer: 'We offer a wide variety of backdrop options for Oshawa photo booth rentals, from elegant solid colors to sequined backdrops, florals, and custom designs. You can view our backdrops page to see options, or contact us to discuss what would work best for your Oshawa event. We can also create custom backdrops if you have something specific in mind.',
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

