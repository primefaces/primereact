import { Chips } from '../../lib/chips/Chips';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

export function InvalidDoc(props) {
    const code = {
        basic: `
<Chips className="p-invalid" />
        `,
        javascript: `
import { Chips } from "primereact/chips";

export default function InvalidDemo() {
    return (
        <Chips className="p-invalid" />
    )
}
        `,
        typescript: `
import { Chips } from "primereact/chips";

export default function InvalidDemo() {
    return (
        <Chips className="p-invalid" />
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                Applying <i>p-invalid</i> class to an input element indicates a failed validation.
            </DocSectionText>
            <div className="card p-fluid">
                <Chips className="p-invalid" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
