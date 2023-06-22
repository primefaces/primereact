import { Panel } from '../../lib/panel/Panel';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';
import Link from 'next/link';

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
                    PrimeReact components can be globally managed through a single location using the global <i>pt</i> object. Before using the pt state from <i>PrimeReactContext</i>, it is essential to encapsulate your application with{' '}
                    <i>PrimeReactProvider</i>. For more details, <Link href="/configuration/#import">click</Link> here.
                </p>
            </DocSectionText>
            <DocSectionCode code={code2} hideToggleCode import hideCodeSandbox hideStackBlitz />
        </>
    );
}
