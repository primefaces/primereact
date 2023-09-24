import { DocSectionCode } from '../../common/docsectioncode';
import { DocSectionText } from '../../common/docsectiontext';

export function ImportDoc(props) {
    const code = {
        basic: `
import { useLocalStorage } from 'primereact/hooks';
import { useSessionStorage } from 'primereact/hooks';
        `
    };

    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <DocSectionCode code={code} hideToggleCode import hideCodeSandbox hideStackBlitz />
        </>
    );
}
