import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';
import Link from 'next/link';

export function SetupDoc(props) {
    const code1 = {
        basic: `
import { PrimeReactProvider } from "primereact/api";
import Tailwind from "primereact/passthrough/tailwind";

...
return(
    <PrimeReactProvider value={{ unstyled: true, pt: Tailwind }}>
        <App />
    </PrimeReactProvider>
)
`
    };
    const code2 = {
        basic: `
export default {
    ...
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./node_modules/primereact/**/*.{js,ts,jsx,tsx}"
    ],
    ...
}
`
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    This section assumes that Tailwind is already available in your application, if not visit the Tailwind CSS <a href="https://tailwindcss.com/docs/installation/framework-guides">framework guides</a> like Vite or Next for the
                    installation. The built-in default theme is basically a <Link href="/passthrough">global pass through</Link> configuration that needs to be imported from <i>primereact/passthrough/tailwind</i> path and then defined during setup.
                    Since the theme is exclusive to unstyled mode, the <i>unstyled</i> setting is required in addition.
                </p>
                <DocSectionCode code={code1} hideToggleCode import hideCodeSandbox hideStackBlitz />
                <p>
                    Tailwind uses PurgeCSS internally to remove unused classes, since PrimeReact components are loaded from node_modules the <i>content</i> property at <i>tailwind.config.js</i> needs to be aware of PrimeReact, otherwise the classes
                    utilized in the theme will be removed as well.
                </p>
                <DocSectionCode code={code2} hideToggleCode import hideCodeSandbox hideStackBlitz />
                <p>Voilà 💙, you now have 90+ awesome React UI components styled with Tailwind that will work in harmony with the rest of your application.</p>
            </DocSectionText>
        </>
    );
}
