import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { AutoComplete } from '@/components/lib/autocomplete/AutoComplete';

export function DisabledDoc(props) {
    const code = {
        basic: `
<AutoComplete disabled placeholder="Disabled" />
        `,
        javascript: `
import React from "react";
import { AutoComplete } from "primereact/autocomplete";

export default function DisabledDemo() {
    return (
        <div className="card flex justify-content-center">
            <AutoComplete disabled placeholder="Disabled" />
        </div>
    )
}
        `,
        typescript: `
import React from "react";
import { AutoComplete } from "primereact/autocomplete";

export default function DisabledDemo() {
    return (
        <div className="card flex justify-content-center">
            <AutoComplete disabled placeholder="Disabled" />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    When <i>disabled</i> is present, the element cannot be edited and focused.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <AutoComplete disabled placeholder="Disabled" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
