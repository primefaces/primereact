import { Tooltip } from '../../lib/tooltip/Tooltip';
import { Button } from '../../lib/button/Button';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ColorDoc(props) {
    const code = {
        basic: `
 <Button label="Blue" className="p-button-secondary p-button-outlined mr-3 mb-2" tooltip="Blue" tooltipOptions={{ className: 'blue-tooltip', position: 'top' }} />
 <Button label="Green" className="p-button-secondary p-button-outlined mr-3 mb-2" tooltip="Green" tooltipOptions={{ className: 'green-tooltip', position: 'top' }} />
 <Button label="Yellow" className="p-button-secondary p-button-outlined mr-3 mb-2" tooltip="Yellow" tooltipOptions={{ className: 'yellow-tooltip', position: 'top' }} />
 <Button label="Cyan" className="p-button-secondary p-button-outlined mr-3 mb-2" tooltip="Cyan" tooltipOptions={{ className: 'cyan-tooltip', position: 'top' }} />
 <Button label="Pink" className="p-button-secondary p-button-outlined mr-3 mb-2" tooltip="Pink" tooltipOptions={{ className: 'pink-tooltip', position: 'top' }} />
 <Button label="Indigo" className="p-button-secondary p-button-outlined mr-3 mb-2" tooltip="Indigo" tooltipOptions={{ className: 'indigo-tooltip', position: 'top' }} />
 <Button label="Teal" className="p-button-secondary p-button-outlined mr-3 mb-2" tooltip="Teal" tooltipOptions={{ className: 'teal-tooltip', position: 'top' }} />
 <Button label="Blue Gray" className="p-button-secondary p-button-outlined mr-3 mb-2" tooltip="Blue Gray" tooltipOptions={{ className: 'bluegray-tooltip', position: 'top' }} />
 <Button label="Purple" className="p-button-secondary p-button-outlined mr-3 mb-2" tooltip="Purple" tooltipOptions={{ className: 'purple-tooltip', position: 'top' }} />
        `,
        javascript: `
import { Tooltip } from 'primereact/tooltip';
import { Button } from 'primereact/button';

export default function ColorDoc() {

    return (
        <div>
            <Button label="Blue" className="p-button-secondary p-button-outlined mr-3 mb-2" tooltip="Blue" tooltipOptions={{ className: 'blue-tooltip', position: 'top' }} />
            <Button label="Green" className="p-button-secondary p-button-outlined mr-3 mb-2" tooltip="Green" tooltipOptions={{ className: 'green-tooltip', position: 'top' }} />
            <Button label="Yellow" className="p-button-secondary p-button-outlined mr-3 mb-2" tooltip="Yellow" tooltipOptions={{ className: 'yellow-tooltip', position: 'top' }} />
            <Button label="Cyan" className="p-button-secondary p-button-outlined mr-3 mb-2" tooltip="Cyan" tooltipOptions={{ className: 'cyan-tooltip', position: 'top' }} />
            <Button label="Pink" className="p-button-secondary p-button-outlined mr-3 mb-2" tooltip="Pink" tooltipOptions={{ className: 'pink-tooltip', position: 'top' }} />
            <Button label="Indigo" className="p-button-secondary p-button-outlined mr-3 mb-2" tooltip="Indigo" tooltipOptions={{ className: 'indigo-tooltip', position: 'top' }} />
            <Button label="Teal" className="p-button-secondary p-button-outlined mr-3 mb-2" tooltip="Teal" tooltipOptions={{ className: 'teal-tooltip', position: 'top' }} />
            <Button label="Blue Gray" className="p-button-secondary p-button-outlined mr-3 mb-2" tooltip="Blue Gray" tooltipOptions={{ className: 'bluegray-tooltip', position: 'top' }} />
            <Button label="Purple" className="p-button-secondary p-button-outlined mr-3 mb-2" tooltip="Purple" tooltipOptions={{ className: 'purple-tooltip', position: 'top' }} />
        </div>
    );
}
        `,
        typescript: `
import { Tooltip } from 'primereact/tooltip';
import { Button } from 'primereact/button';

export default function ColorDoc() {
    
    return (
        <div>
            <Button label="Blue" className="p-button-secondary p-button-outlined mr-3 mb-2" tooltip="Blue" tooltipOptions={{ className: 'blue-tooltip', position: 'top' }} />
            <Button label="Green" className="p-button-secondary p-button-outlined mr-3 mb-2" tooltip="Green" tooltipOptions={{ className: 'green-tooltip', position: 'top' }} />
            <Button label="Yellow" className="p-button-secondary p-button-outlined mr-3 mb-2" tooltip="Yellow" tooltipOptions={{ className: 'yellow-tooltip', position: 'top' }} />
            <Button label="Cyan" className="p-button-secondary p-button-outlined mr-3 mb-2" tooltip="Cyan" tooltipOptions={{ className: 'cyan-tooltip', position: 'top' }} />
            <Button label="Pink" className="p-button-secondary p-button-outlined mr-3 mb-2" tooltip="Pink" tooltipOptions={{ className: 'pink-tooltip', position: 'top' }} />
            <Button label="Indigo" className="p-button-secondary p-button-outlined mr-3 mb-2" tooltip="Indigo" tooltipOptions={{ className: 'indigo-tooltip', position: 'top' }} />
            <Button label="Teal" className="p-button-secondary p-button-outlined mr-3 mb-2" tooltip="Teal" tooltipOptions={{ className: 'teal-tooltip', position: 'top' }} />
            <Button label="Blue Gray" className="p-button-secondary p-button-outlined mr-3 mb-2" tooltip="Blue Gray" tooltipOptions={{ className: 'bluegray-tooltip', position: 'top' }} />
            <Button label="Purple" className="p-button-secondary p-button-outlined mr-3 mb-2" tooltip="Purple" tooltipOptions={{ className: 'purple-tooltip', position: 'top' }} />
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Color</p>
            </DocSectionText>
            <div className="card flex align-items-center flex-wrap">
                <Button label="Blue" className="p-button-secondary p-button-outlined mr-3 mb-2" tooltip="Blue" tooltipOptions={{ className: 'blue-tooltip', position: 'top' }} />
                <Button label="Green" className="p-button-secondary p-button-outlined mr-3 mb-2" tooltip="Green" tooltipOptions={{ className: 'green-tooltip', position: 'top' }} />
                <Button label="Yellow" className="p-button-secondary p-button-outlined mr-3 mb-2" tooltip="Yellow" tooltipOptions={{ className: 'yellow-tooltip', position: 'top' }} />
                <Button label="Cyan" className="p-button-secondary p-button-outlined mr-3 mb-2" tooltip="Cyan" tooltipOptions={{ className: 'cyan-tooltip', position: 'top' }} />
                <Button label="Pink" className="p-button-secondary p-button-outlined mr-3 mb-2" tooltip="Pink" tooltipOptions={{ className: 'pink-tooltip', position: 'top' }} />
                <Button label="Indigo" className="p-button-secondary p-button-outlined mr-3 mb-2" tooltip="Indigo" tooltipOptions={{ className: 'indigo-tooltip', position: 'top' }} />
                <Button label="Teal" className="p-button-secondary p-button-outlined mr-3 mb-2" tooltip="Teal" tooltipOptions={{ className: 'teal-tooltip', position: 'top' }} />
                <Button label="Blue Gray" className="p-button-secondary p-button-outlined mr-3 mb-2" tooltip="Blue Gray" tooltipOptions={{ className: 'bluegray-tooltip', position: 'top' }} />
                <Button label="Purple" className="p-button-secondary p-button-outlined mr-3 mb-2" tooltip="Purple" tooltipOptions={{ className: 'purple-tooltip', position: 'top' }} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
