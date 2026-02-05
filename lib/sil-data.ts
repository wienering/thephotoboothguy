// Service-in-Location (SIL) data for all GTA cities and services

export interface VenueData {
  toronto: string[];
  mississauga: string[];
  brampton: string[];
  vaughan: string[];
  markham: string[];
  richmondHill: string[];
  oakville: string[];
  burlington: string[];
  etobicoke: string[];
  scarborough: string[];
  northYork: string[];
  ajax: string[];
  pickering: string[];
  whitby: string[];
  oshawa: string[];
}

export const venues: VenueData = {
  toronto: [
    'The Liberty Grand',
    'Arcadian Court',
    'Harbour Castle',
    'Metro Toronto Convention Centre',
    'Palais Royale',
    'Berkeley Church & Fieldhouse',
    'The Drake Hotel',
    'Casa Loma',
  ],
  mississauga: [
    'The Grand Luxe Event Boutique',
    'Living Arts Centre',
    'Carmen\'s Banquet Centre',
    'Renaissance by the Creek',
    'Pearson Convention Centre',
    'Mississauga Convention Centre',
    'Glenerin Inn & Spa',
  ],
  brampton: [
    'Pearson Convention Centre',
    'Great Hall Banquet & Convention Centre',
    'Terrace Banquet Hall',
    'Rose Theatre',
    'Garden Square',
    'Flower City Community Campus',
  ],
  vaughan: [
    'Paradise Banquet & Convention Centre',
    'Paramount Conference & Event Venue',
    'Venetian Banquet Hall',
    'The Manor by Peter & Paul\'s',
    'Kortright Centre for Conservation',
  ],
  markham: [
    'Markham Civic Centre',
    'Flato Markham Theatre',
    'Varley Art Gallery',
    'Cedar Valley Event Centre',
    'Paradise Banquet Hall Markham',
    'Le Parc Banquet Hall',
  ],
  richmondHill: [
    'Richmond Hill Centre for the Performing Arts',
    'Richmond Hill Country Club',
    'Elgin West Community Centre',
    'Richmond Green Sports Centre',
    'Richmond Hill Golf Club',
  ],
  oakville: [
    'Oakville Conference Centre',
    'Oakville Centre for the Performing Arts',
    'Glen Abbey Golf Club',
    'Oakville Club',
    'Queen Elizabeth Park Community Centre',
  ],
  burlington: [
    'Burlington Convention Centre',
    'Royal Botanical Gardens',
    'Burlington Performing Arts Centre',
    'LaSalle Park Pavilion',
    'Burlington Golf & Country Club',
  ],
  etobicoke: [
    'The Old Mill Toronto',
    'Humber Valley Golf Club',
    'Etobicoke Olympium',
    'Assembly Hall',
    'The Old Mill Inn',
    'Markland Wood Golf Club',
  ],
  scarborough: [
    'Scarborough Convention Centre',
    'Toronto Congress Centre',
    'The Guild Inn Estate',
    'Scarborough Golf & Country Club',
    'Centennial Park',
  ],
  northYork: [
    'Toronto Congress Centre',
    'The International Centre',
    'York Mills Gallery',
    'Montecassino Hotel & Event Venue',
    'Empress Walk',
  ],
  ajax: [
    'Ajax Community Centre',
    'Ajax Convention Centre',
    'Rotary Park Pavilion',
    'Ajax Downs',
    'Audley Recreation Centre',
  ],
  pickering: [
    'Pickering Recreation Complex',
    'Pickering Convention Centre',
    'Frenchman\'s Bay Yacht Club',
    'Pickering Casino Resort',
    'Chestnut Hill Developments Recreation Complex',
  ],
  whitby: [
    'Whitby Convention Centre',
    'Iroquois Park Sports Centre',
    'Whitby Golf & Country Club',
    'Heber Down Conservation Area',
    'Port Whitby Marina',
  ],
  oshawa: [
    'Oshawa Convention Centre',
    'Regent Theatre',
    'Oshawa Golf & Curling Club',
    'Tribute Communities Centre',
    'Parkwood Estate',
  ],
};

export const standardPackages = [
  {
    name: 'Essential',
    price: '$550',
    duration: '2 hours',
    features: [
      'Professional attendant on site',
      'Physical prints on custom template (2x6 or 4x6 size)',
      'Backdrop selection',
      'Props collection',
      'Digital image delivery to guests by SMS or email',
      'Digital gallery after the event',
    ],
  },
  {
    name: 'Signature',
    price: '$750',
    duration: '3 hours',
    features: [
      'Professional attendant on site',
      'Physical prints on custom template (2x6 or 4x6 size)',
      'Backdrop selection',
      'Props collection',
      'Digital image delivery to guests by SMS or email',
      'Digital gallery after the event',
    ],
    badge: 'popular' as const,
  },
  {
    name: 'Premium',
    price: '$950',
    duration: '4 hours',
    features: [
      'Professional attendant on site',
      'Physical prints on custom template (2x6 or 4x6 size)',
      'Backdrop selection',
      'Props collection',
      'Digital image delivery to guests by SMS or email',
      'Digital gallery after the event',
    ],
    badge: 'value' as const,
  },
];

export const glamBoothPackages = [
  {
    name: 'Essential',
    price: '$625',
    duration: '2 hours',
    features: [
      'Professional attendant on site',
      'Black and white glam booth setup',
      'Premium backdrop with professional lighting',
      'High-quality instant prints',
      'Props collection',
      'Digital copies sent to guests',
      'Digital gallery after the event',
    ],
  },
  {
    name: 'Signature',
    price: '$825',
    duration: '3 hours',
    features: [
      'Professional attendant on site',
      'Black and white glam booth setup',
      'Premium backdrop with professional lighting',
      'High-quality instant prints',
      'Props collection',
      'Digital copies sent to guests',
      'Digital gallery after the event',
    ],
    badge: 'popular' as const,
  },
  {
    name: 'Premium',
    price: '$1,025',
    duration: '4 hours',
    features: [
      'Professional attendant on site',
      'Black and white glam booth setup',
      'Premium backdrop with professional lighting',
      'High-quality instant prints',
      'Props collection',
      'Digital copies sent to guests',
      'Digital gallery after the event',
    ],
    badge: 'value' as const,
  },
];

export const audioGuestBookPackages = [
  {
    name: 'Audio Guest Book',
    price: '$450',
    duration: 'Full event',
    features: [
      'Vintage-style telephone handset',
      'Custom recorded greeting',
      'Unlimited voice messages',
      'Easy setup and operation',
      'Digital audio files delivered after event',
      'High-quality audio recording',
    ],
    highlight: true,
  },
];

export const booth360Packages = [
  {
    name: 'Essential',
    price: '$550',
    duration: '2 hours',
    features: [
      'Professional 360 video booth with camera arm',
      'Professional attendant on site',
      'Instant video delivery to guests via text or email',
      'Premium platform with safety features',
      'Professional lighting setup',
      'Digital gallery after the event',
      'Props and accessories included',
    ],
  },
  {
    name: 'Signature',
    price: '$750',
    duration: '3 hours',
    features: [
      'Professional 360 video booth with camera arm',
      'Professional attendant on site',
      'Instant video delivery to guests via text or email',
      'Premium platform with safety features',
      'Professional lighting setup',
      'Digital gallery after the event',
      'Props and accessories included',
    ],
    badge: 'popular' as const,
  },
  {
    name: 'Premium',
    price: '$950',
    duration: '4 hours',
    features: [
      'Professional 360 video booth with camera arm',
      'Professional attendant on site',
      'Instant video delivery to guests via text or email',
      'Premium platform with safety features',
      'Professional lighting setup',
      'Digital gallery after the event',
      'Props and accessories included',
    ],
    badge: 'value' as const,
  },
];

