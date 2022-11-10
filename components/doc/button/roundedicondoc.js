import { Button } from '../../lib/button/Button';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

export function RoundedIconButtonsDoc(props) {
    const code = {
        basic: `
<Button icon="pi pi-bookmark" className="p-button-rounded p-button-secondary" aria-label="Bookmark" />
<Button icon="pi pi-search" className="p-button-rounded p-button-success" aria-label="Search" />
<Button icon="pi pi-user" className="p-button-rounded p-button-info" aria-label="User" />
<Button icon="pi pi-bell" className="p-button-rounded p-button-warning" aria-label="Notification" />
<Button icon="pi pi-heart" className="p-button-rounded p-button-help" aria-label="Favorite" />
<Button icon="pi pi-times" className="p-button-rounded p-button-danger" aria-label="Cancel" />
<Button icon="pi pi-check" className="p-button-rounded" aria-label="Filter" />
        `,
        javascript: `
import { Button } from 'primereact/button';

export default function RoundedIconButtonsDoc() {

    return (
        <Button icon="pi pi-bookmark" className="p-button-rounded p-button-secondary" aria-label="Bookmark" />
        <Button icon="pi pi-search" className="p-button-rounded p-button-success" aria-label="Search" />
        <Button icon="pi pi-user" className="p-button-rounded p-button-info" aria-label="User" />
        <Button icon="pi pi-bell" className="p-button-rounded p-button-warning" aria-label="Notification" />
        <Button icon="pi pi-heart" className="p-button-rounded p-button-help" aria-label="Favorite" />
        <Button icon="pi pi-times" className="p-button-rounded p-button-danger" aria-label="Cancel" />
        <Button icon="pi pi-check" className="p-button-rounded" aria-label="Filter" />
    )
}
        `,
        typescript: `
import { Button } from 'primereact/button';

export default function RoundedIconButtonsDoc() {

    return (
        <Button icon="pi pi-bookmark" className="p-button-rounded p-button-secondary" aria-label="Bookmark" />
        <Button icon="pi pi-search" className="p-button-rounded p-button-success" aria-label="Search" />
        <Button icon="pi pi-user" className="p-button-rounded p-button-info" aria-label="User" />
        <Button icon="pi pi-bell" className="p-button-rounded p-button-warning" aria-label="Notification" />
        <Button icon="pi pi-heart" className="p-button-rounded p-button-help" aria-label="Favorite" />
        <Button icon="pi pi-times" className="p-button-rounded p-button-danger" aria-label="Cancel" />
        <Button icon="pi pi-check" className="p-button-rounded" aria-label="Filter" />
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>Rounded Icon Buttons</DocSectionText>
            <div className="card flex align-items-center justify-content-center">
                <Button icon="pi pi-bookmark" className="p-button-rounded p-button-secondary" aria-label="Bookmark" />
                <Button icon="pi pi-search" className="p-button-rounded p-button-success" aria-label="Search" />
                <Button icon="pi pi-user" className="p-button-rounded p-button-info" aria-label="User" />
                <Button icon="pi pi-bell" className="p-button-rounded p-button-warning" aria-label="Notification" />
                <Button icon="pi pi-heart" className="p-button-rounded p-button-help" aria-label="Favorite" />
                <Button icon="pi pi-times" className="p-button-rounded p-button-danger" aria-label="Cancel" />
                <Button icon="pi pi-check" className="p-button-rounded" aria-label="Filter" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
