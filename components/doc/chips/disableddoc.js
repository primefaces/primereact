import { Chips } from '../../lib/chips/Chips';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

export function DisabledDoc(props) {
    const code = {
        basic: `
<Chips disabled placeholder="Disabled" />
        `,
        javascript: `
import { Chips } from "primereact/chips";

export default function DisabledDemo() {
    return (
        <Chips disabled placeholder="Disabled" />
    )
}
        `,
        typescript: `
import { Chips } from "primereact/chips";

export default function DisabledDemo() {
    return (
        <Chips disabled placeholder="Disabled" />
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <i>disabled</i> prop prevents an input from being editable.
            </DocSectionText>
            <div className="card p-fluid">
                <Chips disabled placeholder="Disabled" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
