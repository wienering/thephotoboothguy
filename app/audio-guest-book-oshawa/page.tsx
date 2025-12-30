import type { Metadata } from 'next';
import ServiceLocationPage, { ServiceLocationData } from '@/components/ServiceLocationPage';
import SchemaMarkup from '@/components/SchemaMarkup';
import { serviceSchema } from '@/lib/schema';
import { venues, audioGuestBookPackages } from '@/lib/sil-data';

export const metadata: Metadata = {
  title: 'Audio Guest Book Oshawa | Wedding Voicemail Guest Book Rental | The Photobooth Guy',
  description: 'Audio guest book rental in Oshawa with vintage telephone handset. Capture heartfelt voice messages at your wedding or event. Professional service for Oshawa weddings at Oshawa Convention Centre and venues across Oshawa.',
  keywords: 'audio guest book Oshawa, wedding voicemail guest book, audio guestbook rental Oshawa, voice message guest book, telephone guest book Oshawa',
  alternates: {
    canonical: 'https://thephotoboothguy.ca/audio-guest-book-oshawa',
  },
};

const pageData: ServiceLocationData = {
  serviceName: 'Audio Guest Book',
  serviceSlug: 'audio-guest-book',
  city: 'Oshawa',
  heroTitle: 'Audio Guest Book in Oshawa',
  heroSubtitle: 'Capture heartfelt voice messages from your guests with a vintage-style telephone guest book. A unique and memorable alternative to traditional guest books for Oshawa weddings and events.',
  description: 'Oshawa\'s close-knit, family-oriented community values meaningful connections and preserving memories across generations. Our audio guest book captures something written messages never could - the actual voices of loved ones sharing stories, blessings, and well-wishes. At venues like Oshawa Convention Centre or Regent Theatre, the vintage telephone becomes a conversation piece that draws guests in, while the technology behind it ensures crystal-clear recordings of every message. For Oshawa\'s tight-knit families, this format is especially powerful - grandparents can share messages comfortably, children can express themselves naturally, and everyone contributes equally regardless of age or writing ability. The system is intuitive and self-operating, making it accessible for all your Oshawa guests, and you\'ll receive professionally edited audio files as digital downloads within 48 hours.',
  venues: venues.oshawa,
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
      description: 'Our team sets up the audio guest book, tests everything, and ensures it\'s ready for your Oshawa event.',
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
      question: 'How do guests use the audio guest book?',
      answer: 'It\'s incredibly simple! Guests pick up the vintage telephone handset, listen to the custom greeting, and then press a button to start recording their message. When they\'re done, they simply hang up. The system is intuitive and self-operating, so no instruction is needed.',
    },
    {
      question: 'What happens to the recordings after my Oshawa event?',
      answer: 'The audio guest book is designed to record messages throughout your Oshawa event. You\'ll receive all the recordings after your event on a USB drive and as digital files, so you can listen and relive those special moments for years to come.',
    },
    {
      question: 'Will I get a physical copy of the recordings?',
      answer: 'We carefully transfer all voice messages to a high-quality USB drive and also provide you with digital audio files. You\'ll have permanent copies of every heartfelt message from your Oshawa wedding or event. The recordings are never shared or kept by us after delivery.',
    },
    {
      question: 'Do guests actually use the audio guest book?',
      answer: 'Most guests love the audio guest book! Typically 60-80% of attendees leave messages at Oshawa weddings and events. The vintage telephone is eye-catching and the concept is unique, which encourages participation. Many guests leave longer, more personal messages than they would write.',
    },
    {
      question: 'Can we combine the audio guest book with other services?',
      answer: 'Absolutely! Many of our Oshawa clients combine an audio guest book with our photo booth rental or glam booth services. It gives guests multiple ways to participate and creates different types of memories - visual and audio keepsakes from your special day.',
    },
  ],
  relatedServices: [
    {
      name: 'Photo Booth Rental Oshawa',
      href: '/photo-booth-rental-oshawa',
    },
    {
      name: 'Glam Booth Oshawa',
      href: '/glam-booth-oshawa',
    },
    {
      name: '360 Booth Oshawa',
      href: '/360-booth-oshawa',
    },
  ],
};

export default function AudioGuestBookOshawa() {
  return (
    <>
      <SchemaMarkup
        schema={serviceSchema(
          'Audio Guest Book Rental Oshawa',
          'Audio guest book rental in Oshawa with vintage telephone handset for capturing voice messages at weddings and events. Includes professional attendant, custom greeting, USB drive, and digital files.',
          '$450'
        )}
      />
      <ServiceLocationPage data={pageData} />
    </>
  );
}

