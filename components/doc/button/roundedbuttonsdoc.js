import { Button } from '../../lib/button/Button';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

export function RoundedButtonsDoc(props) {
    const code = {
        basic: `
<Button label="Primary" className="p-button-rounded" />
<Button label="Secondary" className="p-button-rounded p-button-secondary" />
<Button label="Success" className="p-button-rounded p-button-success" />
<Button label="Info" className="p-button-rounded p-button-info" />
<Button label="Warning" className="p-button-rounded p-button-warning" />
<Button label="Help" className="p-button-rounded p-button-help" />
<Button label="Danger" className="p-button-rounded p-button-danger" />
        `,
        javascript: `
import { Button } from 'primereact/button';

export default function RoundedButtonsDoc() {

    return (
        <Button label="Primary" className="p-button-rounded" />
        <Button label="Secondary" className="p-button-rounded p-button-secondary" />
        <Button label="Success" className="p-button-rounded p-button-success" />
        <Button label="Info" className="p-button-rounded p-button-info" />
        <Button label="Warning" className="p-button-rounded p-button-warning" />
        <Button label="Help" className="p-button-rounded p-button-help" />
        <Button label="Danger" className="p-button-rounded p-button-danger" />
    )
}
        `,
        typescript: `
import { Button } from 'primereact/button';

export default function RoundedButtonsDoc() {

    return (
        <Button label="Primary" className="p-button-rounded" />
        <Button label="Secondary" className="p-button-rounded p-button-secondary" />
        <Button label="Success" className="p-button-rounded p-button-success" />
        <Button label="Info" className="p-button-rounded p-button-info" />
        <Button label="Warning" className="p-button-rounded p-button-warning" />
        <Button label="Help" className="p-button-rounded p-button-help" />
        <Button label="Danger" className="p-button-rounded p-button-danger" />
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>A button can be raised by having "p-button-raised" style class and similarly borders can be made rounded using "p-button-rounded" class.</DocSectionText>
            <div className="card flex flex-column lg:flex-row align-items-center justify-content-center">
                <Button label="Primary" className="p-button-rounded" />
                <Button label="Secondary" className="p-button-rounded p-button-secondary" />
                <Button label="Success" className="p-button-rounded p-button-success" />
                <Button label="Info" className="p-button-rounded p-button-info" />
                <Button label="Warning" className="p-button-rounded p-button-warning" />
                <Button label="Help" className="p-button-rounded p-button-help" />
                <Button label="Danger" className="p-button-rounded p-button-danger" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
