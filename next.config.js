// @ts-check
// https://nextjs.org/docs/api-reference/next.config.js/introduction

const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

/**
 * @type {import('next/dist/next-server/server/config').NextConfig}
 **/
const config = {
  reactStrictMode: true,
  productionBrowserSourceMaps: false,
  future: undefined,
  experimental: undefined,
  webpackDevMiddleware: (config) => {
    // Necessary for HMR when running in a container.
    if (process.env.DOCKER) {
      config.watchOptions = {
        poll: 300,
        aggregateTimeout: 300,
      };
    }

    return config;
  },
  pwa: {
    // https://nextjs.org/docs/basic-features/static-file-serving
    dest: "public",
    disable: process.env.NODE_ENV === "development",
    runtimeCaching,
  },
  async rewrites() {
    return [
      {
        source: "/admin",
        destination: "/admin/index.html",
      },
      {
        source: "/config.yml",
        destination: "/admin/config.yml",
      },
    ];
  },
};

module.exports = withPWA(config);
