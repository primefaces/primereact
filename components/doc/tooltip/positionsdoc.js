import { InputText } from '../../lib/inputtext/InputText';
import { Tooltip } from '../../lib/tooltip/Tooltip';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function PositionsDoc(props) {
    const code = {
        basic: `
<InputText type="text" placeholder="Right" tooltip="Enter your username" />
<InputText type="text" placeholder="Top" tooltip="Enter your username" tooltipOptions={{position: 'top'}} />
<InputText type="text" placeholder="Bottom" tooltip="Enter your username" tooltipOptions={{position: 'bottom'}} />
<InputText type="text" placeholder="Left" tooltip="Enter your username" tooltipOptions={{position: 'left'}} />

        `,
        javascript: `
import { InputText } from 'primereact/inputtext';
import { Tooltip } from 'primereact/tooltip';

export default function PositionsDoc() {

    return (
        <div>
            <div className="col-12 md:col-3">
                <InputText type="text" placeholder="Right" tooltip="Enter your username" />
            </div>
            <div className="col-12 md:col-3">
                <InputText type="text" placeholder="Top" tooltip="Enter your username" tooltipOptions={{position: 'top'}} />
            </div>
            <div className="col-12 md:col-3">
                <InputText type="text" placeholder="Bottom" tooltip="Enter your username" tooltipOptions={{position: 'bottom'}} />
            </div>
            <div className="col-12 md:col-3">
                <InputText type="text" placeholder="Left" tooltip="Enter your username" tooltipOptions={{position: 'left'}} />
            </div>
        </div>
    );
}
        `,
        typescript: `
import { InputText } from 'primereact/inputtext';
import { Tooltip } from 'primereact/tooltip';

export default function PositionsDoc() {

    return (
        <div>
            <div className="col-12 md:col-3">
                <InputText type="text" placeholder="Right" tooltip="Enter your username" />
            </div>
            <div className="col-12 md:col-3">
                <InputText type="text" placeholder="Top" tooltip="Enter your username" tooltipOptions={{position: 'top'}} />
            </div>
            <div className="col-12 md:col-3">
                <InputText type="text" placeholder="Bottom" tooltip="Enter your username" tooltipOptions={{position: 'bottom'}} />
            </div>
            <div className="col-12 md:col-3">
                <InputText type="text" placeholder="Left" tooltip="Enter your username" tooltipOptions={{position: 'left'}} />
            </div>
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                There are four choices to position the tooltip, default value is "right" and alternatives are "top", "bottom", "left". Position is specified using <i>tooltipOptions</i> property.
            </DocSectionText>
            <div className="card flex justify-content-center">
                <div className="grid p-fluid">
                    <div className="col-12 md:col-3">
                        <InputText type="text" placeholder="Right" tooltip="Enter your username" />
                    </div>
                    <div className="col-12 md:col-3">
                        <InputText type="text" placeholder="Top" tooltip="Enter your username" tooltipOptions={{ position: 'top' }} />
                    </div>
                    <div className="col-12 md:col-3">
                        <InputText type="text" placeholder="Bottom" tooltip="Enter your username" tooltipOptions={{ position: 'bottom' }} />
                    </div>
                    <div className="col-12 md:col-3">
                        <InputText type="text" placeholder="Left" tooltip="Enter your username" tooltipOptions={{ position: 'left' }} />
                    </div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
