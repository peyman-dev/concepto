import type { NextConfig } from "next";
import utwm from "unplugin-tailwindcss-mangle/webpack";
import daysToSeconds from "./core/helpers/days-to-seconds";

const cacheTTL = daysToSeconds(31) // 31 days = 26,XXX seconds

const nextConfig: NextConfig = {
  /* config options here */
  webpack: (config) => {
    config.plugins.push(utwm());
    return config;
  },
  images: {
    minimumCacheTTL: cacheTTL,
  },
};
export default nextConfig;
