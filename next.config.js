/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: {
    autoPrerender: false,
  },
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    };
    config.devServer = {
      port: 3001,
      watchOptions: {
        poll: true,
      },
    };
    return config;
  },
};

module.exports = nextConfig;
