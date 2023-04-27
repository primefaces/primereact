import Link from 'next/link';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ConfigurationDoc(props) {
    const code = {
        basic: `
PrimeReact.ripple = true;
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    To start with, Ripple needs to be enabled globally. See the <Link href="/ripple">Configuration API</Link> for details.
                </p>
            </DocSectionText>
            <DocSectionCode code={code} hideToggleCode import hideCodeSandbox hideStackBlitz />
        </>
    );
}
