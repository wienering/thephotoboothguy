import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.thephotoboothguy.ca';
  
  // Define cities and services for dynamic SIL pages
  const cities = [
    'toronto',
    'mississauga',
    'brampton',
    'vaughan',
    'markham',
    'ajax',
    'pickering',
    'oshawa',
    'whitby',
    'burlington',
    'oakville',
    'north-york',
    'scarborough',
    'etobicoke',
    'richmond-hill',
  ];
  const services = [
    'photo-booth-rental',
    'glam-booth',
    'audio-guest-book',
    '360-booth',
  ];

  // Core pages
  const corePages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/equipment`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/templates`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/backdrops`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/quote`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/book`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/holiday-party`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ];

  // Generate all service-location pages
  const silPages: MetadataRoute.Sitemap = [];
  
  cities.forEach((city) => {
    services.forEach((service) => {
      silPages.push({
        url: `${baseUrl}/${service}-${city}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9, // High priority for service-location pages
      });
    });
  });

  return [...corePages, ...silPages];
}






