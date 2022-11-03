import { InputText } from "../../lib/inputtext/InputText";
import { DocSectionCode } from "../common/docsectioncode";
import { DocSectionText } from "../common/docsectiontext";

export function HelpTextDoc(props) {
    const code = {
        basic: `
<label htmlFor="username" className="block">
    Username
</label>
<InputText id="username" aria-describedby="username-help" className="block" />
<small id="username-help" className="block">
    Enter your username to reset your password.
</small>
        `,
        javascript: `
import { InputText } from "primereact/inputtext";

export default function HelpTextDemo() {
    return (
        <div className="card flex flex-column align-items-start gap-2">
            <label htmlFor="username" className="block">
                Username
            </label>
            <InputText id="username" aria-describedby="username-help" className="block" />
            <small id="username-help" className="block">
                Enter your username to reset your password.
            </small>
        </div>
    )
}
        `,
        typescript: `
import { InputText } from "primereact/inputtext";

export default function HelpTextDemo() {
    return (
        <div className="card flex flex-column align-items-start gap-2">
            <label htmlFor="username" className="block">
                Username
            </label>
            <InputText id="username" aria-describedby="username-help" className="block" />
            <small id="username-help" className="block">
                Enter your username to reset your password.
            </small>
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                An advisory text can be defined with the semantic <i>small</i> tag.
            </DocSectionText>
            <div className="card flex flex-column align-items-start gap-2">
                <label htmlFor="username" className="block">
                    Username
                </label>
                <InputText id="username" aria-describedby="username-help" className="block" />
                <small id="username-help" className="block">
                    Enter your username to reset your password.
                </small>
            </div>
            <DocSectionCode code={code} />
        </>
    )
}
