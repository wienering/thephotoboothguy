import type { Metadata } from 'next';
import HomeContent from './HomeContent';

export const metadata: Metadata = {
  title: 'The Photo Booth Guy - Toronto\'s Premier Photo Booth Rental',
  description: 'Professional photo booth rental services in Toronto. Premium equipment, custom templates, stunning backdrops, and exceptional service for your events. Packages starting at $700.',
  keywords: 'photo booth rental Toronto, event photography, photo booth hire, party rental, wedding photo booth',
};

export default function Home() {
  return <HomeContent />;
}
