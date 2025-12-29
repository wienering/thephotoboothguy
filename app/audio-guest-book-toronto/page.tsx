import type { Metadata } from 'next';
import ServiceLocationPage, { ServiceLocationData } from '@/components/ServiceLocationPage';
import SchemaMarkup from '@/components/SchemaMarkup';
import { serviceSchema } from '@/lib/schema';
import { venues, audioGuestBookPackages } from '@/lib/sil-data';

export const metadata: Metadata = {
  title: 'Audio Guest Book Toronto | Wedding Voicemail Guest Book Rental | The Photobooth Guy',
  description: 'Audio guest book rental in Toronto with vintage telephone handset. Capture heartfelt voice messages at your wedding or event. Professional service for Toronto weddings at Liberty Grand, Harbour Castle, and venues across the city.',
  keywords: 'audio guest book Toronto, wedding voicemail guest book, audio guestbook rental Toronto, voice message guest book, telephone guest book Toronto, wedding guest book alternative',
};

const pageData: ServiceLocationData = {
  serviceName: 'Audio Guest Book',
  serviceSlug: 'audio-guest-book',
  city: 'Toronto',
  heroTitle: 'Audio Guest Book in Toronto',
  heroSubtitle: 'Capture heartfelt voice messages from your guests with a vintage-style telephone guest book. A unique and memorable alternative to traditional guest books for Toronto weddings and events.',
  description: 'Toronto couples are choosing audio guest books to capture the authentic voices and emotions of their wedding day. Instead of traditional written messages, your guests at venues like The Liberty Grand or Harbour Castle can pick up our vintage telephone and leave heartfelt voice recordings you\'ll treasure forever. Perfect for Toronto\'s multicultural weddings where family members may speak different languages, the audio format captures accents, laughter, and the unique personality of each speaker. Our professional attendant ensures smooth operation throughout your event, whether you\'re in downtown Toronto, North York, or Etobicoke. You\'ll receive all recordings on a beautiful USB drive plus digital files, letting you relive those emotional toasts and personal messages whenever you want.',
  venues: venues.toronto,
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
      answer: 'The audio guest book is designed to record messages throughout your Toronto event. You\'ll receive all the recordings after your event on a USB drive and as digital files, so you can listen and relive those special moments for years to come.',
    },
    {
      question: 'What happens to the recordings after our event?',
      answer: 'We carefully transfer all voice messages to a high-quality USB drive and also provide you with digital audio files. You\'ll have permanent copies of every heartfelt message from your Toronto wedding or event. The recordings are never shared or kept by us after delivery.',
    },
    {
      question: 'How many people typically leave messages?',
      answer: 'Most guests love the audio guest book! Typically 60-80% of attendees leave messages at Toronto weddings and events. The vintage telephone is eye-catching and the concept is unique, which encourages participation. Many guests leave longer, more personal messages than they would write.',
    },
    {
      question: 'Can we use this alongside a traditional photo booth?',
      answer: 'Absolutely! Many of our Toronto clients combine an audio guest book with our photo booth rental or glam booth services. It gives guests multiple ways to participate and creates different types of memories - visual and audio keepsakes from your special day.',
    },
  ],
  relatedServices: [
    {
      name: 'Photo Booth Rental Toronto',
      href: '/photo-booth-rental-toronto',
    },
    {
      name: 'Glam Booth Toronto',
      href: '/glam-booth-toronto',
    },
    {
      name: '360 Booth Toronto',
      href: '/360-booth-toronto',
    },
  ],
};

export default function AudioGuestBookToronto() {
  return (
    <>
      <SchemaMarkup
        schema={serviceSchema(
          'Audio Guest Book Rental Toronto',
          'Audio guest book rental in Toronto with vintage telephone handset for capturing voice messages at weddings and events. Includes professional attendant, custom greeting, USB drive, and digital files.',
          '$450'
        )}
      />
      <ServiceLocationPage data={pageData} />
    </>
  );
}

