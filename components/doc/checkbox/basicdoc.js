import { useState } from "react";
import { Checkbox } from "../../lib/checkbox/Checkbox";
import { DocSectionText } from "../common/docsectiontext";
import { DocSectionCode } from "../common/docsectioncode";

export function BasicDoc(props) {
    const [checked, setChecked] = useState(false);

    const code = {
        basic: `
<Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox>
        `,
        javascript: `
import { useState } from "react";
import { Checkbox } from "primereact/checkbox";

export default function BasicDemo() {
    const [checked, setChecked] = useState(false);

    return (
        <Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox>
    )
}
        `,
        typescript: `
import { useState } from "react";
import { Checkbox } from "primereact/checkbox";

export default function BasicDemo() {
    const [checked, setChecked] = useState<boolean>(false);

    return (
        <Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                Checkbox is used as a controlled input with <i>value</i> and <i>onChange</i> properties.
            </DocSectionText>
            <div className="card">
                <Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox>
            </div>
            <DocSectionCode code={code} />
        </>
    )
}
