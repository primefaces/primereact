import { Button } from '../../lib/button/Button';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

export function IconsDoc(props) {
    const code = {
        basic: `
<Button icon="pi pi-check" />
<Button label="Submit" icon="pi pi-check" />
<Button label="Submit" icon="pi pi-check" iconPos="right" />
        `,
        javascript: `
import { Button } from 'primereact/button';

export default function IconsDoc() {

    return (
        <Button icon="pi pi-check" />
        <Button label="Submit" icon="pi pi-check" />
        <Button label="Submit" icon="pi pi-check" iconPos="right" />
    )
}
        `,
        typescript: `
import { Button } from 'primereact/button';

export default function IconsDoc() {

    return (
        <Button icon="pi pi-check" />
        <Button label="Submit" icon="pi pi-check" />
        <Button label="Submit" icon="pi pi-check" iconPos="right" />
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Icon on a button is specified with <i>icon</i> property and position is configured using <i>iconPos</i> attribute. Default icon position is "left" and alternative is "right". To display only an icon, leave label as undefined.
                </p>
            </DocSectionText>
            <div className="card flex flex-column lg:flex-row align-items-center justify-content-center">
                <Button icon="pi pi-check" />
                <Button label="Submit" icon="pi pi-check" />
                <Button label="Submit" icon="pi pi-check" iconPos="right" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
