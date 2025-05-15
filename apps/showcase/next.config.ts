import type { NextConfig } from 'next';
import { withContentlayer } from 'next-contentlayer2';
//import './scripts/generate-source.mjs';

const nextConfig: NextConfig = {
    transpilePackages: ['primeicons']
};

export default withContentlayer(nextConfig);
