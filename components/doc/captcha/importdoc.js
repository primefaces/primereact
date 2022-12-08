import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

export function ImportDoc(props) {
    const code = {
        basic: `
import { Captcha } from 'primereact/captcha';
        `
    };

    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <DocSectionCode code={code} hideToggleCode hideCodeSandbox />
        </>
    );
}
