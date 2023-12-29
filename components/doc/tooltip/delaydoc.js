import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Button } from '@/components/lib/button/Button';

export function DelayDoc(props) {
    const code = {
        basic: `
<Button tooltip="Confirm to proceed" tooltipOptions={{ showDelay: 1000, hideDelay: 300 }} label="Save" />
        `,
        javascript: `
import React from 'react'; 
import { Button } from 'primereact/button';

export default function DelayDemo() {
    return (
        <div className="card flex justify-content-center">
            <Button tooltip="Confirm to proceed" tooltipOptions={{ showDelay: 1000, hideDelay: 300 }} label="Save" />
        </div>
    );
}
        `,
        typescript: `
import React from 'react'; 
import { Button } from 'primereact/button';

export default function DelayDemo() {
    return (
        <div className="card flex justify-content-center">
            <Button tooltip="Confirm to proceed" tooltipOptions={{ showDelay: 1000, hideDelay: 300 }} label="Save" />
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Adding delays to the show and hide events are defined with <i>showDelay</i> and <i>hideDelay</i> options respectively.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Button tooltip="Confirm to proceed" tooltipOptions={{ showDelay: 1000, hideDelay: 300 }} label="Save" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
