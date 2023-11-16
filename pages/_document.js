import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html>
            <Head>
                {/* eslint-disable */}
                <link href="https://primefaces.org/cdn/primereact/images/favicon.ico" rel="icon" type="image/x-icon"></link>
                <link id="theme-link" href="/themes/lara-light-cyan/theme.css" rel="stylesheet"></link>
                <link id="home-table-link" href="/styles/landing/themes/lara-light-cyan/theme.css" rel="stylesheet"></link>
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
