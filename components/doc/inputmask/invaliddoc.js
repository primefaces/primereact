import { InputMask } from '../../lib/inputmask/InputMask';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

export function InvalidDoc(props) {
    const code = {
        basic: `
<InputMask mask="99-999999" placeholder="99-999999" className="p-invalid"/>
        `,
        javascript: `
import { InputMask } from "primereact/inputmask";

export default function InvalidDemo() {
    return (
        <InputMask mask="99-999999" placeholder="99-999999" className="p-invalid"/>
    )
}
        `,
        typescript: `
import { InputMask } from "primereact/inputmask";

export default function InvalidDemo() {
    return (
        <InputMask mask="99-999999" placeholder="99-999999" className="p-invalid" />
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                Applying <i>p-invalid</i> class to an input element indicates a failed validation.
            </DocSectionText>
            <div className="card flex justify-content-center">
                <InputMask mask="99-999999" placeholder="99-999999" className="p-invalid" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
