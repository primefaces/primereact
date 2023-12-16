import { DocSectionText } from '@/components/doc/common/docsectiontext';

export function ExamplesDoc(props) {
    return (
        <>
            <DocSectionText {...props}>
                <p>We've created various samples for the popular options in the React ecosystem.</p>
            </DocSectionText>
            <div className="flex flex-wrap card justify-content-between gap-3">
                <a href="https://github.com/primefaces/primereact-examples/tree/main/cra-basic">
                    <img src="https://primefaces.org/cdn/primereact/images/logos/cra.svg" alt="Create React App" className="w-8rem h-8rem"></img>
                </a>
                <a href="https://github.com/primefaces/primereact-examples/tree/main/nextjs-basic">
                    <img src="https://primefaces.org/cdn/primereact/images/logos/next-js.svg" alt="Next.JS" className="w-8rem h-8rem"></img>
                </a>
                <a href="https://github.com/primefaces/primereact-examples/tree/main/remix-run-basic">
                    <img src="https://primefaces.org/cdn/primereact/images/logos/remix.png" alt="Create React App" className="w-8rem h-8rem"></img>
                </a>
                <a href="https://github.com/primefaces/primereact-examples/tree/main/vite-basic-ts">
                    <img src="https://primefaces.org/cdn/primereact/images/logos/vite.png" alt="Vite" className="w-8rem h-8rem"></img>
                </a>
                <a href="https://github.com/refinedev/refine/tree/master/examples/blog-refine-primereact">
                    <img src="https://primefaces.org/cdn/primereact/images/logos/refine.svg" alt="Refine" className="w-8rem h-8rem"></img>
                </a>
            </div>
        </>
    );
}
