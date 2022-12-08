import { Button } from '../../lib/button/Button';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

export function BasicDoc(props) {
    const code = {
        basic: `
<Button label="Submit" aria-label="Submit" />
<Button label="Disabled" disabled />
<Button label="Link" className="p-button-link" />
        `,
        javascript: `
import { Button } from 'primereact/button';

export default function BasicDoc() {

    return (
        <Button label="Submit" aria-label="Submit" />
        <Button label="Disabled" disabled />
        <Button label="Link" className="p-button-link" />
    )
}
        `,
        typescript: `
import { Button } from 'primereact/button';

export default function BasicDoc() {

    return (
        <Button label="Submit" aria-label="Submit" />
        <Button label="Disabled" disabled />
        <Button label="Link" className="p-button-link" />
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Button is created using the Button element. </p>
            </DocSectionText>
            <div className="card flex flex-column lg:flex-row align-items-center justify-content-center">
                <Button label="Submit" aria-label="Submit" />
                <Button label="Disabled" disabled />
                <Button label="Link" className="p-button-link" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
