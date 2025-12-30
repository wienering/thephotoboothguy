import type { Metadata } from 'next';
import ServiceLocationPage, { ServiceLocationData } from '@/components/ServiceLocationPage';
import SchemaMarkup from '@/components/SchemaMarkup';
import { serviceSchema } from '@/lib/schema';
import { venues, standardPackages } from '@/lib/sil-data';

export const metadata: Metadata = {
  title: 'Photo Booth Rental Mississauga | Professional Photo Booth Services | The Photobooth Guy',
  description: 'Professional photo booth rental in Mississauga with DSLR cameras, instant prints, custom templates, backdrop, props, and professional attendant. Serving The Grand Luxe, Living Arts Centre, and venues across Mississauga.',
  keywords: 'photo booth rental Mississauga, Mississauga photo booth, photo booth hire Mississauga, wedding photo booth Mississauga, corporate photo booth Mississauga, instant prints, professional attendant',
  alternates: {
    canonical: 'https://thephotoboothguy.ca/photo-booth-rental-mississauga',
  },
};

const pageData: ServiceLocationData = {
  serviceName: 'Photo Booth Rental',
  serviceSlug: 'photo-booth-rental',
  city: 'Mississauga',
  heroTitle: 'Photo Booth Rental in Mississauga',
  heroSubtitle: 'Professional photo booth services with instant prints, custom templates, stunning backdrops, and props for weddings, corporate events, and parties across Mississauga.',
  description: 'Mississauga\'s diverse event scene deserves a photo booth that understands both elegance and fun. From waterfront celebrations in Port Credit to grand affairs at Renaissance by the Creek, we provide photo booth rentals that adapt to your venue\'s unique character. Our equipment includes professional-grade DSLR cameras optimized for various lighting conditions, fast-printing dye-sublimation technology, and an extensive backdrop collection perfect for Mississauga\'s multicultural celebrations. Each rental includes a professional attendant who ensures your guests from Streetsville to Meadowvale have an amazing experience, with all photos delivered digitally within 48 hours.',
  venues: venues.mississauga,
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
      question: 'How much does it cost to rent a photo booth in Mississauga?',
      answer: 'Photo booth rental in Mississauga starts at $550 for our Essential package, which includes 2 hours of service with a professional attendant, instant prints, custom templates, backdrop selection, props, and digital delivery. Our Signature package is $750 for 3 hours, and our Premium package is $950 for 4 hours. All packages include the same high-quality equipment and service - you\'re just choosing how long you need the photo booth at your Mississauga event.',
    },
    {
      question: 'What areas of Mississauga do you serve for photo booth rentals?',
      answer: 'We provide photo booth rental services throughout all areas of Mississauga including Port Credit, Streetsville, Meadowvale, Erin Mills, and surrounding neighborhoods. We regularly serve venues like The Grand Luxe Event Boutique, Carmen\'s Banquet Centre, Pearson Convention Centre, and many others across the city. If you\'re planning an event anywhere in Mississauga, we can help.',
    },
    {
      question: 'How long does it take to get photo booth prints in Mississauga?',
      answer: 'Our dye-sublimation printer produces high-quality prints in approximately 10-15 seconds. Guests receive their custom printed photos almost immediately after taking their picture, and digital copies are sent to their phones or email instantly. There\'s no waiting around - your Mississauga event guests get their photos right away.',
    },
    {
      question: 'Can I customize the photo booth print template for my Mississauga wedding?',
      answer: 'Absolutely! We design custom print templates at no additional charge for all Mississauga events. Just share your wedding colors, theme, logos, or any design elements you want, and we\'ll create templates that perfectly match your Mississauga wedding. Many couples include their names, wedding date, or a special message on the templates.',
    },
    {
      question: 'What type of camera do you use for photo booth rentals in Mississauga?',
      answer: 'We use professional DSLR cameras with high-quality lenses and professional lighting to ensure every photo looks amazing. The equipment is maintained to the highest standards and tested before every Mississauga event. You get the same quality you\'d expect from a professional photographer, but in a fun, interactive photo booth format.',
    },
    {
      question: 'Do you provide a photo booth attendant for events in Mississauga?',
      answer: 'Yes! Every photo booth rental in Mississauga includes a professional attendant who stays on site for the entire duration of your event. They handle setup, assist guests, troubleshoot any issues, and make sure everything runs smoothly so you can enjoy your celebration without worrying about the photo booth.',
    },
    {
      question: 'What backdrop options are available for photo booth rentals in Mississauga?',
      answer: 'We offer a wide variety of backdrop options for Mississauga photo booth rentals, from elegant solid colors to sequined backdrops, florals, and custom designs. You can view our backdrops page to see options, or contact us to discuss what would work best for your Mississauga event. We can also create custom backdrops if you have something specific in mind.',
    },
  ],
  relatedServices: [
    {
      name: 'Glam Booth Mississauga',
      href: '/glam-booth-mississauga',
    },
    {
      name: 'Audio Guest Book Mississauga',
      href: '/audio-guest-book-mississauga',
    },
    {
      name: '360 Booth Mississauga',
      href: '/360-booth-mississauga',
    },
  ],
};

export default function PhotoBoothRentalMississauga() {
  return (
    <>
      <SchemaMarkup
        schema={serviceSchema(
          'Photo Booth Rental Mississauga',
          'Professional photo booth rental in Mississauga with DSLR cameras, instant prints, custom templates, backdrop, props, and professional attendant for weddings, corporate events, and parties.',
          '$550'
        )}
      />
      <ServiceLocationPage data={pageData} />
    </>
  );
}

