import type { NextConfig } from "next";
import type { Configuration } from 'webpack';

/** @type {import('next/config').NextConfig} */
const nextConfig = {
  webpack(config: Configuration) {
    if (!config.module) config.module = {};
    if (!config.module.rules) config.module.rules = [];
    
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    });
    return config;
  }
}

module.exports = nextConfig;