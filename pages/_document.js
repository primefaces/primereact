import getConfig from 'next/config';
import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);

        return { ...initialProps };
    }

    render() {
        const contextPath = getConfig().publicRuntimeConfig.contextPath;

        return (
            <Html>
                <Head>
                    <link href={`${contextPath}/images/favicon.ico`} rel="icon" type="image/x-icon"></link>
                    <link id="theme-link" href={`${contextPath}/themes/lara-light-indigo/theme.css`} rel="stylesheet"></link>
                    <link rel="stylesheet" href={`${contextPath}/styles/flags.css`}></link>
                    {/* eslint-disable */}
                    <script src={`${contextPath}/scripts/prism/prism.js`} data-manual></script>
                    {/* eslint-enable */}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
