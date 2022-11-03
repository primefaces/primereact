import { useState } from "react";
import { InputTextarea } from "../../lib/inputtextarea/InputTextarea";
import { DocSectionText } from "../common/docsectiontext";
import { DocSectionCode } from "../common/docsectioncode";

export function AutoResizeDoc(props) {
    const [value, setValue] = useState('');

    const code = {
        basic: `
<InputTextarea value={value} onChange={(e) => setValue(e.target.value)} rows={5} cols={30} autoResize />
        `,
        javascript: `
import { useState } from "react";
import { InputTextarea } from "primereact/inputtextarea";

export default function GettingStartedDemo() {
    const [value, setValue] = useState('');

    return (
        <InputTextarea value={value} onChange={(e) => setValue(e.target.value)} rows={5} cols={30} autoResize />
    )
}
        `,
        typescript: `
import { useState } from "react";
import { InputTextarea } from "primereact/inputtextarea";

export default function GettingStartedDemo() {
    const [value, setValue] = useState<string>('');

    return (
        <InputTextarea value={value} onChange={(e) => setValue(e.target.value)} rows={5} cols={30} autoResize />
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                In auto resize mode, textarea grows instead of displaying a scrollbar.
            </DocSectionText>
            <div className="card">
                <InputTextarea rows={5} cols={30} value={value} onChange={(e) => setValue(event.target.value)} autoResize />
            </div>
            <DocSectionCode code={code} />
        </>
    )
}
