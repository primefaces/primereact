import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { InputText } from '@/components/lib/inputtext/InputText';

export function IconsDoc(props) {
    const code = {
        basic: `
<span className="p-input-icon-left">
    <i className="pi pi-search" />
    <InputText placeholder="Search" />
</span>

<span className="p-input-icon-right">
    <i className="pi pi-spin pi-spinner" />
    <InputText />
</span>
        `,
        javascript: `
import React from 'react'; 
import { InputText } from "primereact/inputtext";

export default function IconsDemo() {
    return (
        <div className="card flex flex-wrap justify-content-center gap-3">
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText placeholder="Search" />
            </span>

            <span className="p-input-icon-right">
                <i className="pi pi-spin pi-spinner" />
                <InputText />
            </span>
        </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { InputText } from "primereact/inputtext";

export default function IconsDemo() {
    return (
        <div className="card flex flex-wrap justify-content-center gap-3">
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText placeholder="Search" />
            </span>

            <span className="p-input-icon-right">
                <i className="pi pi-spin pi-spinner" />
                <InputText />
            </span>
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Icons can be placed inside an input element by wrapping both the input and the icon with an element that has either <i>.p-input-icon-left</i> or <i>p-input-icon-right</i> class.
                </p>
            </DocSectionText>
            <div className="card flex flex-wrap justify-content-center gap-3 ">
                <span className="p-input-icon-left">
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
    );
}
