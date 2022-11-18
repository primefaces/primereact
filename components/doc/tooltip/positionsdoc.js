import { InputText } from '../../lib/inputtext/InputText';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function PositionsDoc(props) {
    const code = {
        basic: `
<InputText type="text" placeholder="Right" tooltip="Enter your username" />
<InputText type="text" placeholder="Top" tooltip="Enter your username" tooltipOptions={{position: 'top'}} />
<InputText type="text" placeholder="Bottom" tooltip="Enter your username" tooltipOptions={{position: 'bottom'}} />
<InputText type="text" placeholder="Left" tooltip="Enter your username" tooltipOptions={{position: 'left'}} />
<InputText type="text" placeholder="Mouse" tooltip="Enter your username" tooltipOptions={{position: 'mouse'}} />

        `,
        javascript: `
import { InputText } from 'primereact/inputtext';
import { Tooltip } from 'primereact/tooltip';

export default function PositionsDoc() {

    return (
        <div>
            <div className="col-12 md:col-2">
                <InputText type="text" placeholder="Right" tooltip="Enter your username" />
            </div>
            <div className="col-12 md:col-2">
                <InputText type="text" placeholder="Top" tooltip="Enter your username" tooltipOptions={{position: 'top'}} />
            </div>
            <div className="col-12 md:col-2">
                <InputText type="text" placeholder="Bottom" tooltip="Enter your username" tooltipOptions={{position: 'bottom'}} />
            </div>
            <div className="col-12 md:col-2">
                <InputText type="text" placeholder="Left" tooltip="Enter your username" tooltipOptions={{position: 'left'}} />
            </div>
            <div className="col-12 md:col-2">
                <InputText type="text" placeholder="Mouse" tooltip="Enter your username" tooltipOptions={{position: 'mouse'}} />
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
            <div className="col-12 md:col-2">
                <InputText type="text" placeholder="Right" tooltip="Enter your username" />
            </div>
            <div className="col-12 md:col-2">
                <InputText type="text" placeholder="Top" tooltip="Enter your username" tooltipOptions={{position: 'top'}} />
            </div>
            <div className="col-12 md:col-2">
                <InputText type="text" placeholder="Bottom" tooltip="Enter your username" tooltipOptions={{position: 'bottom'}} />
            </div>
            <div className="col-12 md:col-2">
                <InputText type="text" placeholder="Left" tooltip="Enter your username" tooltipOptions={{position: 'left'}} />
            </div>
            <div className="col-12 md:col-2">
                <InputText type="text" placeholder="Mouse" tooltip="Enter your username" tooltipOptions={{position: 'mouse'}} />
            </div>
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    There are five choices to position the tooltip, default value is "right" and alternatives are "top", "bottom", "left", "mouse". Position is specified using <i>tooltipOptions</i> property.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <div className="grid p-fluid">
                    <div className="col-12 md:col-2">
                        <InputText type="text" placeholder="Right" tooltip="Enter your username" />
                    </div>
                    <div className="col-12 md:col-2">
                        <InputText type="text" placeholder="Top" tooltip="Enter your username" tooltipOptions={{ position: 'top' }} />
                    </div>
                    <div className="col-12 md:col-2">
                        <InputText type="text" placeholder="Bottom" tooltip="Enter your username" tooltipOptions={{ position: 'bottom' }} />
                    </div>
                    <div className="col-12 md:col-2">
                        <InputText type="text" placeholder="Left" tooltip="Enter your username" tooltipOptions={{ position: 'left' }} />
                    </div>
                    <div className="col-12 md:col-2">
                        <InputText type="text" placeholder="Mouse" tooltip="Enter your username" tooltipOptions={{ position: 'mouse' }} />
                    </div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
