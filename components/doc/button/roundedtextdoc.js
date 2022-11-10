import { Button } from '../../lib/button/Button';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

export function RoundedTextIconButtonsDoc(props) {
    const code = {
        basic: `
<Button icon="pi pi-check" className="p-button-rounded p-button-text" aria-label="Submit" />
<Button icon="pi pi-bookmark" className="p-button-rounded p-button-secondary p-button-text" aria-label="Bookmark" />
<Button icon="pi pi-search" className="p-button-rounded p-button-success p-button-text" aria-label="Search" />
<Button icon="pi pi-user" className="p-button-rounded p-button-info p-button-text" aria-label="User" />
<Button icon="pi pi-bell" className="p-button-rounded p-button-warning p-button-text" aria-label="Notification" />
<Button icon="pi pi-heart" className="p-button-rounded p-button-help p-button-text" aria-label="Favorite" />
<Button icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" aria-label="Cancel" />
<Button icon="pi pi-filter" className="p-button-rounded p-button-text p-button-plain" aria-label="Filter" />
        `,
        javascript: `
import { Button } from 'primereact/button';

export default function RoundedTextIconButtonsDoc() {

    return (
        <Button icon="pi pi-check" className="p-button-rounded p-button-text" aria-label="Submit" />
        <Button icon="pi pi-bookmark" className="p-button-rounded p-button-secondary p-button-text" aria-label="Bookmark" />
        <Button icon="pi pi-search" className="p-button-rounded p-button-success p-button-text" aria-label="Search" />
        <Button icon="pi pi-user" className="p-button-rounded p-button-info p-button-text" aria-label="User" />
        <Button icon="pi pi-bell" className="p-button-rounded p-button-warning p-button-text" aria-label="Notification" />
        <Button icon="pi pi-heart" className="p-button-rounded p-button-help p-button-text" aria-label="Favorite" />
        <Button icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" aria-label="Cancel" />
        <Button icon="pi pi-filter" className="p-button-rounded p-button-text p-button-plain" aria-label="Filter" />
    )
}
        `,
        typescript: `
import { Button } from 'primereact/button';

export default function RoundedTextIconButtonsDoc() {

    return (
        <Button icon="pi pi-check" className="p-button-rounded p-button-text" aria-label="Submit" />
        <Button icon="pi pi-bookmark" className="p-button-rounded p-button-secondary p-button-text" aria-label="Bookmark" />
        <Button icon="pi pi-search" className="p-button-rounded p-button-success p-button-text" aria-label="Search" />
        <Button icon="pi pi-user" className="p-button-rounded p-button-info p-button-text" aria-label="User" />
        <Button icon="pi pi-bell" className="p-button-rounded p-button-warning p-button-text" aria-label="Notification" />
        <Button icon="pi pi-heart" className="p-button-rounded p-button-help p-button-text" aria-label="Favorite" />
        <Button icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" aria-label="Cancel" />
        <Button icon="pi pi-filter" className="p-button-rounded p-button-text p-button-plain" aria-label="Filter" />
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>Rounded Text Icon Buttons</DocSectionText>
            <div className="card flex align-items-center justify-content-center">
                <Button icon="pi pi-check" className="p-button-rounded p-button-text" aria-label="Submit" />
                <Button icon="pi pi-bookmark" className="p-button-rounded p-button-secondary p-button-text" aria-label="Bookmark" />
                <Button icon="pi pi-search" className="p-button-rounded p-button-success p-button-text" aria-label="Search" />
                <Button icon="pi pi-user" className="p-button-rounded p-button-info p-button-text" aria-label="User" />
                <Button icon="pi pi-bell" className="p-button-rounded p-button-warning p-button-text" aria-label="Notification" />
                <Button icon="pi pi-heart" className="p-button-rounded p-button-help p-button-text" aria-label="Favorite" />
                <Button icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" aria-label="Cancel" />
                <Button icon="pi pi-filter" className="p-button-rounded p-button-text p-button-plain" aria-label="Filter" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
