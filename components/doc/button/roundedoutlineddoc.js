import { Button } from '../../lib/button/Button';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

export function RoundedOutlinedButtonsDoc(props) {
    const code = {
        basic: `
<Button icon="pi pi-check" className="p-button-rounded p-button-outlined" aria-label="Submit" />
<Button icon="pi pi-bookmark" className="p-button-rounded p-button-secondary p-button-outlined" aria-label="Bookmark" />
<Button icon="pi pi-search" className="p-button-rounded p-button-success p-button-outlined" aria-label="Search" />
<Button icon="pi pi-user" className="p-button-rounded p-button-info p-button-outlined" aria-label="User" />
<Button icon="pi pi-bell" className="p-button-rounded p-button-warning p-button-outlined" aria-label="Notification" />
<Button icon="pi pi-heart" className="p-button-rounded p-button-help p-button-outlined" aria-label="Favorite" />
<Button icon="pi pi-times" className="p-button-rounded p-button-danger p-button-outlined" aria-label="Cancel" />
        `,
        javascript: `
import React from 'react'; 
import { Button } from 'primereact/button';
import './ButtonDemo.css';

export default function RoundedOutlinedButtonsDoc() {

    return (
        <div className="card flex align-items-center justify-content-center button-demo">
            <Button icon="pi pi-check" className="p-button-rounded p-button-outlined" aria-label="Submit" />
            <Button icon="pi pi-bookmark" className="p-button-rounded p-button-secondary p-button-outlined" aria-label="Bookmark" />
            <Button icon="pi pi-search" className="p-button-rounded p-button-success p-button-outlined" aria-label="Search" />
            <Button icon="pi pi-user" className="p-button-rounded p-button-info p-button-outlined" aria-label="User" />
            <Button icon="pi pi-bell" className="p-button-rounded p-button-warning p-button-outlined" aria-label="Notification" />
            <Button icon="pi pi-heart" className="p-button-rounded p-button-help p-button-outlined" aria-label="Favorite" />
            <Button icon="pi pi-times" className="p-button-rounded p-button-danger p-button-outlined" aria-label="Cancel" />
        </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { Button } from 'primereact/button';
import './ButtonDemo.css';

export default function RoundedOutlinedButtonsDoc() {

    return (
        <div className="card flex align-items-center justify-content-center button-demo">
            <Button icon="pi pi-check" className="p-button-rounded p-button-outlined" aria-label="Submit" />
            <Button icon="pi pi-bookmark" className="p-button-rounded p-button-secondary p-button-outlined" aria-label="Bookmark" />
            <Button icon="pi pi-search" className="p-button-rounded p-button-success p-button-outlined" aria-label="Search" />
            <Button icon="pi pi-user" className="p-button-rounded p-button-info p-button-outlined" aria-label="User" />
            <Button icon="pi pi-bell" className="p-button-rounded p-button-warning p-button-outlined" aria-label="Notification" />
            <Button icon="pi pi-heart" className="p-button-rounded p-button-help p-button-outlined" aria-label="Favorite" />
            <Button icon="pi pi-times" className="p-button-rounded p-button-danger p-button-outlined" aria-label="Cancel" />
        </div>
    )
}
        `,
        extFiles: {
            'ButtonDemo.css': `
/* ButtonDemo.css */

.button-demo .p-button {
    margin-right: 0.5rem;
}

@media screen and (max-width: 960px) {
    .button-demo .p-button {
        margin-bottom: 0.5rem;
    }
    .button-demo .p-button:not(.p-button-icon-only) {
        display: flex;
        width: 100%;
    }
}                
        `
        }
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Rounded and Outlined Icon Buttons</p>
            </DocSectionText>
            <div className="card flex align-items-center justify-content-center">
                <Button icon="pi pi-check" className="p-button-rounded p-button-outlined" aria-label="Submit" />
                <Button icon="pi pi-bookmark" className="p-button-rounded p-button-secondary p-button-outlined" aria-label="Bookmark" />
                <Button icon="pi pi-search" className="p-button-rounded p-button-success p-button-outlined" aria-label="Search" />
                <Button icon="pi pi-user" className="p-button-rounded p-button-info p-button-outlined" aria-label="User" />
                <Button icon="pi pi-bell" className="p-button-rounded p-button-warning p-button-outlined" aria-label="Notification" />
                <Button icon="pi pi-heart" className="p-button-rounded p-button-help p-button-outlined" aria-label="Favorite" />
                <Button icon="pi pi-times" className="p-button-rounded p-button-danger p-button-outlined" aria-label="Cancel" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
