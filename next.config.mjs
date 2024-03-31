/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.mmafacts.com',
      },
      {
        protocol: 'https',
        hostname: 'www.flagsapi.com',
      },
    ]
  },
};

export default nextConfig;
