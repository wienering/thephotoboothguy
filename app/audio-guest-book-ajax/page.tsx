import type { Metadata } from 'next';
import ServiceLocationPage, { ServiceLocationData } from '@/components/ServiceLocationPage';
import SchemaMarkup from '@/components/SchemaMarkup';
import { serviceSchema } from '@/lib/schema';
import { venues, audioGuestBookPackages } from '@/lib/sil-data';

export const metadata: Metadata = {
  title: 'Audio Guest Book Ajax | Wedding Voicemail Guest Book Rental | The Photobooth Guy',
  description: 'Audio guest book rental in Ajax with vintage telephone handset. Capture heartfelt voice messages at your wedding or event. Professional service for Ajax weddings at Ajax Community Centre and venues across Ajax.',
  keywords: 'audio guest book Ajax, wedding voicemail guest book, audio guestbook rental Ajax, voice message guest book, telephone guest book Ajax',
  alternates: {
    canonical: 'https://thephotoboothguy.ca/audio-guest-book-ajax',
  },
};

const pageData: ServiceLocationData = {
  serviceName: 'Audio Guest Book',
  serviceSlug: 'audio-guest-book',
  city: 'Ajax',
  heroTitle: 'Audio Guest Book in Ajax',
  heroSubtitle: 'Capture heartfelt voice messages from your guests with a vintage-style telephone guest book. A unique and memorable alternative to traditional guest books for Ajax weddings and events.',
  description: 'Ajax\'s close-knit, family-oriented community values meaningful connections and preserving memories across generations. Our audio guest book captures something written messages never could - the actual voices of loved ones sharing stories, blessings, and well-wishes. At venues like Ajax Community Centre or Ajax Convention Centre, the vintage telephone becomes a conversation piece that draws guests in, while the technology behind it ensures crystal-clear recordings of every message. For Ajax\'s tight-knit families, this format is especially powerful - grandparents can share messages comfortably, children can express themselves naturally, and everyone contributes equally regardless of age or writing ability. The system is intuitive and self-operating, making it accessible for all your Ajax guests, and you\'ll receive professionally edited audio files as digital downloads within 48 hours.',
  venues: venues.ajax,
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
      description: 'Our team sets up the audio guest book, tests everything, and ensures it\'s ready for your Ajax event.',
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
      question: 'How much does an audio guest book cost in Ajax?',
      answer: 'Audio guest book rental in Ajax is $450 for full event coverage. The package includes the vintage telephone handset, custom recorded greeting, unlimited voice messages, easy setup, and digital audio files delivered after your Ajax event. It\'s a unique alternative to traditional guest books that captures the actual voices of your loved ones.',
    },
    {
      question: 'How does the audio guest book work at a Ajax wedding?',
      answer: 'It\'s incredibly simple! Guests pick up the vintage telephone handset, listen to your custom greeting with instructions, then leave their voice message after the beep. Just like leaving a voicemail. Our professional attendant is on site to assist anyone who needs help, but most guests figure it out right away. The system is intuitive and self-operating, so it doesn\'t require constant monitoring.',
    },
    {
      question: 'Can I listen to the audio guest book messages during my Ajax event?',
      answer: 'The audio guest book is designed to record messages throughout your Ajax event. You\'ll receive all the recordings after your event on a USB drive and as digital files, so you can listen and relive those special moments for years to come. This way you can focus on enjoying your celebration while guests leave messages throughout the day.',
    },
    {
      question: 'What happens to the audio guest book recordings after my Ajax wedding?',
      answer: 'We carefully transfer all voice messages to a high-quality USB drive and also provide you with digital audio files. You\'ll have permanent copies of every heartfelt message from your Ajax wedding or event. The recordings are never shared or kept by us after delivery - they\'re yours to keep forever and share with family and friends.',
    },
    {
      question: 'How many people typically use the audio guest book at Ajax events?',
      answer: 'Most guests love the audio guest book! Typically 60-80% of attendees leave messages at Ajax weddings and events. The vintage telephone is eye-catching and the concept is unique, which encourages participation. Many guests actually leave longer, more personal messages than they would write in a traditional guest book.',
    },
    {
      question: 'Can I use an audio guest book with a photo booth at my Ajax event?',
      answer: 'Absolutely! Many of our Ajax clients combine an audio guest book with our photo booth rental or glam booth services. It gives guests multiple ways to participate and creates different types of memories - visual photos and audio keepsakes from your special day. Both can run simultaneously without any issues.',
    },
    {
      question: 'Do you provide setup for audio guest books in Ajax?',
      answer: 'Yes! Our team sets up the audio guest book, tests everything, and ensures it\'s ready for your Ajax event. We\'ll work with your venue to find the perfect spot where guests can easily access it. The setup is quick and doesn\'t require much space, so it works well at most Ajax venues.',
    },
  ],
  relatedServices: [
    {
      name: 'Photo Booth Rental Ajax',
      href: '/photo-booth-rental-ajax',
    },
    {
      name: 'Glam Booth Ajax',
      href: '/glam-booth-ajax',
    },
    {
      name: '360 Booth Ajax',
      href: '/360-booth-ajax',
    },
  ],
};

export default function AudioGuestBookAjax() {
  return (
    <>
      <SchemaMarkup
        schema={serviceSchema(
          'Audio Guest Book Rental Ajax',
          'Audio guest book rental in Ajax with vintage telephone handset for capturing voice messages at weddings and events. Includes professional attendant, custom greeting, USB drive, and digital files.',
          '$450'
        )}
      />
      <ServiceLocationPage data={pageData} />
    </>
  );
}

