import type { Metadata } from 'next';
import ServiceLocationPage, { ServiceLocationData } from '@/components/ServiceLocationPage';
import SchemaMarkup from '@/components/SchemaMarkup';
import { serviceSchema } from '@/lib/schema';
import { venues, audioGuestBookPackages } from '@/lib/sil-data';

export const metadata: Metadata = {
  title: 'Audio Guest Book Burlington | Wedding Voicemail Guest Book Rental | The Photobooth Guy',
  description: 'Audio guest book rental in Burlington with vintage telephone handset. Capture heartfelt voice messages at your wedding or event. Professional service for Burlington weddings at Burlington Convention Centre and venues across the city.',
  keywords: 'audio guest book Burlington, wedding voicemail guest book, audio guestbook rental Burlington, voice message guest book, telephone guest book Burlington',
  alternates: {
    canonical: 'https://thephotoboothguy.ca/audio-guest-book-burlington',
  },
};

const pageData: ServiceLocationData = {
  serviceName: 'Audio Guest Book',
  serviceSlug: 'audio-guest-book',
  city: 'Burlington',
  heroTitle: 'Audio Guest Book in Burlington',
  heroSubtitle: 'Capture heartfelt voice messages from your guests with a vintage-style telephone guest book. A unique and memorable alternative to traditional guest books for Burlington weddings and events.',
  description: 'Burlington\'s warm, community-focused atmosphere makes it the perfect setting for capturing meaningful memories. Our audio guest book brings a charming vintage aesthetic to venues like Burlington Convention Centre and Royal Botanical Gardens while capturing something priceless - the actual voices of your loved ones. For Burlington\'s close-knit families and friends, hearing familiar voices share stories, blessings, and well-wishes creates a treasure that written messages simply can\'t match. The vintage telephone adds an elegant decorative element that complements Burlington\'s refined venues, while the technology behind it ensures crystal-clear recording quality. The system is intuitive and self-operating, making it accessible for all your Burlington guests regardless of age, and you\'ll receive professionally edited audio files as digital downloads within 48 hours.',
  venues: venues.burlington,
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
      description: 'Our team sets up the audio guest book, tests everything, and ensures it\'s ready for your Burlington event.',
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
      question: 'How much does an audio guest book cost in Burlington?',
      answer: 'Audio guest book rental in Burlington starts at $450 for our Standard package (3 hours), $550 for Extended (5 hours), and $650 for Full Event coverage. All packages include the vintage telephone handset, custom recorded greeting, unlimited voice messages, easy setup, and digital audio files delivered after your Burlington event. It\'s a unique alternative to traditional guest books that captures the actual voices of your loved ones.',
    },
    {
      question: 'How does the audio guest book work at a Burlington wedding?',
      answer: 'It\'s incredibly simple! Guests pick up the vintage telephone handset, listen to your custom greeting with instructions, then leave their voice message after the beep. Just like leaving a voicemail. Our professional attendant is on site to assist anyone who needs help, but most guests figure it out right away. The system is intuitive and self-operating, so it doesn\'t require constant monitoring.',
    },
    {
      question: 'Can I listen to the audio guest book messages during my Burlington event?',
      answer: 'The audio guest book is designed to record messages throughout your Burlington event. You\'ll receive all the recordings after your event on a USB drive and as digital files, so you can listen and relive those special moments for years to come. This way you can focus on enjoying your celebration while guests leave messages throughout the day.',
    },
    {
      question: 'What happens to the audio guest book recordings after my Burlington wedding?',
      answer: 'We carefully transfer all voice messages to a high-quality USB drive and also provide you with digital audio files. You\'ll have permanent copies of every heartfelt message from your Burlington wedding or event. The recordings are never shared or kept by us after delivery - they\'re yours to keep forever and share with family and friends.',
    },
    {
      question: 'How many people typically use the audio guest book at Burlington events?',
      answer: 'Most guests love the audio guest book! Typically 60-80% of attendees leave messages at Burlington weddings and events. The vintage telephone is eye-catching and the concept is unique, which encourages participation. Many guests actually leave longer, more personal messages than they would write in a traditional guest book.',
    },
    {
      question: 'Can I use an audio guest book with a photo booth at my Burlington event?',
      answer: 'Absolutely! Many of our Burlington clients combine an audio guest book with our photo booth rental or glam booth services. It gives guests multiple ways to participate and creates different types of memories - visual photos and audio keepsakes from your special day. Both can run simultaneously without any issues.',
    },
    {
      question: 'Do you provide setup for audio guest books in Burlington?',
      answer: 'Yes! Our team sets up the audio guest book, tests everything, and ensures it\'s ready for your Burlington event. We\'ll work with your venue to find the perfect spot where guests can easily access it. The setup is quick and doesn\'t require much space, so it works well at most Burlington venues.',
    },
  ],
  relatedServices: [
    {
      name: 'Photo Booth Rental Burlington',
      href: '/photo-booth-rental-burlington',
    },
    {
      name: 'Glam Booth Burlington',
      href: '/glam-booth-burlington',
    },
    {
      name: '360 Booth Burlington',
      href: '/360-booth-burlington',
    },
  ],
};

export default function AudioGuestBookBurlington() {
  return (
    <>
      <SchemaMarkup
        schema={serviceSchema(
          'Audio Guest Book Rental Burlington',
          'Audio guest book rental in Burlington with vintage telephone handset for capturing voice messages at weddings and events. Includes professional attendant, custom greeting, USB drive, and digital files.',
          '$450'
        )}
      />
      <ServiceLocationPage data={pageData} />
    </>
  );
}

