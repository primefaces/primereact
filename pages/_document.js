import Document, { Html, Head, Main, NextScript } from 'next/document'
import getConfig from 'next/config';

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        const contextPath = getConfig().publicRuntimeConfig.contextPath;

        return (
            <Html>
                <Head>
                    <link id="theme-link" href={`${contextPath}/themes/lara-light-indigo/theme.css`} rel="stylesheet"></link>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument;