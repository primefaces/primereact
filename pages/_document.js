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
                    {/* eslint-disable */}
                    <link href="https://primefaces.org/cdn/primereact/images/favicon.ico" rel="icon" type="image/x-icon"></link>
                    <link id="theme-link" href="/themes/lara-light-indigo/theme.css" rel="stylesheet"></link>
                    <link id="landing-table-theme-link" href="https://www.primereact.org/styles/landing/themes/lara-light-indigo/theme.css" rel="stylesheet"></link>
                    <link rel="stylesheet" href="/styles/flags.css"></link>
                    <script src="/scripts/prism/prism.js" data-manual></script>
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
