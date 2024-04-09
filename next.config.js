/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: [
      "mongoose",
      "@react-email/components",
      "@react-email/render",
      "@react-email/tailwind",
      "resend",
    ],
  },
  images: {
    domains: ["lh3.googleusercontent.com", "picsum.photos"],
  },
  webpack(config) {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    };
    return config;
  },
};

module.exports = nextConfig;
