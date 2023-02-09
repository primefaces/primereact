import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function SetLocaleDoc(props) {
    const code = {
        basic: `
locale('en');
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    An available locale can be set with <i>locale</i> method at anytime.
                </p>
            </DocSectionText>
            <DocSectionCode code={code} hideToggleCode import hideCodeSandbox hideStackBlitz />
        </>
    );
}
