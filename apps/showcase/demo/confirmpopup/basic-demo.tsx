import { ConfirmPopup } from 'primereact/confirmpopup';

export default function BasicDemo() {
    return (
        <div className="card flex flex-wrap gap-2 justify-center">
            <ConfirmPopup>
                <ConfirmPopup.Trigger variant="outlined">Save</ConfirmPopup.Trigger>
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
            </ConfirmPopup>
            <ConfirmPopup>
                <ConfirmPopup.Trigger severity="danger" variant="outlined">
                    Delete
                </ConfirmPopup.Trigger>
                <ConfirmPopup.Portal>
                    <ConfirmPopup.Content>
                        <ConfirmPopup.Icon className="pi pi-info-circle" />
                        <ConfirmPopup.Message>Are you sure you want to proceed?</ConfirmPopup.Message>
                    </ConfirmPopup.Content>
                    <ConfirmPopup.Footer>
                        <ConfirmPopup.Reject severity="secondary" variant="outlined">
                            Cancel
                        </ConfirmPopup.Reject>
                        <ConfirmPopup.Accept severity="danger">Delete</ConfirmPopup.Accept>
                    </ConfirmPopup.Footer>
                </ConfirmPopup.Portal>
            </ConfirmPopup>
        </div>
    );
}
