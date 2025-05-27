import type { NextConfig } from 'next';
import { withContentlayer } from 'next-contentlayer2';
//import './scripts/generate-source.mjs';

const nextConfig: NextConfig = {
    transpilePackages: ['primeicons'],
    async redirects() {
        return [
            {
                source: '/docs/components',
                destination: '/docs/components/avatar',
                permanent: true
            },
            {
                source: '/docs',
                destination: '/docs/components/avatar',
                permanent: true
            }
        ];
    }
};

export default withContentlayer(nextConfig);
