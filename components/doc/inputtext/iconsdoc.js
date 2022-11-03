import { InputText } from "../../lib/inputtext/InputText";
import { DocSectionText } from "../common/docsectiontext";
import { DocSectionCode } from "../common/docsectioncode";

export function IconsDoc(props) {
    const code = {
        basic: `
<span className="p-input-icon-left mr-3">
    <i className="pi pi-search" />
    <InputText placeholder="Search" />
</span>

<span className="p-input-icon-right">
    <i className="pi pi-spin pi-spinner" />
    <InputText />
</span>
        `,
        javascript: `
import { InputText } from "primereact/inputtext";

export default function IconsDemo() {
    return (
        <>
            <span className="p-input-icon-left mr-3">
                <i className="pi pi-search" />
                <InputText />
            </span>

            <span className="p-input-icon-right">
                <i className="pi pi-spin pi-spinner" />
                <InputText />
            </span>
        </>
    )
}
        `,
        typescript: `
import { InputText } from "primereact/inputtext";

export default function IconsDemo() {
    return (
        <>
            <span className="p-input-icon-left mr-3">
                <i className="pi pi-search" />
                <InputText />
            </span>

            <span className="p-input-icon-right">
                <i className="pi pi-spin pi-spinner" />
                <InputText />
            </span>
        </>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                Icons can be placed inside an input element by wrapping both the input and the icon with an element that has either <i>.p-input-icon-left</i> or <i>p-input-icon-right</i> class.
            </DocSectionText>
            <div className="card">
                <span className="p-input-icon-left mr-3">
                    <i className="pi pi-search" />
                    <InputText placeholder="Search" />
                </span>

                <span className="p-input-icon-right">
                    <i className="pi pi-spin pi-spinner" />
                    <InputText />
                </span>
            </div>
            <DocSectionCode code={code} />
        </>
    )
}
