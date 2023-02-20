module.exports = {
    reactStrictMode: process.env.NODE_ENV === 'production' ? false : true,
    trailingSlash: true,
    publicRuntimeConfig: {
        apiUrl: process.env.NODE_ENV === 'production' ? 'https://www.primereact.org/api/data/customers' : 'http://localhost:3000/api/data/customers',
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
