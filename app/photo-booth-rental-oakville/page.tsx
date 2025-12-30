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
      question: 'How much does it cost to rent a photo booth in Oakville?',
      answer: 'Photo booth rental in Oakville starts at $550 for our Essential package, which includes 2 hours of service with a professional attendant, instant prints, custom templates, backdrop selection, props, and digital delivery. Our Signature package is $750 for 3 hours, and our Premium package is $950 for 4 hours. All packages include the same high-quality equipment and service - you\'re just choosing how long you need the photo booth at your Oakville event.',
    },
    {
      question: 'What areas of Oakville do you serve for photo booth rentals?',
      answer: 'We provide photo booth rental services throughout all areas of Oakville including the downtown core, Bronte, Kerr Village, and surrounding neighborhoods. We regularly serve venues like Oakville Conference Centre, Oakville Centre for the Performing Arts, Glen Abbey Golf Club, and many others across the city. If you\'re planning an event anywhere in Oakville, we can help.',
    },
    {
      question: 'How long does it take to get photo booth prints in Oakville?',
      answer: 'Our dye-sublimation printer produces high-quality prints in approximately 10-15 seconds. Guests receive their custom printed photos almost immediately after taking their picture, and digital copies are sent to their phones or email instantly. There\'s no waiting around - your Oakville event guests get their photos right away.',
    },
    {
      question: 'Can I customize the photo booth print template for my Oakville wedding?',
      answer: 'Absolutely! We design custom print templates at no additional charge for all Oakville events. Just share your wedding colors, theme, logos, or any design elements you want, and we\'ll create templates that perfectly match your Oakville wedding. Many couples include their names, wedding date, or a special message on the templates.',
    },
    {
      question: 'What type of camera do you use for photo booth rentals in Oakville?',
      answer: 'We use professional DSLR cameras with high-quality lenses and professional lighting to ensure every photo looks amazing. The equipment is maintained to the highest standards and tested before every Oakville event. You get the same quality you\'d expect from a professional photographer, but in a fun, interactive photo booth format.',
    },
    {
      question: 'Do you provide a photo booth attendant for events in Oakville?',
      answer: 'Yes! Every photo booth rental in Oakville includes a professional attendant who stays on site for the entire duration of your event. They handle setup, assist guests, troubleshoot any issues, and make sure everything runs smoothly so you can enjoy your celebration without worrying about the photo booth.',
    },
    {
      question: 'What backdrop options are available for photo booth rentals in Oakville?',
      answer: 'We offer a wide variety of backdrop options for Oakville photo booth rentals, from elegant solid colors to sequined backdrops, florals, and custom designs. You can view our backdrops page to see options, or contact us to discuss what would work best for your Oakville event. We can also create custom backdrops if you have something specific in mind.',
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

