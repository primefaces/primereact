import { globSync } from 'glob';
import type { NextConfig } from 'next';
import { withContentlayer } from 'next-contentlayer2';
import path from 'path';
import './scripts/build-contents.mjs';

const nextConfig: NextConfig = {
    transpilePackages: ['primeicons'],
    webpack: (config, { dev }) => {
        if (dev) {
            // Disable caching for hot reload
            config.cache = false;

            // Watch source files
            config.snapshot = {
                ...config.snapshot,
                managedPaths: [],
                immutablePaths: []
            };

            try {
                if (process.env.DEV_ENV === 'hot') {
                    config.resolve.alias = {
                        ...config.resolve.alias,
                        '@primeuix/headless': path.resolve(__dirname, '../../../../packages/headless'),
                        '@primeuix/styled': path.resolve(__dirname, '../../../../packages/styled'),
                        '@primeuix/styles': path.resolve(__dirname, '../../../../packages/styles'),
                        '@primeuix/themes': path.resolve(__dirname, '../../../../packages/themes'),
                        '@primeuix/utils': path.resolve(__dirname, '../../../../packages/utils'),
                        '@primeuix/motion': path.resolve(__dirname, '../../../../packages/motion')
                    };
                }
            } catch {
                // NOOP
            }
        }

        return config;
    },
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
