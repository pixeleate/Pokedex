/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['raw.githubusercontent.com', 'images.unsplash.com', 'scarletviolet.pokemon.com']
  }
}

module.exports = nextConfig
