import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { InputText } from '@/components/lib/inputtext/InputText';

export function PositionDoc(props) {
    const code = {
        basic: `
<InputText type="text" placeholder="Right" tooltip="Enter your username" />
<InputText type="text" placeholder="Top" tooltip="Enter your username" tooltipOptions={{ position: 'top' }} />
<InputText type="text" placeholder="Bottom" tooltip="Enter your username" tooltipOptions={{ position: 'bottom' }} />
<InputText type="text" placeholder="Left" tooltip="Enter your username" tooltipOptions={{ position: 'left' }} />
<InputText type="text" placeholder="Mouse" tooltip="Enter your username" tooltipOptions={{ position: 'mouse' }} />
        `,
        javascript: `
import React from 'react';
import { InputText } from 'primereact/inputtext';

export default function PositionDemo() {
    return (
        <div className="card flex flex-wrap justify-content-center gap-2">
            <InputText type="text" placeholder="Right" tooltip="Enter your username" />
            <InputText type="text" placeholder="Top" tooltip="Enter your username" tooltipOptions={{ position: 'top' }} />
            <InputText type="text" placeholder="Bottom" tooltip="Enter your username" tooltipOptions={{ position: 'bottom' }} />
            <InputText type="text" placeholder="Left" tooltip="Enter your username" tooltipOptions={{ position: 'left' }} />
            <InputText type="text" placeholder="Mouse" tooltip="Enter your username" tooltipOptions={{ position: 'mouse' }} />
        </div>
    );
}
        `,
        typescript: `
import React from 'react';
import { InputText } from 'primereact/inputtext';

export default function PositionDemo() {
    return (
        <div className="card flex flex-wrap justify-content-center gap-2">
            <InputText type="text" placeholder="Right" tooltip="Enter your username" />
            <InputText type="text" placeholder="Top" tooltip="Enter your username" tooltipOptions={{ position: 'top' }} />
            <InputText type="text" placeholder="Bottom" tooltip="Enter your username" tooltipOptions={{ position: 'bottom' }} />
            <InputText type="text" placeholder="Left" tooltip="Enter your username" tooltipOptions={{ position: 'left' }} />
            <InputText type="text" placeholder="Mouse" tooltip="Enter your username" tooltipOptions={{ position: 'mouse' }} />
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Form components have built-in support with the <i>tooltip</i> property and customizations like positioning is provided with <i>tooltipOptions</i>.
                </p>
            </DocSectionText>
            <div className="card flex flex-wrap justify-content-center gap-2">
                <InputText type="text" placeholder="Right" tooltip="Enter your username" />
                <InputText type="text" placeholder="Top" tooltip="Enter your username" tooltipOptions={{ position: 'top' }} />
                <InputText type="text" placeholder="Bottom" tooltip="Enter your username" tooltipOptions={{ position: 'bottom' }} />
                <InputText type="text" placeholder="Left" tooltip="Enter your username" tooltipOptions={{ position: 'left' }} />
                <InputText type="text" placeholder="Mouse" tooltip="Enter your username" tooltipOptions={{ position: 'mouse' }} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
