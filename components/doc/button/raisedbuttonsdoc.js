import { Button } from '../../lib/button/Button';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

export function RaisedButtonsDoc(props) {
    const code = {
        basic: `
<Button label="Primary" className="p-button-raised" />
<Button label="Secondary" className="p-button-raised p-button-secondary" />
<Button label="Success" className="p-button-raised p-button-success" />
<Button label="Info" className="p-button-raised p-button-info" />
<Button label="Warning" className="p-button-raised p-button-warning" />
<Button label="Help" className="p-button-raised p-button-help" />
<Button label="Danger" className="p-button-raised p-button-danger" />
        `,
        javascript: `
import { Button } from 'primereact/button';

export default function RaisedButtonsDoc() {

    return (
        <Button label="Primary" className="p-button-raised" />
        <Button label="Secondary" className="p-button-raised p-button-secondary" />
        <Button label="Success" className="p-button-raised p-button-success" />
        <Button label="Info" className="p-button-raised p-button-info" />
        <Button label="Warning" className="p-button-raised p-button-warning" />
        <Button label="Help" className="p-button-raised p-button-help" />
        <Button label="Danger" className="p-button-raised p-button-danger" />
    )
}
        `,
        typescript: `
import { Button } from 'primereact/button';

export default function RaisedButtonsDoc() {

    return (
        <Button label="Primary" className="p-button-raised" />
        <Button label="Secondary" className="p-button-raised p-button-secondary" />
        <Button label="Success" className="p-button-raised p-button-success" />
        <Button label="Info" className="p-button-raised p-button-info" />
        <Button label="Warning" className="p-button-raised p-button-warning" />
        <Button label="Help" className="p-button-raised p-button-help" />
        <Button label="Danger" className="p-button-raised p-button-danger" />
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>A button can be raised by having "p-button-raised" style class and similarly borders can be made rounded using "p-button-rounded" class.</p>
            </DocSectionText>
            <div className="card flex flex-column lg:flex-row align-items-center justify-content-center">
                <Button label="Primary" className="p-button-raised" />
                <Button label="Secondary" className="p-button-raised p-button-secondary" />
                <Button label="Success" className="p-button-raised p-button-success" />
                <Button label="Info" className="p-button-raised p-button-info" />
                <Button label="Warning" className="p-button-raised p-button-warning" />
                <Button label="Help" className="p-button-raised p-button-help" />
                <Button label="Danger" className="p-button-raised p-button-danger" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
