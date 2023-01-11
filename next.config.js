/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    domains: ['tailwindui.com', 'images.unsplash.com'],
  },
}

module.exports = nextConfig
