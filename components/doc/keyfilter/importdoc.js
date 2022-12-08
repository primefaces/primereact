import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

export function ImportDoc(props) {
    const code = {
        basic: `
import { InputText } from 'primereact/inputtext';
        `
    };

    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <DocSectionCode code={code} hideToggleCode hideCodeSandbox />
        </>
    );
}
