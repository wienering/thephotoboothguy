import type { Metadata } from 'next';
import ServiceLocationPage, { ServiceLocationData } from '@/components/ServiceLocationPage';
import SchemaMarkup from '@/components/SchemaMarkup';
import { serviceSchema } from '@/lib/schema';
import { venues, standardPackages } from '@/lib/sil-data';

export const metadata: Metadata = {
  title: 'Photo Booth Rental Scarborough | Professional Photo Booth Services | The Photobooth Guy',
  description: 'Professional photo booth rental in Scarborough with DSLR cameras, instant prints, custom templates, backdrop, props, and professional attendant. Serving Scarborough Convention Centre, Toronto Congress Centre, and venues across Scarborough.',
  keywords: 'photo booth rental Scarborough, Scarborough photo booth, photo booth hire Scarborough, wedding photo booth Scarborough, corporate photo booth Scarborough, instant prints, DSLR camera, professional attendant',
  alternates: {
    canonical: 'https://thephotoboothguy.ca/photo-booth-rental-scarborough',
  },
};

const pageData: ServiceLocationData = {
  serviceName: 'Photo Booth Rental',
  serviceSlug: 'photo-booth-rental',
  city: 'Scarborough',
  heroTitle: 'Photo Booth Rental in Scarborough',
  heroSubtitle: 'Professional photo booth services with instant prints, custom templates, stunning backdrops, and props for weddings, corporate events, and parties across Scarborough.',
  description: 'Scarborough\'s vibrant multicultural community and diverse event venues make it an ideal location for memorable celebrations. Our photo booth service brings professional entertainment to venues like Scarborough Convention Centre and Toronto Congress Centre, where families and businesses come together to celebrate. Scarborough events often feature large, extended families who want to capture moments across generations, and our professional DSLR cameras do exactly that - capturing every smile, laugh, and special interaction with stunning clarity. The dye-sublimation printer delivers vibrant prints that become instant keepsakes, while digital copies are sent to phones immediately so guests can share their photos right away. Our trained attendant ensures everything runs smoothly throughout your Scarborough event, handling setup, operation, and any questions from guests so you can focus on enjoying the celebration.',
  venues: venues.scarborough,
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
      question: 'How much does it cost to rent a photo booth in Scarborough?',
      answer: 'Photo booth rental in Scarborough starts at $550 for our Essential package, which includes 2 hours of service with a professional attendant, instant prints, custom templates, backdrop selection, props, and digital delivery. Our Signature package is $750 for 3 hours, and our Premium package is $950 for 4 hours. All packages include the same high-quality equipment and service - you\'re just choosing how long you need the photo booth at your Scarborough event.',
    },
    {
      question: 'What areas of Scarborough do you serve for photo booth rentals?',
      answer: 'We provide photo booth rental services throughout all areas of Scarborough including Scarborough Town Centre, Agincourt, Malvern, Guildwood, and surrounding neighborhoods. We regularly serve venues like Scarborough Convention Centre, Toronto Congress Centre, The Guild Inn Estate, and many others across the area. If you\'re planning an event anywhere in Scarborough, we can help.',
    },
    {
      question: 'How long does it take to get photo booth prints in Scarborough?',
      answer: 'Our dye-sublimation printer produces high-quality prints in approximately 10-15 seconds. Guests receive their custom printed photos almost immediately after taking their picture, and digital copies are sent to their phones or email instantly. There\'s no waiting around - your Scarborough event guests get their photos right away.',
    },
    {
      question: 'Can I customize the photo booth print template for my Scarborough wedding?',
      answer: 'Absolutely! We design custom print templates at no additional charge for all Scarborough events. Just share your wedding colors, theme, logos, or any design elements you want, and we\'ll create templates that perfectly match your Scarborough wedding. Many couples include their names, wedding date, or a special message on the templates.',
    },
    {
      question: 'What type of camera do you use for photo booth rentals in Scarborough?',
      answer: 'We use professional DSLR cameras with high-quality lenses and professional lighting to ensure every photo looks amazing. The equipment is maintained to the highest standards and tested before every Scarborough event. You get the same quality you\'d expect from a professional photographer, but in a fun, interactive photo booth format.',
    },
    {
      question: 'Do you provide a photo booth attendant for events in Scarborough?',
      answer: 'Yes! Every photo booth rental in Scarborough includes a professional attendant who stays on site for the entire duration of your event. They handle setup, assist guests, troubleshoot any issues, and make sure everything runs smoothly so you can enjoy your celebration without worrying about the photo booth.',
    },
    {
      question: 'What backdrop options are available for photo booth rentals in Scarborough?',
      answer: 'We offer a wide variety of backdrop options for Scarborough photo booth rentals, from elegant solid colors to sequined backdrops, florals, and custom designs. You can view our backdrops page to see options, or contact us to discuss what would work best for your Scarborough event. We can also create custom backdrops if you have something specific in mind.',
    },
  ],
  relatedServices: [
    {
      name: 'Glam Booth Scarborough',
      href: '/glam-booth-scarborough',
    },
    {
      name: 'Audio Guest Book Scarborough',
      href: '/audio-guest-book-scarborough',
    },
    {
      name: '360 Booth Scarborough',
      href: '/360-booth-scarborough',
    },
  ],
};

export default function PhotoBoothRentalScarborough() {
  return (
    <>
      <SchemaMarkup
        schema={serviceSchema(
          'Photo Booth Rental Scarborough',
          'Professional photo booth rental in Scarborough with DSLR cameras, instant prints, custom templates, backdrop, props, and professional attendant for weddings, corporate events, and parties.',
          '$550'
        )}
      />
      <ServiceLocationPage data={pageData} />
    </>
  );
}

