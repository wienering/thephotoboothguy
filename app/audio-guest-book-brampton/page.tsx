import type { Metadata } from 'next';
import ServiceLocationPage, { ServiceLocationData } from '@/components/ServiceLocationPage';
import SchemaMarkup from '@/components/SchemaMarkup';
import { serviceSchema } from '@/lib/schema';
import { venues, audioGuestBookPackages } from '@/lib/sil-data';

export const metadata: Metadata = {
  title: 'Audio Guest Book Brampton | The Photobooth Guy',
  description: 'Audio guest book rental in Brampton. Vintage telephone captures voice messages at weddings. Professional service across the GTA.',
  keywords: 'audio guest book Brampton, wedding voicemail guest book, audio guestbook rental Brampton, voice message guest book, telephone guest book Brampton',
  alternates: {
    canonical: 'https://www.thephotoboothguy.ca/audio-guest-book-brampton',
  },
};

const pageData: ServiceLocationData = {
  serviceName: 'Audio Guest Book',
  serviceSlug: 'audio-guest-book',
  city: 'Brampton',
  heroTitle: 'Audio Guest Book in Brampton',
  heroSubtitle: 'Capture heartfelt voice messages from your guests with a vintage-style telephone guest book. A unique and memorable alternative to traditional guest books for Brampton weddings and events.',
  description: 'In Brampton\'s tight-knit community where family and tradition matter deeply, audio guest books capture something written messages never could - the actual voices of grandparents sharing blessings, cousins telling childhood stories, and friends offering wishes in Punjabi, Hindi, or any language close to your heart. Our vintage telephone setup at venues like Great Hall and Terrace Banquet Hall provides an elegant, easy way for guests of all ages to participate. Elderly relatives who might struggle with writing can comfortably speak their messages, while younger guests enjoy the unique retro experience. The system is intuitive and self-operating, ensuring everyone feels comfortable leaving their message. All recordings are delivered as high-quality digital files within 48 hours, letting you share these precious audio memories with family across the globe.',
  venues: venues.brampton,
  features: [
    {
      icon: '☎️',
      title: 'Vintage Telephone',
      description: 'Audio guest book rental in Brampton. Vintage telephone captures voice messages at weddings. Professional service across the GTA.',
    },
    {
      icon: '🎙️',
      title: 'Custom Greeting',
      description: 'Audio guest book rental in Brampton. Vintage telephone captures voice messages at weddings. Professional service across the GTA.',
    },
    {
      icon: '♾️',
      title: 'Unlimited Messages',
      description: 'Audio guest book rental in Brampton. Vintage telephone captures voice messages at weddings. Professional service across the GTA.',
    },
    {
      icon: '🎯',
      title: 'Easy Self-Service',
      description: 'Audio guest book rental in Brampton. Vintage telephone captures voice messages at weddings. Professional service across the GTA.',
    },
    {
      icon: '🎵',
      title: 'High-Quality Audio',
      description: 'Audio guest book rental in Brampton. Vintage telephone captures voice messages at weddings. Professional service across the GTA.',
    },
    {
      icon: '📱',
      title: 'Digital Delivery',
      description: 'Audio guest book rental in Brampton. Vintage telephone captures voice messages at weddings. Professional service across the GTA.',
    },
  ],
  packages: audioGuestBookPackages,
  faqs: [
    {
      question: 'How much does an audio guest book cost in Brampton?',
      answer: 'Audio guest book rental in Brampton is $450 for full event coverage. The package includes the vintage telephone handset, custom recorded greeting, unlimited voice messages, easy setup, and digital audio files delivered after your Brampton event. It\'s a unique alternative to traditional guest books that captures the actual voices of your loved ones.',
    },
    {
      question: 'How does the audio guest book work at a Brampton wedding?',
      answer: 'It\'s incredibly simple! Guests pick up the vintage telephone handset, listen to your custom greeting with instructions, then leave their voice message after the beep. Just like leaving a voicemail. Our professional attendant is on site to assist anyone who needs help, but most guests figure it out right away. The system is intuitive and self-operating, so it doesn\'t require constant monitoring.',
    },
    {
      question: 'Can I listen to the audio guest book messages during my Brampton event?',
      answer: 'The audio guest book is designed to record messages throughout your Brampton event. You\'ll receive all the recordings after your event on a USB drive and as digital files, so you can listen and relive those special moments for years to come. This way you can focus on enjoying your celebration while guests leave messages throughout the day.',
    },
    {
      question: 'What happens to the audio guest book recordings after my Brampton wedding?',
      answer: 'We carefully transfer all voice messages to a high-quality USB drive and also provide you with digital audio files. You\'ll have permanent copies of every heartfelt message from your Brampton wedding or event. The recordings are never shared or kept by us after delivery - they\'re yours to keep forever and share with family and friends.',
    },
    {
      question: 'How many people typically use the audio guest book at Brampton events?',
      answer: 'Most guests love the audio guest book! Typically 60-80% of attendees leave messages at Brampton weddings and events. The vintage telephone is eye-catching and the concept is unique, which encourages participation. Many guests actually leave longer, more personal messages than they would write in a traditional guest book.',
    },
    {
      question: 'Can I use an audio guest book with a photo booth at my Brampton event?',
      answer: 'Absolutely! Many of our Brampton clients combine an audio guest book with our photo booth rental or glam booth services. It gives guests multiple ways to participate and creates different types of memories - visual photos and audio keepsakes from your special day. Both can run simultaneously without any issues.',
    },
    {
      question: 'Do you provide setup for audio guest books in Brampton?',
      answer: 'Yes! Our team sets up the audio guest book, tests everything, and ensures it\'s ready for your Brampton event. We\'ll work with your venue to find the perfect spot where guests can easily access it. The setup is quick and doesn\'t require much space, so it works well at most Brampton venues.',
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

