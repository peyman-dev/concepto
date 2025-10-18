import type { NextConfig } from "next";
import utwm from 'unplugin-tailwindcss-mangle/webpack';
const nextConfig: NextConfig = {
/* config options here */
webpack: (config) => {
config.plugins.push(utwm());
return config;
},
};
export default nextConfig;