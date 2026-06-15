// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/proxy/:path*",
        destination: "http://188.121.111.8:3003/api/:path*",
      },
    ];
  },
};

export default nextConfig;