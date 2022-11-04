import { InputTextarea } from '../../lib/inputtextarea/InputTextarea';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

export function DisabledDoc(props) {
    const code = {
        basic: `
<InputTextarea disabled rows={5} cols={30} />
        `,
        javascript: `
import { InputTextarea } from "primereact/inputtextarea";

export default function DisabledDemo() {
    return (
        <InputTextarea disabled rows={5} cols={30} value="Disabled" />
    )
}
        `,
        typescript: `
import { InputTextarea } from "primereact/inputtextarea";

export default function DisabledDemo() {
    return (
        <InputTextarea disabled rows={5} cols={30} value="Disabled" />
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <i>disabled</i> prop prevents a textarea from being editable.
            </DocSectionText>
            <div className="card flex justify-content-center">
                <InputTextarea disabled rows={5} cols={30} value="Disabled" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
