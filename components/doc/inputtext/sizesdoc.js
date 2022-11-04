import { InputText } from "../../lib/inputtext/InputText";
import { DocSectionText } from "../common/docsectiontext";
import { DocSectionCode } from "../common/docsectioncode";

export function SizesDoc(props) {
    const code = {
        basic: `
<InputText type="text" className="p-inputtext-sm" placeholder="Small" />
<InputText type="text" className="block" placeholder="Normal" />
<InputText type="text" className="p-inputtext-lg" placeholder="Large" />
        `,
        javascript: `
import { InputText } from "primereact/inputtext";

export default function SizesDemo() {
    return (
        <div className="flex flex-column gap-3">
            <InputText type="text" className="p-inputtext-sm" placeholder="Small" />
            <InputText type="text" className="block" placeholder="Normal" />
            <InputText type="text" className="p-inputtext-lg" placeholder="Large" />
        </div>
    )
}
        `,
        typescript: `
import { InputText } from "primereact/inputtext";

export default function SizesDemo() {
    return (
        <div className="flex flex-column gap-3">
            <InputText type="text" className="p-inputtext-sm" placeholder="Small" />
            <InputText type="text" className="block" placeholder="Normal" />
            <InputText type="text" className="p-inputtext-lg" placeholder="Large" />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                Apply <i>p-input-sm</i> to reduce the size of the input element or <i>p-input-lg</i> to enlarge them.
            </DocSectionText>
            <div className="card flex justify-content-center">
                <div className="flex flex-column gap-3">
                    <InputText type="text" className="p-inputtext-sm" placeholder="Small" />
                    <InputText type="text" className="block" placeholder="Normal" />
                    <InputText type="text" className="p-inputtext-lg" placeholder="Large" />
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    )
}
