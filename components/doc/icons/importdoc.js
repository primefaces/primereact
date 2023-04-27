import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ImportDoc(props) {
    const code = {
        basic: `
import 'primeicons/primeicons.css';
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>CSS file of the icon library needs to be imported in your application.</p>
            </DocSectionText>
            <DocSectionCode code={code} hideToggleCode import hideCodeSandbox hideStackBlitz />
        </>
    );
}
