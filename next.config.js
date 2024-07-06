/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  compiler: {
    styledComponents: true,
  },
  pageExtensions: ["page.tsx"],
  images: {
    domains: ["fakestoreapi.com"],
  },
};

module.exports = nextConfig;
