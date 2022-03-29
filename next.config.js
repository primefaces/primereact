module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  basePath: process.env.NODE_ENV === 'production' ? '/primereact' : '',
  publicRuntimeConfig: {
      contextPath: process.env.NODE_ENV === 'production' ? '/primereact' : '',
      uploadPath: process.env.NODE_ENV === 'production' ? '/primereact/upload.php' : '/api/upload',
  }
}
