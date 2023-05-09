import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function RippleDoc(props) {
    const code = {
        basic: `
PrimeReact.ripple = true;
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Ripple is an optional animation for the supported components such as buttons. It is disabled by default.</p>
            </DocSectionText>
            <DocSectionCode code={code} hideToggleCode import hideCodeSandbox hideStackBlitz />
        </>
    );
}
