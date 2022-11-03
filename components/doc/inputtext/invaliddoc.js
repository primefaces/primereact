import { InputText } from "../../lib/inputtext/InputText";
import { DocSectionText } from "../common/docsectiontext";
import { DocSectionCode } from "../common/docsectioncode";

export function InvalidDoc(props) {
    const code = {
        basic: `
<label htmlFor="username" className="block">
    Username
</label>
<InputText id="username" aria-describedby="username-help" className="p-invalid block" />
<small id="username-help" className="p-error block">
    Username is not available.
</small>
        `,
        javascript: `
import { InputText } from "primereact/inputtext";

export default function InvalidDemo() {
    return (
        <div className="card flex flex-column align-items-start gap-2">
            <label htmlFor="username" className="block">
                Username
            </label>
            <InputText id="username" aria-describedby="username-help" className="p-invalid block" />
            <small id="username-help" className="p-error block">
                Username is not available.
            </small>
        </div>
    )
}
        `,
        typescript: `
import { InputText } from "primereact/inputtext";

export default function InvalidDemo() {
    return (
        <div className="card flex flex-column align-items-start gap-2">
            <label htmlFor="username" className="block">
                Username
            </label>
            <InputText id="username" aria-describedby="username-help" className="p-invalid block" />
            <small id="username-help" className="p-error block">
                Username is not available.
            </small>
        </div>
    )
}
        `
    };
    
    return (
        <>
            <DocSectionText {...props}>
                Applying <i>p-invalid</i> class to an input element indicates a failed validation.
            </DocSectionText>
            <div className="card flex flex-column align-items-start gap-2">
                <label htmlFor="username" className="block">
                    Username
                </label>
                <InputText id="username" aria-describedby="username-help" className="p-invalid block" />
                <small id="username-help" className="p-error block">
                    Username is not available.
                </small>
            </div>
            <DocSectionCode code={code} />
        </>
    )
}
