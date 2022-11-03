import { DocSectionText } from "../common/docsectiontext";
import { DocSectionCode } from "../common/docsectioncode";

export function ImportDoc(props) {
    const code = {
        basic: `
import { Checkbox } from 'primereact/checkbox';
        `
    };

    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <DocSectionCode code={code} hideToggleCode hideCodeSandbox />
        </>
    )
}