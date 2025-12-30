import type { Metadata } from 'next';
import ServiceLocationPage, { ServiceLocationData } from '@/components/ServiceLocationPage';
import SchemaMarkup from '@/components/SchemaMarkup';
import { serviceSchema } from '@/lib/schema';
import { venues, standardPackages } from '@/lib/sil-data';

export const metadata: Metadata = {
  title: 'Photo Booth Rental Brampton | Professional Photo Booth Services | The Photobooth Guy',
  description: 'Professional photo booth rental in Brampton with DSLR cameras, instant prints, custom templates, backdrop, props, and professional attendant. Serving Great Hall, Terrace Banquet Hall, and venues across Brampton.',
  keywords: 'photo booth rental Brampton, Brampton photo booth, photo booth hire Brampton, wedding photo booth Brampton, corporate photo booth Brampton, instant prints, professional attendant',
  alternates: {
    canonical: 'https://thephotoboothguy.ca/photo-booth-rental-brampton',
  },
};

const pageData: ServiceLocationData = {
  serviceName: 'Photo Booth Rental',
  serviceSlug: 'photo-booth-rental',
  city: 'Brampton',
  heroTitle: 'Photo Booth Rental in Brampton',
  heroSubtitle: 'Professional photo booth services with instant prints, custom templates, stunning backdrops, and props for weddings, corporate events, and parties across Brampton.',
  description: 'Brampton\'s vibrant community knows how to celebrate, and our photo booth rental service is built for your city\'s energetic events. Whether you\'re hosting a traditional ceremony at Great Hall or a modern celebration in Bramalea, we deliver professional photo booth experiences that honor your cultural traditions while embracing contemporary technology. Our DSLR cameras capture the vibrant colors of South Asian celebrations, African weddings, and Caribbean parties with stunning clarity. With instant printing, customizable templates in multiple languages, and professional attendants familiar with diverse ceremony styles, we\'ve become Brampton\'s trusted photo booth provider for weddings, corporate events, and community celebrations.',
  venues: venues.brampton,
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
      question: 'How much does it cost to rent a photo booth in Brampton?',
      answer: 'Photo booth rental in Brampton starts at $550 for our Essential package, which includes 2 hours of service with a professional attendant, instant prints, custom templates, backdrop selection, props, and digital delivery. Our Signature package is $750 for 3 hours, and our Premium package is $950 for 4 hours. All packages include the same high-quality equipment and service - you\'re just choosing how long you need the photo booth at your Brampton event.',
    },
    {
      question: 'What areas of Brampton do you serve for photo booth rentals?',
      answer: 'We provide photo booth rental services throughout all areas of Brampton including Downtown Brampton, Bramalea, Heart Lake, Springdale, and surrounding neighborhoods. We regularly serve venues like Great Hall Banquet & Convention Centre, Terrace Banquet Hall, Rose Theatre, and many others across the city. If you\'re planning an event anywhere in Brampton, we can help.',
    },
    {
      question: 'How long does it take to get photo booth prints in Brampton?',
      answer: 'Our dye-sublimation printer produces high-quality prints in approximately 10-15 seconds. Guests receive their custom printed photos almost immediately after taking their picture, and digital copies are sent to their phones or email instantly. There\'s no waiting around - your Brampton event guests get their photos right away.',
    },
    {
      question: 'Can I customize the photo booth print template for my Brampton wedding?',
      answer: 'Absolutely! We design custom print templates at no additional charge for all Brampton events. Just share your wedding colors, theme, logos, or any design elements you want, and we\'ll create templates that perfectly match your Brampton wedding. Many couples include their names, wedding date, or a special message on the templates.',
    },
    {
      question: 'What type of camera do you use for photo booth rentals in Brampton?',
      answer: 'We use professional DSLR cameras with high-quality lenses and professional lighting to ensure every photo looks amazing. The equipment is maintained to the highest standards and tested before every Brampton event. You get the same quality you\'d expect from a professional photographer, but in a fun, interactive photo booth format.',
    },
    {
      question: 'Do you provide a photo booth attendant for events in Brampton?',
      answer: 'Yes! Every photo booth rental in Brampton includes a professional attendant who stays on site for the entire duration of your event. They handle setup, assist guests, troubleshoot any issues, and make sure everything runs smoothly so you can enjoy your celebration without worrying about the photo booth.',
    },
    {
      question: 'What backdrop options are available for photo booth rentals in Brampton?',
      answer: 'We offer a wide variety of backdrop options for Brampton photo booth rentals, from elegant solid colors to sequined backdrops, florals, and custom designs. You can view our backdrops page to see options, or contact us to discuss what would work best for your Brampton event. We can also create custom backdrops if you have something specific in mind.',
    },
  ],
  relatedServices: [
    {
      name: 'Glam Booth Brampton',
      href: '/glam-booth-brampton',
    },
    {
      name: 'Audio Guest Book Brampton',
      href: '/audio-guest-book-brampton',
    },
    {
      name: '360 Booth Brampton',
      href: '/360-booth-brampton',
    },
  ],
};

export default function PhotoBoothRentalBrampton() {
  return (
    <>
      <SchemaMarkup
        schema={serviceSchema(
          'Photo Booth Rental Brampton',
          'Professional photo booth rental in Brampton with DSLR cameras, instant prints, custom templates, backdrop, props, and professional attendant for weddings, corporate events, and parties.',
          '$550'
        )}
      />
      <ServiceLocationPage data={pageData} />
    </>
  );
}

