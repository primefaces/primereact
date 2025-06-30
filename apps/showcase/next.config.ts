import { globSync } from 'glob';
import type { NextConfig } from 'next';
import { withContentlayer } from 'next-contentlayer2';
import path from 'path';
import './scripts/build-contents.mjs';

const nextConfig: NextConfig = {
    transpilePackages: ['primeicons'],
    images: {
        domains: ['primefaces.org']
    },
    async redirects() {
        const componentDirs = globSync('docs/components/**');

        const componentRedirects = componentDirs
            .map((dirPath) => {
                const ext = path.extname(dirPath);
                const fileName = path.basename(dirPath, ext);
                const folderName = path.basename(path.dirname(dirPath));

                return [
                    {
                        source: `/${folderName}/${fileName}`,
                        destination: `/docs/components/${folderName}/${fileName}`,
                        permanent: true
                    },
                    {
                        source: `/${folderName}`,
                        destination: `/docs/components/${folderName}`,
                        permanent: true
                    }
                ];
            })
            .flat();

        return [
            {
                source: '/docs/components',
                destination: '/docs/gettingstarted/introduction',
                permanent: true
            },
            {
                source: '/docs',
                destination: '/docs/gettingstarted/introduction',
                permanent: true
            },
            ...componentRedirects
        ];
    },
    async rewrites() {
        return [
            {
                source: '/docs/:path*.md',
                destination: '/raw/docs/:path*'
            }
        ];
    },
    eslint: {
        ignoreDuringBuilds: true
    },
    typescript: {
        ignoreBuildErrors: true
    }
};

export default withContentlayer(nextConfig);
