import { Button } from '../../lib/button/Button';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function IconOnlyDoc(props) {
    const code = {
        basic: `
<Button icon="pi pi-check" aria-label="Filter" />
<Button icon="pi pi-bookmark" className="p-button-secondary" aria-label="Bookmark" />
<Button icon="pi pi-search" className="p-button-success" aria-label="Search" />
<Button icon="pi pi-user" className="p-button-info" aria-label="User" />
<Button icon="pi pi-bell" className="p-button-warning" aria-label="Notification" />
<Button icon="pi pi-heart" className="p-button-help" aria-label="Favorite" />
<Button icon="pi pi-times" className="p-button-danger" aria-label="Cancel" />

<Button icon="pi pi-check" className="p-button-rounded" aria-label="Filter" />
<Button icon="pi pi-bookmark" className="p-button-secondary p-button-rounded" aria-label="Bookmark" />
<Button icon="pi pi-search" className="p-button-success p-button-rounded" aria-label="Search" />
<Button icon="pi pi-user" className="p-button-info p-button-rounded" aria-label="User" />
<Button icon="pi pi-bell" className="p-button-warning p-button-rounded" aria-label="Notification" />
<Button icon="pi pi-heart" className="p-button-help p-button-rounded" aria-label="Favorite" />
<Button icon="pi pi-times" className="p-button-danger p-button-rounded" aria-label="Cancel" />

<Button icon="pi pi-check" className="p-button-rounded p-button-outlined" aria-label="Filter" />
<Button icon="pi pi-bookmark" className="p-button-secondary p-button-rounded p-button-outlined" aria-label="Bookmark" />
<Button icon="pi pi-search" className="p-button-success p-button-rounded p-button-outlined" aria-label="Search" />
<Button icon="pi pi-user" className="p-button-info p-button-rounded p-button-outlined" aria-label="User" />
<Button icon="pi pi-bell" className="p-button-warning p-button-rounded p-button-outlined" aria-label="Notification" />
<Button icon="pi pi-heart" className="p-button-help p-button-rounded p-button-outlined" aria-label="Favorite" />
<Button icon="pi pi-times" className="p-button-danger p-button-rounded p-button-outlined" aria-label="Cancel" />

<Button icon="pi pi-check" className="p-button-rounded p-button-text p-button-raised" aria-label="Filter" />
<Button icon="pi pi-bookmark" className="p-button-secondary p-button-rounded p-button-text p-button-raised" aria-label="Bookmark" />
<Button icon="pi pi-search" className="p-button-success p-button-rounded p-button-text p-button-raised" aria-label="Search" />
<Button icon="pi pi-user" className="p-button-info p-button-rounded p-button-text p-button-raised" aria-label="User" />
<Button icon="pi pi-bell" className="p-button-warning p-button-rounded p-button-text p-button-raised" aria-label="Notification" />
<Button icon="pi pi-heart" className="p-button-help p-button-rounded p-button-text p-button-raised" aria-label="Favorite" />
<Button icon="pi pi-times" className="p-button-danger p-button-rounded p-button-text p-button-raised" aria-label="Cancel" />

<Button icon="pi pi-check" className="p-button-rounded p-button-text" aria-label="Filter" />
<Button icon="pi pi-bookmark" className="p-button-secondary p-button-rounded p-button-text" aria-label="Bookmark" />
<Button icon="pi pi-search" className="p-button-success p-button-rounded p-button-text" aria-label="Search" />
<Button icon="pi pi-user" className="p-button-info p-button-rounded p-button-text" aria-label="User" />
<Button icon="pi pi-bell" className="p-button-warning p-button-rounded p-button-text" aria-label="Notification" />
<Button icon="pi pi-heart" className="p-button-help p-button-rounded p-button-text" aria-label="Favorite" />
<Button icon="pi pi-times" className="p-button-danger p-button-rounded p-button-text" aria-label="Cancel" />
        `,
        javascript: `
import React from 'react'; 
import { Button } from 'primereact/button';

export default function IconOnlyDemo() {
    return (
        <div className="card">
            <div className="flex flex-wrap justify-content-center gap-3 mb-4">
                <Button icon="pi pi-check" aria-label="Filter" />
                <Button icon="pi pi-bookmark" className="p-button-secondary" aria-label="Bookmark" />
                <Button icon="pi pi-search" className="p-button-success" aria-label="Search" />
                <Button icon="pi pi-user" className="p-button-info" aria-label="User" />
                <Button icon="pi pi-bell" className="p-button-warning" aria-label="Notification" />
                <Button icon="pi pi-heart" className="p-button-help" aria-label="Favorite" />
                <Button icon="pi pi-times" className="p-button-danger" aria-label="Cancel" />
            </div>

            <div className="flex flex-wrap justify-content-center gap-3 mb-4">
                <Button icon="pi pi-check" className="p-button-rounded" aria-label="Filter" />
                <Button icon="pi pi-bookmark" className="p-button-secondary p-button-rounded" aria-label="Bookmark" />
                <Button icon="pi pi-search" className="p-button-success p-button-rounded" aria-label="Search" />
                <Button icon="pi pi-user" className="p-button-info p-button-rounded" aria-label="User" />
                <Button icon="pi pi-bell" className="p-button-warning p-button-rounded" aria-label="Notification" />
                <Button icon="pi pi-heart" className="p-button-help p-button-rounded" aria-label="Favorite" />
                <Button icon="pi pi-times" className="p-button-danger p-button-rounded" aria-label="Cancel" />
            </div>

            <div className="flex flex-wrap justify-content-center gap-3 mb-4">
                <Button icon="pi pi-check" className="p-button-rounded p-button-outlined" aria-label="Filter" />
                <Button icon="pi pi-bookmark" className="p-button-secondary p-button-rounded p-button-outlined" aria-label="Bookmark" />
                <Button icon="pi pi-search" className="p-button-success p-button-rounded p-button-outlined" aria-label="Search" />
                <Button icon="pi pi-user" className="p-button-info p-button-rounded p-button-outlined" aria-label="User" />
                <Button icon="pi pi-bell" className="p-button-warning p-button-rounded p-button-outlined" aria-label="Notification" />
                <Button icon="pi pi-heart" className="p-button-help p-button-rounded p-button-outlined" aria-label="Favorite" />
                <Button icon="pi pi-times" className="p-button-danger p-button-rounded p-button-outlined" aria-label="Cancel" />
            </div>

            <div className="flex flex-wrap justify-content-center gap-3 mb-4">
                <Button icon="pi pi-check" className="p-button-rounded p-button-text p-button-raised" aria-label="Filter" />
                <Button icon="pi pi-bookmark" className="p-button-secondary p-button-rounded p-button-text p-button-raised" aria-label="Bookmark" />
                <Button icon="pi pi-search" className="p-button-success p-button-rounded p-button-text p-button-raised" aria-label="Search" />
                <Button icon="pi pi-user" className="p-button-info p-button-rounded p-button-text p-button-raised" aria-label="User" />
                <Button icon="pi pi-bell" className="p-button-warning p-button-rounded p-button-text p-button-raised" aria-label="Notification" />
                <Button icon="pi pi-heart" className="p-button-help p-button-rounded p-button-text p-button-raised" aria-label="Favorite" />
                <Button icon="pi pi-times" className="p-button-danger p-button-rounded p-button-text p-button-raised" aria-label="Cancel" />
            </div>

            <div className="flex flex-wrap justify-content-center gap-3">
                <Button icon="pi pi-check" className="p-button-rounded p-button-text" aria-label="Filter" />
                <Button icon="pi pi-bookmark" className="p-button-secondary p-button-rounded p-button-text" aria-label="Bookmark" />
                <Button icon="pi pi-search" className="p-button-success p-button-rounded p-button-text" aria-label="Search" />
                <Button icon="pi pi-user" className="p-button-info p-button-rounded p-button-text" aria-label="User" />
                <Button icon="pi pi-bell" className="p-button-warning p-button-rounded p-button-text" aria-label="Notification" />
                <Button icon="pi pi-heart" className="p-button-help p-button-rounded p-button-text" aria-label="Favorite" />
                <Button icon="pi pi-times" className="p-button-danger p-button-rounded p-button-text" aria-label="Cancel" />
            </div>
        </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { Button } from 'primereact/button';

export default function IconOnlyDemo() {
    return (
        <div className="card">
            <div className="flex flex-wrap justify-content-center gap-3 mb-4">
                <Button icon="pi pi-check" aria-label="Filter" />
                <Button icon="pi pi-bookmark" className="p-button-secondary" aria-label="Bookmark" />
                <Button icon="pi pi-search" className="p-button-success" aria-label="Search" />
                <Button icon="pi pi-user" className="p-button-info" aria-label="User" />
                <Button icon="pi pi-bell" className="p-button-warning" aria-label="Notification" />
                <Button icon="pi pi-heart" className="p-button-help" aria-label="Favorite" />
                <Button icon="pi pi-times" className="p-button-danger" aria-label="Cancel" />
            </div>

            <div className="flex flex-wrap justify-content-center gap-3 mb-4">
                <Button icon="pi pi-check" className="p-button-rounded" aria-label="Filter" />
                <Button icon="pi pi-bookmark" className="p-button-secondary p-button-rounded" aria-label="Bookmark" />
                <Button icon="pi pi-search" className="p-button-success p-button-rounded" aria-label="Search" />
                <Button icon="pi pi-user" className="p-button-info p-button-rounded" aria-label="User" />
                <Button icon="pi pi-bell" className="p-button-warning p-button-rounded" aria-label="Notification" />
                <Button icon="pi pi-heart" className="p-button-help p-button-rounded" aria-label="Favorite" />
                <Button icon="pi pi-times" className="p-button-danger p-button-rounded" aria-label="Cancel" />
            </div>

            <div className="flex flex-wrap justify-content-center gap-3 mb-4">
                <Button icon="pi pi-check" className="p-button-rounded p-button-outlined" aria-label="Filter" />
                <Button icon="pi pi-bookmark" className="p-button-secondary p-button-rounded p-button-outlined" aria-label="Bookmark" />
                <Button icon="pi pi-search" className="p-button-success p-button-rounded p-button-outlined" aria-label="Search" />
                <Button icon="pi pi-user" className="p-button-info p-button-rounded p-button-outlined" aria-label="User" />
                <Button icon="pi pi-bell" className="p-button-warning p-button-rounded p-button-outlined" aria-label="Notification" />
                <Button icon="pi pi-heart" className="p-button-help p-button-rounded p-button-outlined" aria-label="Favorite" />
                <Button icon="pi pi-times" className="p-button-danger p-button-rounded p-button-outlined" aria-label="Cancel" />
            </div>

            <div className="flex flex-wrap justify-content-center gap-3 mb-4">
                <Button icon="pi pi-check" className="p-button-rounded p-button-text p-button-raised" aria-label="Filter" />
                <Button icon="pi pi-bookmark" className="p-button-secondary p-button-rounded p-button-text p-button-raised" aria-label="Bookmark" />
                <Button icon="pi pi-search" className="p-button-success p-button-rounded p-button-text p-button-raised" aria-label="Search" />
                <Button icon="pi pi-user" className="p-button-info p-button-rounded p-button-text p-button-raised" aria-label="User" />
                <Button icon="pi pi-bell" className="p-button-warning p-button-rounded p-button-text p-button-raised" aria-label="Notification" />
                <Button icon="pi pi-heart" className="p-button-help p-button-rounded p-button-text p-button-raised" aria-label="Favorite" />
                <Button icon="pi pi-times" className="p-button-danger p-button-rounded p-button-text p-button-raised" aria-label="Cancel" />
            </div>

            <div className="flex flex-wrap justify-content-center gap-3">
                <Button icon="pi pi-check" className="p-button-rounded p-button-text" aria-label="Filter" />
                <Button icon="pi pi-bookmark" className="p-button-secondary p-button-rounded p-button-text" aria-label="Bookmark" />
                <Button icon="pi pi-search" className="p-button-success p-button-rounded p-button-text" aria-label="Search" />
                <Button icon="pi pi-user" className="p-button-info p-button-rounded p-button-text" aria-label="User" />
                <Button icon="pi pi-bell" className="p-button-warning p-button-rounded p-button-text" aria-label="Notification" />
                <Button icon="pi pi-heart" className="p-button-help p-button-rounded p-button-text" aria-label="Favorite" />
                <Button icon="pi pi-times" className="p-button-danger p-button-rounded p-button-text" aria-label="Cancel" />
            </div>
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Buttons can have icons without labels.</p>
            </DocSectionText>
            <div className="card">
                <div className="flex flex-wrap justify-content-center gap-3 mb-4">
                    <Button icon="pi pi-check" aria-label="Filter" />
                    <Button icon="pi pi-bookmark" className="p-button-secondary" aria-label="Bookmark" />
                    <Button icon="pi pi-search" className="p-button-success" aria-label="Search" />
                    <Button icon="pi pi-user" className="p-button-info" aria-label="User" />
                    <Button icon="pi pi-bell" className="p-button-warning" aria-label="Notification" />
                    <Button icon="pi pi-heart" className="p-button-help" aria-label="Favorite" />
                    <Button icon="pi pi-times" className="p-button-danger" aria-label="Cancel" />
                </div>

                <div className="flex flex-wrap justify-content-center gap-3 mb-4">
                    <Button icon="pi pi-check" className="p-button-rounded" aria-label="Filter" />
                    <Button icon="pi pi-bookmark" className="p-button-secondary p-button-rounded" aria-label="Bookmark" />
                    <Button icon="pi pi-search" className="p-button-success p-button-rounded" aria-label="Search" />
                    <Button icon="pi pi-user" className="p-button-info p-button-rounded" aria-label="User" />
                    <Button icon="pi pi-bell" className="p-button-warning p-button-rounded" aria-label="Notification" />
                    <Button icon="pi pi-heart" className="p-button-help p-button-rounded" aria-label="Favorite" />
                    <Button icon="pi pi-times" className="p-button-danger p-button-rounded" aria-label="Cancel" />
                </div>

                <div className="flex flex-wrap justify-content-center gap-3 mb-4">
                    <Button icon="pi pi-check" className="p-button-rounded p-button-outlined" aria-label="Filter" />
                    <Button icon="pi pi-bookmark" className="p-button-secondary p-button-rounded p-button-outlined" aria-label="Bookmark" />
                    <Button icon="pi pi-search" className="p-button-success p-button-rounded p-button-outlined" aria-label="Search" />
                    <Button icon="pi pi-user" className="p-button-info p-button-rounded p-button-outlined" aria-label="User" />
                    <Button icon="pi pi-bell" className="p-button-warning p-button-rounded p-button-outlined" aria-label="Notification" />
                    <Button icon="pi pi-heart" className="p-button-help p-button-rounded p-button-outlined" aria-label="Favorite" />
                    <Button icon="pi pi-times" className="p-button-danger p-button-rounded p-button-outlined" aria-label="Cancel" />
                </div>

                <div className="flex flex-wrap justify-content-center gap-3 mb-4">
                    <Button icon="pi pi-check" className="p-button-rounded p-button-text p-button-raised" aria-label="Filter" />
                    <Button icon="pi pi-bookmark" className="p-button-secondary p-button-rounded p-button-text p-button-raised" aria-label="Bookmark" />
                    <Button icon="pi pi-search" className="p-button-success p-button-rounded p-button-text p-button-raised" aria-label="Search" />
                    <Button icon="pi pi-user" className="p-button-info p-button-rounded p-button-text p-button-raised" aria-label="User" />
                    <Button icon="pi pi-bell" className="p-button-warning p-button-rounded p-button-text p-button-raised" aria-label="Notification" />
                    <Button icon="pi pi-heart" className="p-button-help p-button-rounded p-button-text p-button-raised" aria-label="Favorite" />
                    <Button icon="pi pi-times" className="p-button-danger p-button-rounded p-button-text p-button-raised" aria-label="Cancel" />
                </div>

                <div className="flex flex-wrap justify-content-center gap-3">
                    <Button icon="pi pi-check" className="p-button-rounded p-button-text" aria-label="Filter" />
                    <Button icon="pi pi-bookmark" className="p-button-secondary p-button-rounded p-button-text" aria-label="Bookmark" />
                    <Button icon="pi pi-search" className="p-button-success p-button-rounded p-button-text" aria-label="Search" />
                    <Button icon="pi pi-user" className="p-button-info p-button-rounded p-button-text" aria-label="User" />
                    <Button icon="pi pi-bell" className="p-button-warning p-button-rounded p-button-text" aria-label="Notification" />
                    <Button icon="pi pi-heart" className="p-button-help p-button-rounded p-button-text" aria-label="Favorite" />
                    <Button icon="pi pi-times" className="p-button-danger p-button-rounded p-button-text" aria-label="Cancel" />
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
