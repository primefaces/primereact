import { DocSectionText } from '../common/docsectiontext';

export function ExamplesDoc(props) {
    return (
        <>
            <DocSectionText {...props}>
                <p>We've created various samples for the popular options in the React ecosystem.</p>
            </DocSectionText>
            <div className="flex flex-wrap card justify-content-between gap-3">
                <a href="https://github.com/primefaces/primereact-examples/tree/main/cra-basic">
                    <img src="/images/logos/cra.svg" alt="Create React App" className="w-8rem h-8rem"></img>
                </a>
                <a href="https://github.com/primefaces/primereact-examples/tree/main/nextjs-basic">
                    <img src="/images/logos/next-js.svg" alt="Next.JS" className="w-8rem h-8rem"></img>
                </a>
                <a href="https://github.com/primefaces/primereact-examples/tree/main/remix-run-basic">
                    <img src="/images/logos/remix.png" alt="Create React App" className="w-8rem h-8rem"></img>
                </a>
                <a href="https://github.com/primefaces/primereact-examples/tree/main/vite-basic-ts">
                    <img src="/images/logos/vite.png" alt="Vite" className="w-8rem h-8rem"></img>
                </a>
            </div>
        </>
    );
}
