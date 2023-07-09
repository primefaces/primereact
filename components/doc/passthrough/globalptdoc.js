import Link from 'next/link';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function GlobalPTDoc(props) {
    const code2 = {
        basic: `
// layout.js        
const { setPT } = useContext(PrimeReactContext);

setPT({
    panel: {
        header: { className: 'bg-primary' }
    },
    autocomplete: {
        input: { root: { className: 'w-16rem' } }
    }
});
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    PrimeReact components can be globally managed through a single source using the global <i>pt</i> object. Before using the pt state from <i>PrimeReactContext</i>, it is essential to encapsulate your application with{' '}
                    <i>PrimeReactProvider</i>. For more details, <Link href="/installation/#context">click</Link> here.
                </p>
            </DocSectionText>
            <DocSectionCode code={code2} hideToggleCode import hideCodeSandbox hideStackBlitz />
        </>
    );
}
