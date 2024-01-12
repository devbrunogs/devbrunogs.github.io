/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'export',
  async rewrites() {
    return {
      beforeFiles: [
        { source: '/', destination: '/about' }
      ]
    }
  },
}

module.exports = nextConfig
