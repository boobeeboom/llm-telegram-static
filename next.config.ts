import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/llm-telegram-static',
  images: { unoptimized: true },
}

export default nextConfig
