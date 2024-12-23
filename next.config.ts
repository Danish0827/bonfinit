import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    FRONTEND: process.env.FRONTEND,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.freepik.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.freepik.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.ui-avatars.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
