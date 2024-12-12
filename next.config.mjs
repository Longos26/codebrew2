const nextConfig = {
    experimental: {
      appDir: true, // Enables new app-based routing
    },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '*.googleusercontent.com',
        },
        {
          protocol: 'https',
          hostname: 'tealerinpos.s3.amazonaws.com',
        },
      ],
    },
  };
  
  export default nextConfig;