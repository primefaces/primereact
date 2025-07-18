import { ConfirmDialog } from 'primereact/confirmdialog';

export default function BasicDemo() {
    return (
        <div className="card flex flex-wrap gap-2 justify-center">
            <ConfirmDialog>
                <ConfirmDialog.Trigger variant="outlined">Save</ConfirmDialog.Trigger>
                <ConfirmDialog.Portal>
                    <ConfirmDialog.Header>
                        <ConfirmDialog.Title>Edit Profile</ConfirmDialog.Title>
                        <ConfirmDialog.Close />
                    </ConfirmDialog.Header>
                    <ConfirmDialog.Content>
                        <ConfirmDialog.Icon className="pi pi-exclamation-triangle" />
                        <ConfirmDialog.Message>Are you sure you want to proceed?</ConfirmDialog.Message>
                    </ConfirmDialog.Content>
                    <ConfirmDialog.Footer>
                        <ConfirmDialog.Cancel variant="outlined">Cancel</ConfirmDialog.Cancel>
                        <ConfirmDialog.Action>Save</ConfirmDialog.Action>
                    </ConfirmDialog.Footer>
                </ConfirmDialog.Portal>
            </ConfirmDialog>
            <ConfirmDialog>
                <ConfirmDialog.Trigger severity="danger" variant="outlined">
                    Delete
                </ConfirmDialog.Trigger>
                <ConfirmDialog.Portal>
                    <ConfirmDialog.Header>
                        <ConfirmDialog.Title>Danger Zone</ConfirmDialog.Title>
                        <ConfirmDialog.Close />
                    </ConfirmDialog.Header>
                    <ConfirmDialog.Content>
                        <ConfirmDialog.Icon className="pi pi-exclamation-triangle" />
                        <ConfirmDialog.Message>Do you want to delete this record?</ConfirmDialog.Message>
                    </ConfirmDialog.Content>
                    <ConfirmDialog.Footer>
                        <ConfirmDialog.Cancel variant="outlined">Cancel</ConfirmDialog.Cancel>
                        <ConfirmDialog.Action severity="danger">Delete</ConfirmDialog.Action>
                    </ConfirmDialog.Footer>
                </ConfirmDialog.Portal>
            </ConfirmDialog>
        </div>
    );
}
