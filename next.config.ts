/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Cross-Origin-Resource-Policy", value: "cross-origin" },
        //   {
        //     key: "Content-Security-Policy",
        //     value: `${process.env.NEXT_PUBLIC_API_URL} default-src 'self'; img-src 'self' data:; script-src 'self' 'unsafe-inline'; style-src 'self' font-src 'self'  'unsafe-inline' https://cdn.jsdelivr.net;`,
        //   },
        ],
      },
    ];
  },
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
      };
    }

    return config;
  },
  serverRuntimeConfig: {
    API_URL: process.env.API_URL, // Solo accesible en el servidor
  },
  publicRuntimeConfig: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL, // Accesible en el cliente
  },
 
};
console.log("NEXT_PUBLIC_API_URL:", process.env.NEXT_PUBLIC_API_URL);
console.log("API_URL:", process.env.API_URL);

module.exports = nextConfig;
