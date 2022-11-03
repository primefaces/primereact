import { DocSectionText } from "../common/docsectiontext";
import { DocSectionCode } from "../common/docsectioncode";

export function ImportDoc(props) {
    const code = {
        basic: `
import { InputTextarea } from 'primereact/inputtextarea';
        `
    };

    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <DocSectionCode code={code} hideToggleCode hideCodeSandbox />
        </>
    )
}