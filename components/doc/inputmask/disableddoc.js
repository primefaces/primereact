import { InputMask } from '../../lib/inputmask/InputMask';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

export function DisabledDoc(props) {
    const code = {
        basic: `
<InputMask mask="99-999999" placeholder="99-999999" disabled/>
        `,
        javascript: `
import { InputMask } from "primereact/inputmask";

export default function DisabledDemo() {
    return (
        <InputMask mask="99-999999" placeholder="99-999999" disabled/>
    )
}
        `,
        typescript: `
import { InputMask } from "primereact/inputmask";

export default function DisabledDemo() {
    return (
        <InputMask mask="99-999999" placeholder="99-999999" disabled />
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    <i>disabled</i> prop prevents an input from being editable.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <InputMask mask="99-999999" placeholder="99-999999" disabled />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
