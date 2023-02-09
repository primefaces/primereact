module.exports = {
    reactStrictMode: process.env.NODE_ENV === 'production' ? false : true,
    trailingSlash: true,
    publicRuntimeConfig: {
        appVersion: process.env.npm_package_version || '',
        apiDocUrl: 'https://primefaces.github.io/primereact/api/9.0.0-beta.1'
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: ['@svgr/webpack']
        });

        return config;
    }
};
