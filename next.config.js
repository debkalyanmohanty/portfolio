/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export (same as the old `next export`) - deploys to Vercel, Netlify or any static host.
  output: 'export',
  reactStrictMode: true,
  poweredByHeader: false,
  images: { unoptimized: true },
  compiler: { styledComponents: true },
};

module.exports = nextConfig;
