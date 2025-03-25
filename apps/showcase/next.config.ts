import type { NextConfig } from 'next';
import './scripts/generate-source.mjs';

const nextConfig: NextConfig = {
    transpilePackages: ['primeicons']
};

export default nextConfig;
