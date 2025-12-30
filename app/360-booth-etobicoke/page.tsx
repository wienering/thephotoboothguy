import type { Metadata } from 'next';
import ServiceLocationPage, { ServiceLocationData } from '@/components/ServiceLocationPage';
import SchemaMarkup from '@/components/SchemaMarkup';
import { serviceSchema } from '@/lib/schema';
import { venues, booth360Packages } from '@/lib/sil-data';

export const metadata: Metadata = {
  title: '360 Video Booth Etobicoke | 360 Photo Booth Rental | The Photobooth Guy',
  description: '360 video booth rental in Etobicoke with professional camera arm, instant video delivery, and premium platform. Perfect for weddings, corporate events, and parties at Etobicoke venues including The Old Mill and Humber Valley Golf Club.',
  keywords: '360 booth Etobicoke, 360 video booth Etobicoke, 360 photo booth rental Etobicoke, spinning photo booth, 360 camera booth, corporate 360 booth Etobicoke',
  alternates: {
    canonical: 'https://thephotoboothguy.ca/360-booth-etobicoke',
  },
};

const pageData: ServiceLocationData = {
  serviceName: '360 Video Booth',
  serviceSlug: '360-booth',
  city: 'Etobicoke',
  heroTitle: '360 Video Booth in Etobicoke',
  heroSubtitle: 'Create stunning slow-motion 360-degree videos at your Etobicoke event. Professional camera arm, instant video delivery, and unforgettable entertainment for weddings, corporate events, and parties.',
  description: 'Etobicoke\'s modern, diverse community embraces innovative entertainment, making our 360 video booth the perfect addition to events at The Old Mill Toronto, Humber Valley Golf Club, and venues throughout Etobicoke. The rotating camera captures guests from every angle in stunning slow-motion, creating shareable content that becomes the highlight of your Etobicoke event. Whether you\'re hosting a wedding where families want to capture multi-generational moments, a corporate function, or a milestone celebration, our 360 booth delivers viral-worthy content that guests can\'t wait to share. The premium platform safely accommodates groups up to 4 people, professional lighting ensures gallery-quality results regardless of venue lighting, and videos are processed and sent to guests\' phones within seconds. Perfect for Etobicoke\'s social media-savvy crowd who want instant, shareable content that stands out.',
  venues: venues.etobicoke,
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
      description: 'Fun props and accessories provided to help guests create entertaining, creative 360 videos at your Etobicoke event.',
    },
  ],
  packages: booth360Packages,
  faqs: [
    {
      question: 'How much does a 360 video booth cost in Etobicoke?',
      answer: '360 video booth rental in Etobicoke starts at $750 for our Essential package (2 hours), $950 for Signature (3 hours), and $1,150 for Premium (4 hours). All packages include the professional 360 video booth with camera arm, premium platform, professional lighting, instant video delivery, props, and a professional attendant. It\'s the most unique and shareable entertainment option for Etobicoke events.',
    },
    {
      question: 'How does the 360 video booth work at a Etobicoke event?',
      answer: 'Guests step onto the premium platform (up to 4 people at once), strike a pose or perform an action, and our high-speed camera rotates 360 degrees around them capturing slow-motion video. The video is processed instantly and sent directly to their phone or email within seconds. It creates stunning, shareable content that guests love and immediately post on social media.',
    },
    {
      question: 'How much space do I need for a 360 booth at my Etobicoke venue?',
      answer: 'We recommend a space of approximately 12ft x 12ft for optimal setup and guest safety. The platform itself is compact, but we need clearance for the camera arm rotation and space for guests to queue. Our team will work with you to find the perfect spot at your Etobicoke venue - we\'ve set up at many venues across the area and can usually make it work.',
    },
    {
      question: 'Is the 360 video booth safe for guests in Etobicoke?',
      answer: 'Absolutely! Safety is our top priority. Our premium platform features a non-slip surface, is extremely sturdy, and can safely hold multiple people. Our professional attendant is on site to guide guests, ensure proper use, and maintain safety throughout your Etobicoke event. We\'ve never had a safety incident and take every precaution.',
    },
    {
      question: 'Can I customize the 360 booth videos with my wedding hashtag or logo in Etobicoke?',
      answer: 'Yes! We can add custom overlays, logos, event hashtags, and branding to the 360 videos. This is perfect for corporate events, brand activations, and weddings where you want personalized content. Share your vision and we\'ll create custom video overlays for your Etobicoke event. Many couples add their wedding hashtag or names to make the videos even more special.',
    },
    {
      question: 'Can I use a 360 booth at an outdoor venue in Etobicoke?',
      answer: 'The 360 video booth can work outdoors under certain conditions - it needs to be covered (tent or overhang) and on flat, stable ground. Weather conditions and lighting must be suitable. We regularly set up at both indoor and covered outdoor venues across Etobicoke. Contact us to discuss your specific venue and we can determine if it will work.',
    },
    {
      question: 'How quickly do guests receive their 360 videos at Etobicoke events?',
      answer: 'Videos are processed immediately and sent to guests via text message or email within seconds of being recorded. They can share on social media right away, which makes the 360 booth perfect for Etobicoke\'s social media-savvy crowd. The instant delivery is one of the most popular features of our 360 booth service.',
    },
  ],
  relatedServices: [
    {
      name: 'Photo Booth Rental Etobicoke',
      href: '/photo-booth-rental-etobicoke',
    },
    {
      name: 'Glam Booth Etobicoke',
      href: '/glam-booth-etobicoke',
    },
    {
      name: 'Audio Guest Book Etobicoke',
      href: '/audio-guest-book-etobicoke',
    },
  ],
};

export default function Booth360Etobicoke() {
  return (
    <>
      <SchemaMarkup
        schema={serviceSchema(
          '360 Video Booth Etobicoke',
          '360 video booth rental in Etobicoke with professional camera arm, instant video delivery, premium platform, lighting, and attendant for weddings and corporate events.',
          '$750'
        )}
      />
      <ServiceLocationPage data={pageData} />
    </>
  );
}

