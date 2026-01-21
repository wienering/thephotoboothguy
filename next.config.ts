import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/contact-us',
        destination: '/contact',
        permanent: true, // 301 redirect
      },
      {
        source: '/template-designs',
        destination: '/templates',
        permanent: true, // 301 redirect
      },
      {
        source: '/our-backdrops',
        destination: '/backdrops',
        permanent: true, // 301 redirect
      },
    ];
  },
};

export default nextConfig;
