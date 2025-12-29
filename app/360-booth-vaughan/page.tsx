import type { Metadata } from 'next';
import ServiceLocationPage, { ServiceLocationData } from '@/components/ServiceLocationPage';
import SchemaMarkup from '@/components/SchemaMarkup';
import { serviceSchema } from '@/lib/schema';
import { venues, booth360Packages } from '@/lib/sil-data';

export const metadata: Metadata = {
  title: '360 Video Booth Vaughan | 360 Photo Booth Rental | The Photobooth Guy',
  description: '360 video booth rental in Vaughan with professional camera arm, instant video delivery, and premium platform. Perfect for weddings, corporate events, and parties at Vaughan venues including Paradise Convention Centre and The Manor.',
  keywords: '360 booth Vaughan, 360 video booth Vaughan, 360 photo booth rental Vaughan, spinning photo booth, 360 camera booth, corporate 360 booth Vaughan',
};

const pageData: ServiceLocationData = {
  serviceName: '360 Video Booth',
  serviceSlug: '360-booth',
  city: 'Vaughan',
  heroTitle: '360 Video Booth in Vaughan',
  heroSubtitle: 'Create stunning slow-motion 360-degree videos at your Vaughan event. Professional camera arm, instant video delivery, and unforgettable entertainment for weddings, corporate events, and parties.',
  description: 'Take your Vaughan event to the next level with our professional 360 video booth. Guests step onto a premium platform while our high-speed camera rotates around them, capturing stunning slow-motion video from every angle. Perfect for weddings, corporate events, product launches, and parties across Vaughan. Each package includes a professional camera arm, trained attendant on site, instant video delivery to guests via text or email, professional lighting, premium platform with safety features, props, and a complete digital gallery after your event.',
  venues: venues.vaughan,
  features: [
    {
      icon: '🎥',
      title: 'Professional Camera Arm',
      description: 'High-speed rotating camera arm captures smooth 360-degree slow-motion video, creating cinematic content your guests will love.',
    },
    {
      icon: '⭕',
      title: 'Premium Platform',
      description: 'Sturdy, safe platform designed for 1-4 people with professional finish. Safety features ensure guests feel secure during their 360 video.',
    },
    {
      icon: '💡',
      title: 'Professional Lighting',
      description: 'Strategic lighting setup enhances video quality and creates dramatic effects that make every 360 video look incredible.',
    },
    {
      icon: '📱',
      title: 'Instant Video Delivery',
      description: 'Videos are processed immediately and sent to guests via text message or email - they can share on social media right away.',
    },
    {
      icon: '👤',
      title: 'Professional Attendant',
      description: 'Experienced attendant operates the 360 booth, guides guests, ensures safety, and maintains smooth operation throughout your event.',
    },
    {
      icon: '🎭',
      title: 'Props & Accessories',
      description: 'Fun props and accessories provided to help guests create entertaining, creative 360 videos at your Vaughan event.',
    },
  ],
  packages: booth360Packages,
  faqs: [
    {
      question: 'How does the 360 video booth work?',
      answer: 'Guests step onto the premium platform (up to 4 people at once), strike a pose or perform an action, and our high-speed camera rotates 360 degrees around them capturing slow-motion video. The video is processed instantly and sent directly to their phone or email within seconds. It creates stunning, shareable content that guests love.',
    },
    {
      question: 'How much space is needed for the 360 booth?',
      answer: 'We recommend a space of approximately 12ft x 12ft for optimal setup and guest safety. The platform itself is compact, but we need clearance for the camera arm rotation and space for guests to queue. Our team will work with you to find the perfect spot at your Vaughan venue.',
    },
    {
      question: 'Is the 360 booth safe?',
      answer: 'Absolutely! Safety is our top priority. Our premium platform features a non-slip surface, is extremely sturdy, and can safely hold multiple people. Our professional attendant is on site to guide guests, ensure proper use, and maintain safety throughout your Vaughan event.',
    },
    {
      question: 'Can we customize the videos with overlays or branding?',
      answer: 'Yes! We can add custom overlays, logos, event hashtags, and branding to the 360 videos. This is perfect for corporate events, brand activations, and weddings where you want personalized content. Share your vision and we\'ll create custom video overlays for your Vaughan event.',
    },
    {
      question: 'Will the 360 booth work at outdoor Vaughan venues?',
      answer: 'The 360 video booth can work outdoors under certain conditions - it needs to be covered (tent or overhang) and on flat, stable ground. Weather conditions and lighting must be suitable. We regularly set up at both indoor and covered outdoor venues across Vaughan. Contact us to discuss your specific venue.',
    },
  ],
  relatedServices: [
    {
      name: 'Photo Booth Rental Vaughan',
      href: '/photo-booth-rental-vaughan',
    },
    {
      name: 'Glam Booth Vaughan',
      href: '/glam-booth-vaughan',
    },
    {
      name: 'Audio Guest Book Vaughan',
      href: '/audio-guest-book-vaughan',
    },
  ],
};

export default function Booth360Vaughan() {
  return (
    <>
      <SchemaMarkup
        schema={serviceSchema(
          '360 Video Booth Vaughan',
          '360 video booth rental in Vaughan with professional camera arm, instant video delivery, premium platform, lighting, and attendant for weddings and corporate events.',
          '$750'
        )}
      />
      <ServiceLocationPage data={pageData} />
    </>
  );
}

