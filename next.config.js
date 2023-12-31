/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
      {
        protocol: 'https',
        hostname: 'mubdexekdfjhiwgkbdef.supabase.co',
      },
    ],
  },
};

module.exports = nextConfig;
