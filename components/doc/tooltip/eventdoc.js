import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { InputText } from '@/components/lib/inputtext/InputText';

export function EventDoc(props) {
    const code = {
        basic: `
<InputText type="text" placeholder="Hover" tooltip="Enter your username"/>
<InputText type="text" placeholder="Focus" tooltip="Enter your username" tooltipOptions={{ event: 'focus' }} />
<InputText type="text" placeholder="Both" tooltip="Enter your username" tooltipOptions={{ event: 'both' }} />
        `,
        javascript: `
import React from 'react'; 
import { InputText } from 'primereact/inputtext';

export default function EventDemo() {
    return (
        <div className="card flex justify-content-center gap-2">
            <InputText type="text" placeholder="Hover" tooltip="Enter your username"/>
            <InputText type="text" placeholder="Focus" tooltip="Enter your username" tooltipOptions={{ event: 'focus' }} />
            <InputText type="text" placeholder="Both" tooltip="Enter your username" tooltipOptions={{ event: 'both' }} />
        </div>
    );
}
        `,
        typescript: `
import React from 'react'; 
import { InputText } from 'primereact/inputtext';

export default function EventDemo() {
    return (
        <div className="card flex justify-content-center gap-2">
            <InputText type="text" placeholder="Hover" tooltip="Enter your username"/>
            <InputText type="text" placeholder="Focus" tooltip="Enter your username" tooltipOptions={{ event: 'focus' }} />
            <InputText type="text" placeholder="Both" tooltip="Enter your username" tooltipOptions={{ event: 'both' }} />
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Tooltip gets displayed on hover event by default, use the <i>event</i> option to set <i>focus</i> or <i>both</i> as alternatives.
                </p>
            </DocSectionText>
            <div className="card flex flex-wrap justify-content-center gap-2">
                <InputText type="text" placeholder="Hover" tooltip="Enter your username" />
                <InputText type="text" placeholder="Focus" tooltip="Enter your username" tooltipOptions={{ event: 'focus' }} />
                <InputText type="text" placeholder="Both" tooltip="Enter your username" tooltipOptions={{ event: 'both' }} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
