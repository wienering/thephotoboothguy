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
  description: 'Markham\'s tech-savvy, forward-thinking community appreciates innovations that honor tradition - exactly what our audio guest book delivers. At Paradise Banquet Hall and Le Parc, the vintage telephone aesthetic creates Instagram-worthy moments while capturing something deeply personal: the voices of family sharing stories in Mandarin, Cantonese, or English. For Markham\'s many fusion weddings in Unionville and Cornell, audio guest books bridge generational and cultural gaps - grandparents comfortable speaking their native language and young cousins sharing inside jokes all contribute equally. Our service includes custom bilingual greetings, professional recording quality that captures every nuance, and delivery via secure digital download within 48 hours. Perfect for Markham families who value preserving heritage while embracing modern technology.',
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
      question: 'How does the audio guest book work?',
      answer: 'Guests pick up the vintage telephone handset, hear your custom greeting with instructions, then leave their voice message after the beep. It\'s simple and intuitive - just like leaving a voicemail. Our professional attendant is on site to assist anyone who needs help.',
    },
    {
      question: 'Can we listen to the messages during the event?',
      answer: 'The audio guest book is designed to record messages throughout your Markham event. You\'ll receive all the recordings after your event on a USB drive and as digital files, so you can listen and relive those special moments for years to come.',
    },
    {
      question: 'What happens to the recordings after our event?',
      answer: 'We carefully transfer all voice messages to a high-quality USB drive and also provide you with digital audio files. You\'ll have permanent copies of every heartfelt message from your Markham wedding or event. The recordings are never shared or kept by us after delivery.',
    },
    {
      question: 'How many people typically leave messages?',
      answer: 'Most guests love the audio guest book! Typically 60-80% of attendees leave messages at Markham weddings and events. The vintage telephone is eye-catching and the concept is unique, which encourages participation. Many guests leave longer, more personal messages than they would write.',
    },
    {
      question: 'Can we use this alongside a traditional photo booth?',
      answer: 'Absolutely! Many of our Markham clients combine an audio guest book with our photo booth rental or glam booth services. It gives guests multiple ways to participate and creates different types of memories - visual and audio keepsakes from your special day.',
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

