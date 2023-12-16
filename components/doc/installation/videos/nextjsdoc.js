import { DocSectionText } from '@/components/doc/common/docsectiontext';

export function NextJSDoc(props) {
    return (
        <>
            <DocSectionText {...props}>
                <p>
                    PrimeReact has first class support for SSR and{' '}
                    <a alt="NextJS" href="https://nextjs.org/">
                        Next.JS
                    </a>
                    , in fact this website is also built with Next.js
                </p>
            </DocSectionText>
            <div className="video-container">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/OrRffCobuts" frameBorder="0" allowFullScreen title="Getting Started With NextJs"></iframe>
            </div>
        </>
    );
}
