import Link from 'next/link';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function UnstyledModeDoc(props) {
    const code = {
        basic: `
import { PrimeReactProvider } from "primereact/api";
...
return(
    <PrimerReactProvider value={{ unstyled: true }}>
        <App />
    </PrimerReactProvider>
)
`
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Unstyled mode is disabled by default for all components. Using the PrimeReactContext during installation, set <i>unstyled</i> as true to enable it globally. Visit the <Link href="/unstyled">Unstyled mode</Link> documentation for
                    more information and examples.
                </p>
                <DocSectionCode code={code} hideToggleCode import hideCodeSandbox hideStackBlitz />
            </DocSectionText>
        </>
    );
}
