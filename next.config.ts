import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  agentRules: false,
  allowedDevOrigins: ["10.2.3.148", "localhost:3000"],
  images: {
    formats: ["image/avif", "image/webp"],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  async redirects() {
    return [
      {
        source: "/about",
        destination: "/sobre",
        statusCode: 301,
      },
      {
        source: "/cases",
        destination: "/",
        statusCode: 301,
      },
      {
        source: "/cases/:path*",
        destination: "/",
        statusCode: 301,
      },
      {
        source: "/insights",
        destination: "/",
        statusCode: 301,
      },
      {
        source: "/insights/:path*",
        destination: "/",
        statusCode: 301,
      },
    ];
  },
};

export default nextConfig;
