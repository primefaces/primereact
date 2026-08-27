// Polyfill Buffer.SlowBuffer for Node v24+ compatibility with Next.js 12 compiled jsonwebtoken
const bufferModule = require('buffer');
if (typeof bufferModule.SlowBuffer === 'undefined') {
    bufferModule.SlowBuffer = class SlowBuffer extends bufferModule.Buffer {};
}

module.exports = {
    reactStrictMode: process.env.NODE_ENV === 'production' ? false : true,
    trailingSlash: true,
    publicRuntimeConfig: {
        appVersion: process.env.npm_package_version || ''
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: ['@svgr/webpack']
        });

        return config;
    },
    async redirects() {
        return [
            {
                source: '/setup',
                destination: '/installation',
                permanent: true
            }
        ];
    }
};
