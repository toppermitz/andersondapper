import type { NextConfig } from "next";

// Scripts inline: bootstrap do Next.js, next-themes e o JSON-LD estático.
// O beacon do Analytics sai para os hosts da Vercel; o resto é mesma origem.
const contentSecurityPolicy = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'none'",
  "frame-src 'none'",
  "form-action 'self'",
  "script-src 'self' 'unsafe-inline' https://va.vercel-scripts.com",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self'",
  "connect-src 'self' https://va.vercel-scripts.com",
  "manifest-src 'self'",
  // Em http://localhost a diretiva troca o esquema e quebra a checagem local.
  // Na Vercel o site já é HTTPS; HSTS cobre o navegador depois da primeira visita.
  ...(process.env.VERCEL === "1" ? ["upgrade-insecure-requests"] : []),
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: contentSecurityPolicy },
  // Mesmo valor que a Vercel já envia em andersondapper.com.br e .dev.
  // Sem includeSubDomains/preload: www não existe e preload é difícil de reverter.
  { key: "Strict-Transport-Security", value: "max-age=63072000" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value:
      "camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=(), browsing-topics=()",
  },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  agentRules: false,
  allowedDevOrigins: ["10.2.3.148", "localhost:3000"],
  images: {
    formats: ["image/avif", "image/webp"],
    dangerouslyAllowSVG: false,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/about",
        destination: "/",
        statusCode: 301,
      },
      {
        source: "/sobre",
        destination: "/",
        statusCode: 301,
      },
      {
        source: "/sobre/:path*",
        destination: "/",
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
