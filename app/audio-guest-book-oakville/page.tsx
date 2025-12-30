import type { Metadata } from 'next';
import ServiceLocationPage, { ServiceLocationData } from '@/components/ServiceLocationPage';
import SchemaMarkup from '@/components/SchemaMarkup';
import { serviceSchema } from '@/lib/schema';
import { venues, audioGuestBookPackages } from '@/lib/sil-data';

export const metadata: Metadata = {
  title: 'Audio Guest Book Oakville | Wedding Voicemail Guest Book Rental | The Photobooth Guy',
  description: 'Audio guest book rental in Oakville with vintage telephone handset. Capture heartfelt voice messages at your wedding or event. Professional service for Oakville weddings at Oakville Conference Centre and venues across the city.',
  keywords: 'audio guest book Oakville, wedding voicemail guest book, audio guestbook rental Oakville, voice message guest book, telephone guest book Oakville',
  alternates: {
    canonical: 'https://thephotoboothguy.ca/audio-guest-book-oakville',
  },
};

const pageData: ServiceLocationData = {
  serviceName: 'Audio Guest Book',
  serviceSlug: 'audio-guest-book',
  city: 'Oakville',
  heroTitle: 'Audio Guest Book in Oakville',
  heroSubtitle: 'Capture heartfelt voice messages from your guests with a vintage-style telephone guest book. A unique and memorable alternative to traditional guest books for Oakville weddings and events.',
  description: 'Oakville\'s sophisticated community appreciates unique touches that make events memorable. Our audio guest book brings a charming vintage aesthetic to venues like Oakville Conference Centre and Oakville Centre for the Performing Arts while capturing something priceless - the actual voices of your loved ones. For Oakville\'s close-knit families and business communities, hearing familiar voices share stories, blessings, and well-wishes creates a treasure that written messages simply can\'t match. The vintage telephone adds an elegant decorative element that complements Oakville\'s refined venues, while the technology behind it ensures crystal-clear recording quality. The system is intuitive and self-operating, making it accessible for all your Oakville guests regardless of age, and you\'ll receive professionally edited audio files as digital downloads within 48 hours.',
  venues: venues.oakville,
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
      description: 'Our team sets up the audio guest book, tests everything, and ensures it\'s ready for your Oakville event.',
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
      question: 'What happens to the recordings after my Oakville event?',
      answer: 'The audio guest book is designed to record messages throughout your Oakville event. You\'ll receive all the recordings after your event on a USB drive and as digital files, so you can listen and relive those special moments for years to come.',
    },
    {
      question: 'Will I get a physical copy of the recordings?',
      answer: 'We carefully transfer all voice messages to a high-quality USB drive and also provide you with digital audio files. You\'ll have permanent copies of every heartfelt message from your Oakville wedding or event. The recordings are never shared or kept by us after delivery.',
    },
    {
      question: 'Do guests actually use the audio guest book?',
      answer: 'Most guests love the audio guest book! Typically 60-80% of attendees leave messages at Oakville weddings and events. The vintage telephone is eye-catching and the concept is unique, which encourages participation. Many guests leave longer, more personal messages than they would write.',
    },
    {
      question: 'Can we combine the audio guest book with other services?',
      answer: 'Absolutely! Many of our Oakville clients combine an audio guest book with our photo booth rental or glam booth services. It gives guests multiple ways to participate and creates different types of memories - visual and audio keepsakes from your special day.',
    },
  ],
  relatedServices: [
    {
      name: 'Photo Booth Rental Oakville',
      href: '/photo-booth-rental-oakville',
    },
    {
      name: 'Glam Booth Oakville',
      href: '/glam-booth-oakville',
    },
    {
      name: '360 Booth Oakville',
      href: '/360-booth-oakville',
    },
  ],
};

export default function AudioGuestBookOakville() {
  return (
    <>
      <SchemaMarkup
        schema={serviceSchema(
          'Audio Guest Book Rental Oakville',
          'Audio guest book rental in Oakville with vintage telephone handset for capturing voice messages at weddings and events. Includes professional attendant, custom greeting, USB drive, and digital files.',
          '$450'
        )}
      />
      <ServiceLocationPage data={pageData} />
    </>
  );
}

