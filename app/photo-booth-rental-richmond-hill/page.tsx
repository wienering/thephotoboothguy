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
      question: 'How much does it cost to rent a photo booth in Richmond Hill?',
      answer: 'Photo booth rental in Richmond Hill starts at $550 for our Essential package, which includes 2 hours of service with a professional attendant, instant prints, custom templates, backdrop selection, props, and digital delivery. Our Signature package is $750 for 3 hours, and our Premium package is $950 for 4 hours. All packages include the same high-quality equipment and service - you\'re just choosing how long you need the photo booth at your Richmond Hill event.',
    },
    {
      question: 'What areas of Richmond Hill do you serve for photo booth rentals?',
      answer: 'We provide photo booth rental services throughout all areas of Richmond Hill including the Yonge Street corridor, Oak Ridges, and surrounding neighborhoods. We regularly serve venues like Richmond Hill Centre for the Performing Arts, Richmond Green Sports Centre, and many others across the city. If you\'re planning an event anywhere in Richmond Hill, we can help.',
    },
    {
      question: 'How long does it take to get photo booth prints in Richmond Hill?',
      answer: 'Our dye-sublimation printer produces high-quality prints in approximately 10-15 seconds. Guests receive their custom printed photos almost immediately after taking their picture, and digital copies are sent to their phones or email instantly. There\'s no waiting around - your Richmond Hill event guests get their photos right away.',
    },
    {
      question: 'Can I customize the photo booth print template for my Richmond Hill wedding?',
      answer: 'Absolutely! We design custom print templates at no additional charge for all Richmond Hill events. Just share your wedding colors, theme, logos, or any design elements you want, and we\'ll create templates that perfectly match your Richmond Hill wedding. Many couples include their names, wedding date, or a special message on the templates.',
    },
    {
      question: 'What type of camera do you use for photo booth rentals in Richmond Hill?',
      answer: 'We use professional DSLR cameras with high-quality lenses and professional lighting to ensure every photo looks amazing. The equipment is maintained to the highest standards and tested before every Richmond Hill event. You get the same quality you\'d expect from a professional photographer, but in a fun, interactive photo booth format.',
    },
    {
      question: 'Do you provide a photo booth attendant for events in Richmond Hill?',
      answer: 'Yes! Every photo booth rental in Richmond Hill includes a professional attendant who stays on site for the entire duration of your event. They handle setup, assist guests, troubleshoot any issues, and make sure everything runs smoothly so you can enjoy your celebration without worrying about the photo booth.',
    },
    {
      question: 'What backdrop options are available for photo booth rentals in Richmond Hill?',
      answer: 'We offer a wide variety of backdrop options for Richmond Hill photo booth rentals, from elegant solid colors to sequined backdrops, florals, and custom designs. You can view our backdrops page to see options, or contact us to discuss what would work best for your Richmond Hill event. We can also create custom backdrops if you have something specific in mind.',
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

