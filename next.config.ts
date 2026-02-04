import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), payment=()",
          },
        ],
      },
    ];
  },
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
