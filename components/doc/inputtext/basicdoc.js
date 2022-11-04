import { useState } from "react";
import { InputText } from "../../lib/inputtext/InputText";
import { DocSectionText } from "../common/docsectiontext";
import { DocSectionCode } from "../common/docsectioncode";

export function BasicDoc(props) {
    const [value, setValue] = useState('');

    const code = {
        basic: `
<InputText value={value} onChange={(e) => setValue(e.target.value)} />
<span className="ml-2">{value}</span>
        `,
        javascript: `
import { useState } from "react";
import { InputText } from "primereact/inputtext";

export default function BasicDemo() {
    const [value, setValue] = useState('');

    return (
        <InputText value={value} onChange={(e) => setValue(e.target.value)} />
    )
}
        `,
        typescript: `
import { useState } from "react";
import { InputText } from "primereact/inputtext";

export default function BasicDemo() {
    const [value, setValue] = useState<string>('');

    return (
        <InputText value={value} onChange={(e) => setValue(e.target.value)} />
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                InputText is used as a controlled input with <i>value</i> and <i>onChange</i> properties.
            </DocSectionText>
            <div className="card flex justify-content-center">
                <InputText value={value} onChange={(e) => setValue(e.target.value)} />
            </div>
            <DocSectionCode code={code} />
        </>
    )
}
