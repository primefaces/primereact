import { InputText } from "../../lib/inputtext/InputText";
import { DocSectionText } from "../common/docsectiontext";
import { DocSectionCode } from "../common/docsectioncode";

export function DisabledDoc(props) {
    const code = {
        basic: `
<InputText disabled />
        `,
        javascript: `
import { InputText } from "primereact/inputtext";

export default function DisabledDemo() {
    return (
        <InputText disabled placeholder="Disabled" />
    )
}
        `,
        typescript: `
import { InputText } from "primereact/inputtext";

export default function DisabledDemo() {
    return (
        <InputText disabled placeholder="Disabled" />
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <i>disabled</i> prop prevents an input from being editable.
            </DocSectionText>
            <div className="card">
                <InputText disabled placeholder="Disabled" />
            </div>
            <DocSectionCode code={code} />
        </>
    )
}
