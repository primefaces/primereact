import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { MultiStateCheckbox } from '@/components/lib/multistatecheckbox/MultiStateCheckbox';

export function DisabledDoc(props) {
    const code = {
        basic: `
<MultiStateCheckbox disabled />
        `,
        javascript: `
import React from "react";
import { MultiStateCheckbox } from 'primereact/multistatecheckbox';

export default function InvalidDemo() {
    return (
        <div className="card flex justify-content-center">
            <MultiStateCheckbox disabled />
        </div>
    );
}
        `,
        typescript: `
    import React from "react";
        import { MultiStateCheckbox } from 'primereact/multistatecheckbox';
        
        export default function InvalidDemo() {
            return (
                <div className="card flex justify-content-center">
                    <MultiStateCheckbox disabled />
                </div>
            );
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
                <MultiStateCheckbox disabled />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
