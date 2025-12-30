import type { Metadata } from 'next';
import ServiceLocationPage, { ServiceLocationData } from '@/components/ServiceLocationPage';
import SchemaMarkup from '@/components/SchemaMarkup';
import { serviceSchema } from '@/lib/schema';
import { venues, standardPackages } from '@/lib/sil-data';

export const metadata: Metadata = {
  title: 'Photo Booth Rental Markham | Professional Photo Booth Services | The Photobooth Guy',
  description: 'Professional photo booth rental in Markham with DSLR cameras, instant prints, custom templates, backdrop, props, and professional attendant. Serving Flato Markham Theatre, Paradise Banquet Hall, and venues across Markham.',
  keywords: 'photo booth rental Markham, Markham photo booth, photo booth hire Markham, wedding photo booth Markham, corporate photo booth Markham, instant prints, professional attendant',
  alternates: {
    canonical: 'https://thephotoboothguy.ca/photo-booth-rental-markham',
  },
};

const pageData: ServiceLocationData = {
  serviceName: 'Photo Booth Rental',
  serviceSlug: 'photo-booth-rental',
  city: 'Markham',
  heroTitle: 'Photo Booth Rental in Markham',
  heroSubtitle: 'Professional photo booth services with instant prints, custom templates, stunning backdrops, and props for weddings, corporate events, and parties across Markham.',
  description: 'Markham\'s growing community and beautiful venues make it a great place to celebrate. Our photo booth service brings professional entertainment to venues like Paradise Banquet Hall and Le Parc, where families and friends come together for weddings, corporate events, and special occasions. We bring professional DSLR cameras that capture every moment with stunning clarity, dye-sublimation printers that deliver vibrant prints in seconds, and custom templates designed to match your event perfectly. Our trained attendant handles everything on site, so you can relax and enjoy your Markham celebration. Whether you\'re hosting an intimate gathering or a large party, we make sure every guest gets great photos they can take home and share instantly via text or email.',
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
      question: 'How much does it cost to rent a photo booth in Markham?',
      answer: 'Photo booth rental in Markham starts at $550 for our Essential package, which includes 2 hours of service with a professional attendant, instant prints, custom templates, backdrop selection, props, and digital delivery. Our Signature package is $750 for 3 hours, and our Premium package is $950 for 4 hours. All packages include the same high-quality equipment and service - you\'re just choosing how long you need the photo booth at your Markham event.',
    },
    {
      question: 'What areas of Markham do you serve for photo booth rentals?',
      answer: 'We provide photo booth rental services throughout all areas of Markham including Unionville, Thornhill, Milliken, Berczy Village, and surrounding neighborhoods. We regularly serve venues like Paradise Banquet Hall Markham, Le Parc Banquet Hall, Cedar Valley Event Centre, and many others across the city. If you\'re planning an event anywhere in Markham, we can help.',
    },
    {
      question: 'How long does it take to get photo booth prints in Markham?',
      answer: 'Our dye-sublimation printer produces high-quality prints in approximately 10-15 seconds. Guests receive their custom printed photos almost immediately after taking their picture, and digital copies are sent to their phones or email instantly. There\'s no waiting around - your Markham event guests get their photos right away.',
    },
    {
      question: 'Can I customize the photo booth print template for my Markham wedding?',
      answer: 'Absolutely! We design custom print templates at no additional charge for all Markham events. Just share your wedding colors, theme, logos, or any design elements you want, and we\'ll create templates that perfectly match your Markham wedding. Many couples include their names, wedding date, or a special message on the templates.',
    },
    {
      question: 'What type of camera do you use for photo booth rentals in Markham?',
      answer: 'We use professional DSLR cameras with high-quality lenses and professional lighting to ensure every photo looks amazing. The equipment is maintained to the highest standards and tested before every Markham event. You get the same quality you\'d expect from a professional photographer, but in a fun, interactive photo booth format.',
    },
    {
      question: 'Do you provide a photo booth attendant for events in Markham?',
      answer: 'Yes! Every photo booth rental in Markham includes a professional attendant who stays on site for the entire duration of your event. They handle setup, assist guests, troubleshoot any issues, and make sure everything runs smoothly so you can enjoy your celebration without worrying about the photo booth.',
    },
    {
      question: 'What backdrop options are available for photo booth rentals in Markham?',
      answer: 'We offer a wide variety of backdrop options for Markham photo booth rentals, from elegant solid colors to sequined backdrops, florals, and custom designs. You can view our backdrops page to see options, or contact us to discuss what would work best for your Markham event. We can also create custom backdrops if you have something specific in mind.',
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

