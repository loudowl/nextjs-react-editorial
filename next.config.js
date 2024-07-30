module.exports = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**.**.com',
          port: '',
        },
      ],
    },
    experimental: {
      swcLoader: true,
      swcMinify: true,
      optimizeFonts: true,
      swcPlugins: [
        // Example: Add SWC plugin configurations here
        // ['@swc/plugin-name', {}]
      ],
    },
  }
  