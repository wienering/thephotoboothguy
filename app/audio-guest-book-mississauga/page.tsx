import type { Metadata } from 'next';
import ServiceLocationPage, { ServiceLocationData } from '@/components/ServiceLocationPage';
import SchemaMarkup from '@/components/SchemaMarkup';
import { serviceSchema } from '@/lib/schema';
import { venues, audioGuestBookPackages } from '@/lib/sil-data';

export const metadata: Metadata = {
  title: 'Audio Guest Book Mississauga | Wedding Voicemail Guest Book Rental | The Photobooth Guy',
  description: 'Audio guest book rental in Mississauga with vintage telephone handset. Capture heartfelt voice messages at your wedding or event. Professional service for Mississauga weddings at The Grand Luxe and venues across the city.',
  keywords: 'audio guest book Mississauga, wedding voicemail guest book, audio guestbook rental Mississauga, voice message guest book, telephone guest book Mississauga',
};

const pageData: ServiceLocationData = {
  serviceName: 'Audio Guest Book',
  serviceSlug: 'audio-guest-book',
  city: 'Mississauga',
  heroTitle: 'Audio Guest Book in Mississauga',
  heroSubtitle: 'Capture heartfelt voice messages from your guests with a vintage-style telephone guest book. A unique and memorable alternative to traditional guest books for Mississauga weddings and events.',
  description: 'Mississauga\'s diverse community makes audio guest books especially meaningful - capturing heartfelt messages in multiple languages and preserving family stories for generations. From intimate gatherings at Renaissance by the Creek to grand celebrations at The Grand Luxe, our vintage telephone guest book adds a nostalgic yet innovative touch to your special day. Guests in Port Credit and Streetsville love the personal connection of hearing loved ones\' actual voices, complete with their unique accents, laughter, and emotional inflections that writing simply can\'t capture. Our service includes custom greeting recording in your language of choice, easy self-service operation, and delivery of all messages as high-quality digital files within 48 hours. Perfect for multicultural Mississauga weddings where preserving family heritage matters.',
  venues: venues.mississauga,
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
      question: 'How does the audio guest book work?',
      answer: 'Guests pick up the vintage telephone handset, hear your custom greeting with instructions, then leave their voice message after the beep. It\'s simple and intuitive - just like leaving a voicemail. Our professional attendant is on site to assist anyone who needs help.',
    },
    {
      question: 'Can we listen to the messages during the event?',
      answer: 'The audio guest book is designed to record messages throughout your Mississauga event. You\'ll receive all the recordings after your event on a USB drive and as digital files, so you can listen and relive those special moments for years to come.',
    },
    {
      question: 'What happens to the recordings after our event?',
      answer: 'We carefully transfer all voice messages to a high-quality USB drive and also provide you with digital audio files. You\'ll have permanent copies of every heartfelt message from your Mississauga wedding or event. The recordings are never shared or kept by us after delivery.',
    },
    {
      question: 'How many people typically leave messages?',
      answer: 'Most guests love the audio guest book! Typically 60-80% of attendees leave messages at Mississauga weddings and events. The vintage telephone is eye-catching and the concept is unique, which encourages participation. Many guests leave longer, more personal messages than they would write.',
    },
    {
      question: 'Can we use this alongside a traditional photo booth?',
      answer: 'Absolutely! Many of our Mississauga clients combine an audio guest book with our photo booth rental or glam booth services. It gives guests multiple ways to participate and creates different types of memories - visual and audio keepsakes from your special day.',
    },
  ],
  relatedServices: [
    {
      name: 'Photo Booth Rental Mississauga',
      href: '/photo-booth-rental-mississauga',
    },
    {
      name: 'Glam Booth Mississauga',
      href: '/glam-booth-mississauga',
    },
    {
      name: '360 Booth Mississauga',
      href: '/360-booth-mississauga',
    },
  ],
};

export default function AudioGuestBookMississauga() {
  return (
    <>
      <SchemaMarkup
        schema={serviceSchema(
          'Audio Guest Book Rental Mississauga',
          'Audio guest book rental in Mississauga with vintage telephone handset for capturing voice messages at weddings and events. Includes professional attendant, custom greeting, USB drive, and digital files.',
          '$450'
        )}
      />
      <ServiceLocationPage data={pageData} />
    </>
  );
}

