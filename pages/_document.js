import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);

        return { ...initialProps };
    }

    render() {
        return (
            <Html>
                <Head>
                    <link href={`https://www.primereact.org/images/favicon.ico`} rel="icon" type="image/x-icon"></link>
                    <link id="theme-link" href={`https://www.primereact.org/themes/lara-light-indigo/theme.css`} rel="stylesheet"></link>
                    <link rel="stylesheet" href={`https://www.primereact.org/styles/flags.css`}></link>
                    {/* eslint-disable */}
                    <script src={`https://www.primereact.org/scripts/prism/prism.js`} data-manual></script>
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
