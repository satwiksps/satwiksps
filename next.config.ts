import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.rhythmdoshi.xyz",
          },
        ],
        destination: "https://rhythmdoshi.xyz/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;