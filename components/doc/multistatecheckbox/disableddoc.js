import { MultiStateCheckbox } from '../../lib/multistatecheckbox/MultiStateCheckbox';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

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
