import type { Metadata } from 'next';
import BackdropsContent from './BackdropsContent';

export const metadata: Metadata = {
  title: 'Photo Booth Backdrops - The Photo Booth Guy | Toronto',
  description: 'Stunning backdrop collection for photo booths. Elegant, fun, themed, and modern backdrops. Custom backdrop design available. Perfect for weddings, parties, and corporate events in Toronto.',
  keywords: 'photo booth backdrops, event backdrops, custom backdrops, Toronto photo booth, backdrop rental',
};

export default function Backdrops() {
  return <BackdropsContent />;
}
