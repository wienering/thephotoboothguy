import type { Metadata } from 'next';
import HolidayPartyContent from './HolidayPartyContent';

export const metadata: Metadata = {
  title: 'Holiday Party Photo Booth | Corporate Holiday Party | Toronto & GTA | The Photobooth Guy',
  description: 'Photo booth rental for holiday parties and corporate holiday events in Toronto and the GTA. Festive backdrops, custom templates, and instant prints for your seasonal celebration.',
  keywords: 'holiday party photo booth, corporate holiday party, Christmas photo booth Toronto, holiday event photo booth GTA',
  alternates: {
    canonical: 'https://thephotoboothguy.ca/holiday-party',
  },
};

export default function HolidayPartyPage() {
  return <HolidayPartyContent />;
}
