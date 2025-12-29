import type { Metadata } from 'next';
import ServiceLocationPage, { ServiceLocationData } from '@/components/ServiceLocationPage';
import SchemaMarkup from '@/components/SchemaMarkup';
import { serviceSchema } from '@/lib/schema';
import { venues, audioGuestBookPackages } from '@/lib/sil-data';

export const metadata: Metadata = {
  title: 'Audio Guest Book Brampton | Wedding Voicemail Guest Book Rental | The Photobooth Guy',
  description: 'Audio guest book rental in Brampton with vintage telephone handset. Capture heartfelt voice messages at your wedding or event. Professional service for Brampton weddings at Great Hall and venues across the city.',
  keywords: 'audio guest book Brampton, wedding voicemail guest book, audio guestbook rental Brampton, voice message guest book, telephone guest book Brampton',
};

const pageData: ServiceLocationData = {
  serviceName: 'Audio Guest Book',
  serviceSlug: 'audio-guest-book',
  city: 'Brampton',
  heroTitle: 'Audio Guest Book in Brampton',
  heroSubtitle: 'Capture heartfelt voice messages from your guests with a vintage-style telephone guest book. A unique and memorable alternative to traditional guest books for Brampton weddings and events.',
  description: 'In Brampton\'s tight-knit community where family and tradition matter deeply, audio guest books capture something written messages never could - the actual voices of grandparents sharing blessings, cousins telling childhood stories, and friends offering wishes in Punjabi, Hindi, or any language close to your heart. Our vintage telephone setup at venues like Great Hall and Terrace Banquet Hall provides an elegant, easy way for guests of all ages to participate. Elderly relatives who might struggle with writing can comfortably speak their messages, while younger guests enjoy the unique retro experience. Our bilingual attendants understand Brampton\'s cultural celebrations and ensure everyone feels comfortable leaving their message. All recordings are delivered on USB and digitally, letting you share these precious audio memories with family across the globe.',
  venues: venues.brampton,
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
      icon: '👤',
      title: 'Professional Attendant',
      description: 'Trained attendant on site to set up, monitor the audio guest book, and ensure everything runs smoothly throughout your event.',
    },
    {
      icon: '💿',
      title: 'USB Drive Included',
      description: 'All voice messages delivered on a beautiful USB drive, perfect for safekeeping and easy playback whenever you want to relive the memories.',
    },
    {
      icon: '📱',
      title: 'Digital Files',
      description: 'Receive digital audio files of all messages, making it easy to share with family, create compilations, or store in the cloud.',
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
      answer: 'The audio guest book is designed to record messages throughout your Brampton event. You\'ll receive all the recordings after your event on a USB drive and as digital files, so you can listen and relive those special moments for years to come.',
    },
    {
      question: 'What happens to the recordings after our event?',
      answer: 'We carefully transfer all voice messages to a high-quality USB drive and also provide you with digital audio files. You\'ll have permanent copies of every heartfelt message from your Brampton wedding or event. The recordings are never shared or kept by us after delivery.',
    },
    {
      question: 'How many people typically leave messages?',
      answer: 'Most guests love the audio guest book! Typically 60-80% of attendees leave messages at Brampton weddings and events. The vintage telephone is eye-catching and the concept is unique, which encourages participation. Many guests leave longer, more personal messages than they would write.',
    },
    {
      question: 'Can we use this alongside a traditional photo booth?',
      answer: 'Absolutely! Many of our Brampton clients combine an audio guest book with our photo booth rental or glam booth services. It gives guests multiple ways to participate and creates different types of memories - visual and audio keepsakes from your special day.',
    },
  ],
  relatedServices: [
    {
      name: 'Photo Booth Rental Brampton',
      href: '/photo-booth-rental-brampton',
    },
    {
      name: 'Glam Booth Brampton',
      href: '/glam-booth-brampton',
    },
    {
      name: '360 Booth Brampton',
      href: '/360-booth-brampton',
    },
  ],
};

export default function AudioGuestBookBrampton() {
  return (
    <>
      <SchemaMarkup
        schema={serviceSchema(
          'Audio Guest Book Rental Brampton',
          'Audio guest book rental in Brampton with vintage telephone handset for capturing voice messages at weddings and events. Includes professional attendant, custom greeting, USB drive, and digital files.',
          '$450'
        )}
      />
      <ServiceLocationPage data={pageData} />
    </>
  );
}

