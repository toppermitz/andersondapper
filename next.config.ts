import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  agentRules: false,
  allowedDevOrigins: ["10.2.3.148", "localhost:3000"],
};

export default nextConfig;
