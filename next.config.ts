import type { NextConfig } from 'next';

const isDev = process.env.NODE_ENV !== 'production';

// Security header metadata. Adjust sources (fonts, analytics, APIs) as needed.
const scriptSrc = ["'self'", "https://www.googletagmanager.com", "'unsafe-inline'"];

if (isDev) {
  scriptSrc.push("'unsafe-eval'");
}

const csp = [
  "default-src 'self'",
  `script-src ${scriptSrc.join(' ')}`,
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "img-src 'self' data:",
  "font-src 'self' https://fonts.gstatic.com",
  "connect-src 'self' https://api.example.com",
  "frame-src 'self' https://www.youtube.com https://www.youtube-nocookie.com",
  "frame-ancestors 'self' https://www.youtube.com https://www.youtube-nocookie.com",
].join('; ');

const securityHeaders = [
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
  { key: 'X-DNS-Prefetch-Control', value: 'off' },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // Add security headers site-wide. Uses a relaxed set in development.
  async headers() {
    const base = [...securityHeaders];

    // Content-Security-Policy: keep a sensible default; tailor before production.
    base.push({ key: 'Content-Security-Policy', value: csp });

    // In production include stricter headers that should not be enabled on localhost
    if (!isDev) {
      base.unshift({ key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' });
      base.push({ key: 'Cross-Origin-Opener-Policy', value: 'same-origin' });
      // NOTE: Cross-Origin-Embedder-Policy ('require-corp') blocks cross-origin
      // iframe embeds (e.g., YouTube). Remove or enable only when needed.
      // base.push({ key: 'Cross-Origin-Embedder-Policy', value: 'require-corp' });
    }

    return [
      {
        source: '/:path*',
        headers: base,
      },
    ];
  },
};

export default nextConfig;
