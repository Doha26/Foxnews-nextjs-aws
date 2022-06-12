/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_NEWS_API_KEY: process.env.NEXT_PUBLIC_NEWS_API_KEY,
  },
  images: {
    domains: [
      "i.pinimg.com",
      "images.unsplash.com",
      "source.unsplash.com",
      "assets.playbill.com",
      "s3.amazonaws.com",
      "i0.wp.com",
    ],
  },
};

module.exports = nextConfig;
