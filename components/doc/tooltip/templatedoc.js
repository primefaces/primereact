import { Tooltip } from '../../lib/tooltip/Tooltip';
import { Button } from '../../lib/button/Button';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function TemplateDoc(props) {
    const code = {
        basic: `
<Tooltip target=".custom-tooltip-btn">
    <img alt="logo" src="showcase/images/logo.png" onError={(e) => (e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')} data-pr-tooltip="PrimeReact-Logo" height="80px" />
</Tooltip>

<Button className="custom-tooltip-btn" type="button" label="Save" icon="pi pi-check" />
        `,
        javascript: `
import { Tooltip } from 'primereact/tooltip';
import { Button } from 'primereact/button';

export default function TemplateDoc() {

    return (
        <div>
            <Tooltip target=".custom-tooltip-btn">
                <img alt="logo" src="showcase/images/logo.png" onError={(e) => (e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')} data-pr-tooltip="PrimeReact-Logo" height="80px" />
            </Tooltip>

            <Button className="custom-tooltip-btn" type="button" label="Save" icon="pi pi-check" />
        </div>
    );
}
        `,
        typescript: `
import { Tooltip } from 'primereact/tooltip';
import { Button } from 'primereact/button';

export default function TemplateDoc() {
    
    return (
        <div>
            <Tooltip target=".custom-tooltip-btn">
                <img alt="logo" src="showcase/images/logo.png" onError={(e) => (e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')} data-pr-tooltip="PrimeReact-Logo" height="80px" />
            </Tooltip>

            <Button className="custom-tooltip-btn" type="button" label="Save" icon="pi pi-check" />
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Template</p>
            </DocSectionText>
            <div className="card flex align-items-center justify-content-center">
                <Tooltip target=".custom-tooltip-btn">
                    <img alt="logo" src="showcase/images/logo.png" onError={(e) => (e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')} data-pr-tooltip="PrimeReact-Logo" height="80px" />
                </Tooltip>

                <Button className="custom-tooltip-btn" type="button" label="Save" icon="pi pi-check" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
