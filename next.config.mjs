import { env } from './src/env.mjs';
await import('./src/env.mjs');

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.externals.push('@node-rs/argon2', '@node-rs/bcrypt');
    config.resolve.alias.canvas = false;

    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        hostname: 'lh3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
      {
        protocol: 'https',
        hostname: `${env.BUCKET_NAME}.s3.amazonaws.com`,
      },
      {
        protocol: 'https',
        hostname: `${env.BUCKET_NAME}.s3.${env.AWS_REGION}.amazonaws.com`,
      },
      {
        hostname:  `${env.NEXT_PUBLIC_CLOUDFLARE_URL.replace("https://", "")}`
      },
    ],
  },
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: `
              default-src 'self';
              script-src 'self' 'unsafe-inline' 'unsafe-eval';
              style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
              img-src 'self' data: https://lh3.googleusercontent.com https://${env.BUCKET_NAME}.s3.amazonaws.com https://${env.BUCKET_NAME}.s3.${env.AWS_REGION}.amazonaws.com ${env.NEXT_PUBLIC_CLOUDFLARE_URL};
              font-src 'self' https://fonts.gstatic.com;
              connect-src 'self' https://api.example.com;
              frame-src 'none';
              object-src 'none';
            `.replace(/\n/g, ''),
          },
        ],
      },
    ];
  },
};

export default nextConfig;

