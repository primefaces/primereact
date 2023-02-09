import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

export function ImportDoc(props) {
    const code = {
        basic: `
import { Galleria } from 'primereact/galleria';
        `
    };

    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <DocSectionCode code={code} hideToggleCode import hideCodeSandbox hideStackBlitz />
        </>
    );
}
