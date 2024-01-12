/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        { source: '/', destination: '/about' }
      ]
    }
  },
}

module.exports = nextConfig
