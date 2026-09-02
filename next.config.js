/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.dribbble.com',
      },
    ],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
