import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';

export function GlobalPTDoc(props) {
    const code = {
        basic: `
// _app.js        
import { PrimeReactProvider } from "primereact/api";

export default function GlobalPTDemo() {

    const pt = {
        panel: {
            header: { className: 'bg-primary' }
        },
        autocomplete: {
            input: { root: { className: 'w-16rem' } }
        }
    };

    return(
        <PrimeReactProvider value={{ pt }}>
            <App />
        </PrimeReactProvider>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Defines the shared pass through properties per component type. For example, with the configuration below all panel headers have the <i>bg-primary</i> style class and the all autocomplete components have a fixed width. These
                    settings can be overriden by a particular component as components <i>pt</i> property has higher precedence over global <i>pt</i>.
                </p>
            </DocSectionText>
            <DocSectionCode code={code} hideToggleCode import hideStackBlitz />
        </>
    );
}
