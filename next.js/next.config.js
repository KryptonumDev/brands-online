const path = require('path');

const nextConfig = {
  experimental: {
    serverActions: true,
  },
  productionBrowserSourceMaps: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['cdn.sanity.io']
  }
}

module.exports = nextConfig