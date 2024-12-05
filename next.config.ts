import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true, // Usa true para redirección 301 o false para 302
      },
    ];
  },
};

export default nextConfig;
