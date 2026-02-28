import type { Metadata } from 'next';
import HolidayPartyContent from './HolidayPartyContent';

export const metadata: Metadata = {
  title: 'Holiday Party Photo Booth | The Photobooth Guy',
  description: 'Photo booth rental for holiday parties in Toronto & GTA. Festive backdrops, custom templates, instant prints. Corporate and private seasonal events.',
  keywords: 'holiday party photo booth, corporate holiday party, Christmas photo booth Toronto, holiday event photo booth GTA',
  alternates: {
    canonical: 'https://www.thephotoboothguy.ca/holiday-party',
  },
};

export default function HolidayPartyPage() {
  return <HolidayPartyContent />;
}
