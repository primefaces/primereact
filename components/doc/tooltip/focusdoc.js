import { InputText } from '../../lib/inputtext/InputText';
import { Tooltip } from '../../lib/tooltip/Tooltip';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function FocusDoc(props) {
    const code = {
        basic: `
<InputText type="text" placeholder="Focus" tooltip="Enter your username" tooltipOptions={{ event: 'focus' }} />
        `,
        javascript: `
import { InputText } from 'primereact/inputtext';
import { Tooltip } from 'primereact/tooltip';

export default function FocusDoc() {

    return (
        <InputText type="text" placeholder="Focus" tooltip="Enter your username" tooltipOptions={{ event: 'focus' }} />
    );
}
        `,
        typescript: `
import { InputText } from 'primereact/inputtext';
import { Tooltip } from 'primereact/tooltip';

export default function FocusDoc() {

    return (
        <InputText type="text" placeholder="Focus" tooltip="Enter your username" tooltipOptions={{ event: 'focus' }} />
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Focus and Blur</p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <InputText type="text" placeholder="Focus" tooltip="Enter your username" tooltipOptions={{ event: 'focus' }} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
