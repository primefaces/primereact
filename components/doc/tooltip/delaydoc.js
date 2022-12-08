import { Tooltip } from '../../lib/tooltip/Tooltip';
import { InputText } from '../../lib/inputtext/InputText';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function DelayDoc(props) {
    const code = {
        basic: `
<InputText type="text" placeholder="Right" tooltip="Enter your username" tooltipOptions={{showDelay: 1000, hideDelay: 300}}/>
        `,
        javascript: `
import { Tooltip } from 'primereact/tooltip';
import { InputText } from 'primereact/inputtext';

export default function DelayDoc() {

    return (
        <div>
            <InputText type="text" placeholder="Right" tooltip="Enter your username" tooltipOptions={{showDelay: 1000, hideDelay: 300}}/>
        </div>
    );
}
        `,
        typescript: `
import { Tooltip } from 'primereact/tooltip';
import { InputText } from 'primereact/inputtext';

export default function DelayDoc() {
    
    return (
        <div>
            <InputText type="text" placeholder="Right" tooltip="Enter your username" tooltipOptions={{showDelay: 1000, hideDelay: 300}}/>
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Tooltip is displayed or hidden instantly by default however you may add delays using <i>showDelay</i> and <i>hideDelay</i> properties which accept a number value in terms of milliseconds.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <InputText type="text" placeholder="Right" tooltip="Enter your username" tooltipOptions={{ showDelay: 1000, hideDelay: 300 }} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
