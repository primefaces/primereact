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
    },
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true
    },
    typescript: {
        ignoreBuildErrors: true
    }
};

export default withContentlayer(nextConfig);
