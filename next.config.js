/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ['cdn.jsdelivr.net'],
  }
}

module.exports = nextConfig
