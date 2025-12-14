/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
