import { useRouter } from 'next/router';
import Script from 'next/script';
import React, { useEffect } from 'react';

export const GTagManager = () => {
    const router = useRouter();

    useEffect(() => {
        const handleRouteChange = (url) => {
            pageview(url);
        };

        router.events.on('routeChangeComplete', handleRouteChange);

        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [router.events]);

    useEffect(() => {
        pageview(router.pathname);
    }, [router.pathname]);

    const pageview = (url) => {
        window.gtag('config', 'G-FZJEC89ZVF', {
            page_path: url
        });
    };

    return (
        <>
            <Script src="https://www.googletagmanager.com/gtag/js?id=G-FZJEC89ZVF" />
            <Script id="google-analytics">
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          
          gtag('config', 'G-FZJEC89ZVF');
          `}
            </Script>
        </>
    );
};
