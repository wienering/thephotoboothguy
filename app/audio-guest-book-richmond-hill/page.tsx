import type { Metadata } from 'next';
import ServiceLocationPage, { ServiceLocationData } from '@/components/ServiceLocationPage';
import SchemaMarkup from '@/components/SchemaMarkup';
import { serviceSchema } from '@/lib/schema';
import { venues, audioGuestBookPackages } from '@/lib/sil-data';

export const metadata: Metadata = {
  title: 'Audio Guest Book Richmond Hill | Wedding Voicemail Guest Book Rental | The Photobooth Guy',
  description: 'Audio guest book rental in Richmond Hill with vintage telephone handset. Capture heartfelt voice messages at your wedding or event. Professional service for Richmond Hill weddings at Richmond Hill Centre and venues across the city.',
  keywords: 'audio guest book Richmond Hill, wedding voicemail guest book, audio guestbook rental Richmond Hill, voice message guest book, telephone guest book Richmond Hill',
  alternates: {
    canonical: 'https://thephotoboothguy.ca/audio-guest-book-richmond-hill',
  },
};

const pageData: ServiceLocationData = {
  serviceName: 'Audio Guest Book',
  serviceSlug: 'audio-guest-book',
  city: 'Richmond Hill',
  heroTitle: 'Audio Guest Book in Richmond Hill',
  heroSubtitle: 'Capture heartfelt voice messages from your guests with a vintage-style telephone guest book. A unique and memorable alternative to traditional guest books for Richmond Hill weddings and events.',
  description: 'Richmond Hill\'s diverse, family-focused community values meaningful connections and preserving memories across generations. Our audio guest book captures something written messages never could - the actual voices of loved ones sharing stories, blessings, and well-wishes. At venues like Richmond Hill Centre for the Performing Arts or Richmond Hill Country Club, the vintage telephone becomes a conversation piece that draws guests in, while the technology behind it ensures crystal-clear recordings of every message. For Richmond Hill\'s multicultural families, this format is especially powerful - grandparents can share messages in their native language, children can express themselves naturally, and everyone contributes equally regardless of age or writing ability. The system is intuitive and self-operating, making it accessible for all your Richmond Hill guests, and you\'ll receive professionally edited audio files as digital downloads within 48 hours.',
  venues: venues.richmondHill,
  features: [
    {
      icon: '📞',
      title: 'Vintage Telephone Design',
      description: 'Beautiful vintage-style telephone handset creates an eye-catching display and makes recording messages feel special and memorable.',
    },
    {
      icon: '🎙️',
      title: 'High-Quality Recording',
      description: 'Professional audio recording equipment captures clear, crisp voice messages that you\'ll treasure for years to come.',
    },
    {
      icon: '💬',
      title: 'Custom Greeting',
      description: 'We record a personalized greeting message that welcomes your guests and explains how to leave their voice message.',
    },
    {
      icon: '💾',
      title: 'Digital Delivery',
      description: 'All voice messages are delivered as high-quality digital audio files on a USB drive and via secure download within 48 hours.',
    },
    {
      icon: '👤',
      title: 'Professional Setup',
      description: 'Our team sets up the audio guest book, tests everything, and ensures it\'s ready for your Richmond Hill event.',
    },
    {
      icon: '♾️',
      title: 'Unlimited Messages',
      description: 'Guests can leave messages of any length - no limits on recording time or number of messages.',
    },
  ],
  packages: audioGuestBookPackages,
  faqs: [
    {
      question: 'How much does an audio guest book cost in Richmond Hill?',
      answer: 'Audio guest book rental in Richmond Hill starts at $450 for our Standard package (3 hours), $550 for Extended (5 hours), and $650 for Full Event coverage. All packages include the vintage telephone handset, custom recorded greeting, unlimited voice messages, easy setup, and digital audio files delivered after your Richmond Hill event. It\'s a unique alternative to traditional guest books that captures the actual voices of your loved ones.',
    },
    {
      question: 'How does the audio guest book work at a Richmond Hill wedding?',
      answer: 'It\'s incredibly simple! Guests pick up the vintage telephone handset, listen to your custom greeting with instructions, then leave their voice message after the beep. Just like leaving a voicemail. Our professional attendant is on site to assist anyone who needs help, but most guests figure it out right away. The system is intuitive and self-operating, so it doesn\'t require constant monitoring.',
    },
    {
      question: 'Can I listen to the audio guest book messages during my Richmond Hill event?',
      answer: 'The audio guest book is designed to record messages throughout your Richmond Hill event. You\'ll receive all the recordings after your event on a USB drive and as digital files, so you can listen and relive those special moments for years to come. This way you can focus on enjoying your celebration while guests leave messages throughout the day.',
    },
    {
      question: 'What happens to the audio guest book recordings after my Richmond Hill wedding?',
      answer: 'We carefully transfer all voice messages to a high-quality USB drive and also provide you with digital audio files. You\'ll have permanent copies of every heartfelt message from your Richmond Hill wedding or event. The recordings are never shared or kept by us after delivery - they\'re yours to keep forever and share with family and friends.',
    },
    {
      question: 'How many people typically use the audio guest book at Richmond Hill events?',
      answer: 'Most guests love the audio guest book! Typically 60-80% of attendees leave messages at Richmond Hill weddings and events. The vintage telephone is eye-catching and the concept is unique, which encourages participation. Many guests actually leave longer, more personal messages than they would write in a traditional guest book.',
    },
    {
      question: 'Can I use an audio guest book with a photo booth at my Richmond Hill event?',
      answer: 'Absolutely! Many of our Richmond Hill clients combine an audio guest book with our photo booth rental or glam booth services. It gives guests multiple ways to participate and creates different types of memories - visual photos and audio keepsakes from your special day. Both can run simultaneously without any issues.',
    },
    {
      question: 'Do you provide setup for audio guest books in Richmond Hill?',
      answer: 'Yes! Our team sets up the audio guest book, tests everything, and ensures it\'s ready for your Richmond Hill event. We\'ll work with your venue to find the perfect spot where guests can easily access it. The setup is quick and doesn\'t require much space, so it works well at most Richmond Hill venues.',
    },
  ],
  relatedServices: [
    {
      name: 'Photo Booth Rental Richmond Hill',
      href: '/photo-booth-rental-richmond-hill',
    },
    {
      name: 'Glam Booth Richmond Hill',
      href: '/glam-booth-richmond-hill',
    },
    {
      name: '360 Booth Richmond Hill',
      href: '/360-booth-richmond-hill',
    },
  ],
};

export default function AudioGuestBookRichmondHill() {
  return (
    <>
      <SchemaMarkup
        schema={serviceSchema(
          'Audio Guest Book Rental Richmond Hill',
          'Audio guest book rental in Richmond Hill with vintage telephone handset for capturing voice messages at weddings and events. Includes professional attendant, custom greeting, USB drive, and digital files.',
          '$450'
        )}
      />
      <ServiceLocationPage data={pageData} />
    </>
  );
}

