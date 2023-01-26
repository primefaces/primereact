module.exports = {
    reactStrictMode: process.env.NODE_ENV === 'production' ? false : true,
    trailingSlash: true,
    basePath: process.env.NODE_ENV === 'production' ? '/primereact' : '',
    publicRuntimeConfig: {
        appVersion: process.env.npm_package_version || '',
        contextPath: process.env.NODE_ENV === 'production' ? '/primereact' : '',
        uploadPath: process.env.NODE_ENV === 'production' ? '/primereact/upload.php' : '/api/upload',
        apiDocUrl: 'https://primefaces.github.io/primereact/api/9.0.0-beta.1'
    }
};
