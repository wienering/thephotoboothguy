import type { Metadata } from 'next';
import ServiceLocationPage, { ServiceLocationData } from '@/components/ServiceLocationPage';
import SchemaMarkup from '@/components/SchemaMarkup';
import { serviceSchema } from '@/lib/schema';
import { venues, audioGuestBookPackages } from '@/lib/sil-data';

export const metadata: Metadata = {
  title: 'Audio Guest Book Markham | Wedding Voicemail Guest Book Rental | The Photobooth Guy',
  description: 'Audio guest book rental in Markham with vintage telephone handset. Capture heartfelt voice messages at your wedding or event. Professional service for Markham weddings at Paradise Banquet Hall and venues across the city.',
  keywords: 'audio guest book Markham, wedding voicemail guest book, audio guestbook rental Markham, voice message guest book, telephone guest book Markham',
  alternates: {
    canonical: 'https://thephotoboothguy.ca/audio-guest-book-markham',
  },
};

const pageData: ServiceLocationData = {
  serviceName: 'Audio Guest Book',
  serviceSlug: 'audio-guest-book',
  city: 'Markham',
  heroTitle: 'Audio Guest Book in Markham',
  heroSubtitle: 'Capture heartfelt voice messages from your guests with a vintage-style telephone guest book. A unique and memorable alternative to traditional guest books for Markham weddings and events.',
  description: 'Markham\'s community values meaningful connections and preserving memories. Our audio guest book captures something written messages never could - the actual voices of your loved ones sharing stories, blessings, and well-wishes. At venues like Paradise Banquet Hall and Le Parc, the vintage telephone becomes a conversation piece that draws guests in, while the technology behind it ensures crystal-clear recordings of every message. The system is intuitive and self-operating, making it easy for guests of all ages to participate. Whether grandparents want to share a blessing or kids want to leave a fun message, everyone can contribute in their own way. You\'ll receive professionally edited audio files as digital downloads within 48 hours, creating a treasure you can listen to for years to come.',
  venues: venues.markham,
  features: [
    {
      icon: '☎️',
      title: 'Vintage Telephone',
      description: 'Elegant vintage-style telephone handset that adds a nostalgic, decorative element to your event while capturing audio messages.',
    },
    {
      icon: '🎙️',
      title: 'Custom Greeting',
      description: 'Personalized recorded greeting in your voice or ours, providing instructions and prompting guests to leave their messages.',
    },
    {
      icon: '♾️',
      title: 'Unlimited Messages',
      description: 'No limit on the number or length of voice messages. Every guest can share their thoughts, wishes, and memories.',
    },
    {
      icon: '🎯',
      title: 'Easy Self-Service',
      description: 'Simple, intuitive operation that requires no monitoring. Guests of all ages can easily leave their messages throughout your event.',
    },
    {
      icon: '🎵',
      title: 'High-Quality Audio',
      description: 'Professional recording equipment captures crystal-clear audio with excellent clarity, preserving every word and emotion.',
    },
    {
      icon: '📱',
      title: 'Digital Delivery',
      description: 'Receive all audio files as high-quality digital downloads within 48 hours, easy to share with family or store in the cloud.',
    },
  ],
  packages: audioGuestBookPackages,
  faqs: [
    {
      question: 'How much does an audio guest book cost in Markham?',
      answer: 'Audio guest book rental in Markham is $450 for full event coverage. The package includes the vintage telephone handset, custom recorded greeting, unlimited voice messages, easy setup, and digital audio files delivered after your Markham event. It\'s a unique alternative to traditional guest books that captures the actual voices of your loved ones.',
    },
    {
      question: 'How does the audio guest book work at a Markham wedding?',
      answer: 'It\'s incredibly simple! Guests pick up the vintage telephone handset, listen to your custom greeting with instructions, then leave their voice message after the beep. Just like leaving a voicemail. Our professional attendant is on site to assist anyone who needs help, but most guests figure it out right away. The system is intuitive and self-operating, so it doesn\'t require constant monitoring.',
    },
    {
      question: 'Can I listen to the audio guest book messages during my Markham event?',
      answer: 'The audio guest book is designed to record messages throughout your Markham event. You\'ll receive all the recordings after your event on a USB drive and as digital files, so you can listen and relive those special moments for years to come. This way you can focus on enjoying your celebration while guests leave messages throughout the day.',
    },
    {
      question: 'What happens to the audio guest book recordings after my Markham wedding?',
      answer: 'We carefully transfer all voice messages to a high-quality USB drive and also provide you with digital audio files. You\'ll have permanent copies of every heartfelt message from your Markham wedding or event. The recordings are never shared or kept by us after delivery - they\'re yours to keep forever and share with family and friends.',
    },
    {
      question: 'How many people typically use the audio guest book at Markham events?',
      answer: 'Most guests love the audio guest book! Typically 60-80% of attendees leave messages at Markham weddings and events. The vintage telephone is eye-catching and the concept is unique, which encourages participation. Many guests actually leave longer, more personal messages than they would write in a traditional guest book.',
    },
    {
      question: 'Can I use an audio guest book with a photo booth at my Markham event?',
      answer: 'Absolutely! Many of our Markham clients combine an audio guest book with our photo booth rental or glam booth services. It gives guests multiple ways to participate and creates different types of memories - visual photos and audio keepsakes from your special day. Both can run simultaneously without any issues.',
    },
    {
      question: 'Do you provide setup for audio guest books in Markham?',
      answer: 'Yes! Our team sets up the audio guest book, tests everything, and ensures it\'s ready for your Markham event. We\'ll work with your venue to find the perfect spot where guests can easily access it. The setup is quick and doesn\'t require much space, so it works well at most Markham venues.',
    },
  ],
  relatedServices: [
    {
      name: 'Photo Booth Rental Markham',
      href: '/photo-booth-rental-markham',
    },
    {
      name: 'Glam Booth Markham',
      href: '/glam-booth-markham',
    },
    {
      name: '360 Booth Markham',
      href: '/360-booth-markham',
    },
  ],
};

export default function AudioGuestBookMarkham() {
  return (
    <>
      <SchemaMarkup
        schema={serviceSchema(
          'Audio Guest Book Rental Markham',
          'Audio guest book rental in Markham with vintage telephone handset for capturing voice messages at weddings and events. Includes professional attendant, custom greeting, USB drive, and digital files.',
          '$450'
        )}
      />
      <ServiceLocationPage data={pageData} />
    </>
  );
}

