import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { MultiStateCheckbox } from '@/components/lib/multistatecheckbox/MultiStateCheckbox';

export function InvalidDoc(props) {
    const code = {
        basic: `
<MultiStateCheckbox className="p-invalid" />
        `,
        javascript: `
import React from "react";
import { MultiStateCheckbox } from 'primereact/multistatecheckbox';

export default function InvalidDemo() {
    return (
        <div className="card flex justify-content-center">
            <MultiStateCheckbox className="p-invalid" />
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
                    <MultiStateCheckbox className="p-invalid" />
                </div>
            );
        }
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Invalid state style is added using the <i>p-invalid</i> class to indicate a failed validation.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <MultiStateCheckbox className="p-invalid" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
