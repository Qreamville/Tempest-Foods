const path = require("path");
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    prependData: '@import "./styles/index.scss";',
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};

module.exports = nextConfig;
