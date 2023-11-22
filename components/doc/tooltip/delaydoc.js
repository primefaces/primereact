import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { InputText } from '@/components/lib/inputtext/InputText';

export function DelayDoc(props) {
    const code = {
        basic: `
<InputText type="text" placeholder="Delayed" tooltip="Enter your username" tooltipOptions={{ showDelay: 1000, hideDelay: 300 }} />
        `,
        javascript: `
import React from 'react'; 
import { InputText } from 'primereact/inputtext';

export default function DelayDemo() {
    return (
        <div className="card flex justify-content-center">
            <InputText type="text" placeholder="Delayed" tooltip="Enter your username" tooltipOptions={{ showDelay: 1000, hideDelay: 300 }} />
        </div>
    );
}
        `,
        typescript: `
import React from 'react'; 
import { InputText } from 'primereact/inputtext';

export default function DelayDemo() {
    return (
        <div className="card flex justify-content-center">
            <InputText type="text" placeholder="Delayed" tooltip="Enter your username" tooltipOptions={{ showDelay: 1000, hideDelay: 300 }} />
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
                <InputText type="text" placeholder="Delayed" tooltip="Enter your username" tooltipOptions={{ showDelay: 1000, hideDelay: 300 }} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
