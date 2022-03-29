import { useEffect } from 'react';
import Script from 'next/script';
import { useRouter } from 'next/router';

export default function Analytics() {
    const router = useRouter();
    const handleRouteChange = (url) => {
        window.gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
            page_path: url
        });
    };

    useEffect(() => {
        router.events.on('routeChangeComplete', handleRouteChange);
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
      }, [router.events]);

    return (
        <>
            <Script strategy="lazyOnload" src="https://www.googletagmanager.com/gtag/js?id=UA-93461466-1" />
            <Script id="ga-analytics" strategy="lazyOnload">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'UA-93461466-1');
                `}
            </Script>
        </>
    );
}
