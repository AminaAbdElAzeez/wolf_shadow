import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    //domains:["upload.wikimedia.org"],
    remotePatterns: [
      {
        protocol: "http", // Allow http
        hostname: "**", // Allow any domain
      },
      {
        protocol: "https", // Allow https
        hostname: "**", // Allow any domain
      },
    ],
    // unoptimized: true,
  },
};

export default withNextIntl(nextConfig);
