import type { Metadata } from 'next';
import ServiceLocationPage, { ServiceLocationData } from '@/components/ServiceLocationPage';
import SchemaMarkup from '@/components/SchemaMarkup';
import { serviceSchema } from '@/lib/schema';
import { venues, standardPackages } from '@/lib/sil-data';

export const metadata: Metadata = {
  title: 'Photo Booth Rental Vaughan | Professional Photo Booth Services | The Photobooth Guy',
  description: 'Professional photo booth rental in Vaughan with DSLR cameras, instant prints, custom templates, backdrop, props, and professional attendant. Serving Paradise Banquet & Convention Centre, The Manor, and venues across Vaughan.',
  keywords: 'photo booth rental Vaughan, Vaughan photo booth, photo booth hire Vaughan, wedding photo booth Vaughan, corporate photo booth Vaughan, instant prints, professional attendant',
  alternates: {
    canonical: 'https://thephotoboothguy.ca/photo-booth-rental-vaughan',
  },
};

const pageData: ServiceLocationData = {
  serviceName: 'Photo Booth Rental',
  serviceSlug: 'photo-booth-rental',
  city: 'Vaughan',
  heroTitle: 'Photo Booth Rental in Vaughan',
  heroSubtitle: 'Professional photo booth services with instant prints, custom templates, stunning backdrops, and props for weddings, corporate events, and parties across Vaughan.',
  description: 'Vaughan\'s elegant venues from Woodbridge to Concord demand a photo booth service that matches their sophistication. We specialize in upscale events at locations like Paradise Convention Centre and The Manor, where attention to detail matters. Our premium photo booth setup features professional DSLR cameras with superior low-light performance, museum-quality print output, and refined backdrop options that complement Vaughan\'s luxurious event spaces. Whether you\'re planning an Italian wedding in Woodbridge, a corporate function in the Vaughan Metropolitan Centre, or an intimate gathering in Maple, our experienced attendants ensure flawless execution. Every guest receives instant digital copies, and you\'ll have access to your complete gallery within 48 hours.',
  venues: venues.vaughan,
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
      question: 'How much does it cost to rent a photo booth in Vaughan?',
      answer: 'Photo booth rental in Vaughan starts at $550 for our Essential package, which includes 2 hours of service with a professional attendant, instant prints, custom templates, backdrop selection, props, and digital delivery. Our Signature package is $750 for 3 hours, and our Premium package is $950 for 4 hours. All packages include the same high-quality equipment and service - you\'re just choosing how long you need the photo booth at your Vaughan event.',
    },
    {
      question: 'What areas of Vaughan do you serve for photo booth rentals?',
      answer: 'We provide photo booth rental services throughout all areas of Vaughan including Woodbridge, Concord, Thornhill, Maple, and surrounding neighborhoods. We regularly serve venues like Paradise Banquet & Convention Centre, The Manor by Peter & Paul\'s, Venetian Banquet Hall, and many others across the city. If you\'re planning an event anywhere in Vaughan, we can help.',
    },
    {
      question: 'How long does it take to get photo booth prints in Vaughan?',
      answer: 'Our dye-sublimation printer produces high-quality prints in approximately 10-15 seconds. Guests receive their custom printed photos almost immediately after taking their picture, and digital copies are sent to their phones or email instantly. There\'s no waiting around - your Vaughan event guests get their photos right away.',
    },
    {
      question: 'Can I customize the photo booth print template for my Vaughan wedding?',
      answer: 'Absolutely! We design custom print templates at no additional charge for all Vaughan events. Just share your wedding colors, theme, logos, or any design elements you want, and we\'ll create templates that perfectly match your Vaughan wedding. Many couples include their names, wedding date, or a special message on the templates.',
    },
    {
      question: 'What type of camera do you use for photo booth rentals in Vaughan?',
      answer: 'We use professional DSLR cameras with high-quality lenses and professional lighting to ensure every photo looks amazing. The equipment is maintained to the highest standards and tested before every Vaughan event. You get the same quality you\'d expect from a professional photographer, but in a fun, interactive photo booth format.',
    },
    {
      question: 'Do you provide a photo booth attendant for events in Vaughan?',
      answer: 'Yes! Every photo booth rental in Vaughan includes a professional attendant who stays on site for the entire duration of your event. They handle setup, assist guests, troubleshoot any issues, and make sure everything runs smoothly so you can enjoy your celebration without worrying about the photo booth.',
    },
    {
      question: 'What backdrop options are available for photo booth rentals in Vaughan?',
      answer: 'We offer a wide variety of backdrop options for Vaughan photo booth rentals, from elegant solid colors to sequined backdrops, florals, and custom designs. You can view our backdrops page to see options, or contact us to discuss what would work best for your Vaughan event. We can also create custom backdrops if you have something specific in mind.',
    },
  ],
  relatedServices: [
    {
      name: 'Glam Booth Vaughan',
      href: '/glam-booth-vaughan',
    },
    {
      name: 'Audio Guest Book Vaughan',
      href: '/audio-guest-book-vaughan',
    },
    {
      name: '360 Booth Vaughan',
      href: '/360-booth-vaughan',
    },
  ],
};

export default function PhotoBoothRentalVaughan() {
  return (
    <>
      <SchemaMarkup
        schema={serviceSchema(
          'Photo Booth Rental Vaughan',
          'Professional photo booth rental in Vaughan with DSLR cameras, instant prints, custom templates, backdrop, props, and professional attendant for weddings, corporate events, and parties.',
          '$550'
        )}
      />
      <ServiceLocationPage data={pageData} />
    </>
  );
}

