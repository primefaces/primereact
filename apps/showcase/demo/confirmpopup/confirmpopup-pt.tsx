'use client';

import { ConfirmPopup } from 'primereact/confirmpopup';

export default function ConfirmPopupPT() {
    return (
        <>
            <ConfirmPopup.Root>
                <ConfirmPopup.Trigger variant="outlined">Open Popup</ConfirmPopup.Trigger>
                <ConfirmPopup.Portal>
                    <ConfirmPopup.Content>
                        <ConfirmPopup.Icon className="pi pi-exclamation-triangle" />
                        <ConfirmPopup.Message>Are you sure you want to proceed?</ConfirmPopup.Message>
                    </ConfirmPopup.Content>
                    <ConfirmPopup.Footer>
                        <ConfirmPopup.Reject severity="secondary" variant="outlined">
                            Cancel
                        </ConfirmPopup.Reject>
                        <ConfirmPopup.Accept>Save</ConfirmPopup.Accept>
                    </ConfirmPopup.Footer>
                </ConfirmPopup.Portal>
            </ConfirmPopup.Root>
        </>
    );
}
