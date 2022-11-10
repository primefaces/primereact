import { Button } from '../../lib/button/Button';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

export function SeveritiesDoc(props) {
    const code = {
        basic: `
<Button label="Primary" />
<Button label="Secondary" className="p-button-secondary" />
<Button label="Success" className="p-button-success" />
<Button label="Info" className="p-button-info" />
<Button label="Warning" className="p-button-warning" />
<Button label="Help" className="p-button-help" />
<Button label="Danger" className="p-button-danger" />
        `,
        javascript: `
import { Button } from 'primereact/button';

export default function SeveritiesDoc() {

    return (
        <Button label="Primary" />
        <Button label="Secondary" className="p-button-secondary" />
        <Button label="Success" className="p-button-success" />
        <Button label="Info" className="p-button-info" />
        <Button label="Warning" className="p-button-warning" />
        <Button label="Help" className="p-button-help" />
        <Button label="Danger" className="p-button-danger" />
    )
}
        `,
        typescript: `
import { Button } from 'primereact/button';

export default function SeveritiesDoc() {

    return (
        <Button label="Primary" />
        <Button label="Secondary" className="p-button-secondary" />
        <Button label="Success" className="p-button-success" />
        <Button label="Info" className="p-button-info" />
        <Button label="Warning" className="p-button-warning" />
        <Button label="Help" className="p-button-help" />
        <Button label="Danger" className="p-button-danger" />
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>Different color options are available as severity levels. .p-button-secondary .p-button-success .p-button-info .p-button-warning .p-button-danger</DocSectionText>
            <div className="card flex flex-column lg:flex-row align-items-center justify-content-center">
                <Button label="Primary" />
                <Button label="Secondary" className="p-button-secondary" />
                <Button label="Success" className="p-button-success" />
                <Button label="Info" className="p-button-info" />
                <Button label="Warning" className="p-button-warning" />
                <Button label="Help" className="p-button-help" />
                <Button label="Danger" className="p-button-danger" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
