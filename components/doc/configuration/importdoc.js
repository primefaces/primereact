import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ImportDoc(props) {
    const code = {
        basic: `
import PrimeReact from 'primereact/api';
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Configuration is managed by the <i>PrimeReact</i> instance imported from <i>primereact/api</i>.
                </p>
            </DocSectionText>
            <DocSectionCode code={code} hideToggleCode import hideCodeSandbox hideStackBlitz />
        </>
    );
}
