module.exports = {
    reactStrictMode: true,
    swcMinify: true,
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
  