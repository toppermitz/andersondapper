import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  agentRules: false,
  allowedDevOrigins: ["10.2.3.148", "localhost:3000"],
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
