import { ConfirmPopup } from 'primereact/confirmpopup';

export default function TemplateDemo() {
    return (
        <div className="card flex justify-center">
            <ConfirmPopup>
                <ConfirmPopup.Trigger>Save</ConfirmPopup.Trigger>
                <ConfirmPopup.Portal>
                    <ConfirmPopup.Content>
                        <div className="flex flex-col items-center w-full gap-4 border-b border-surface-200 dark:border-surface-700 p-4 mb-4 pb-0">
                            <i className="pi pi-exclamation-circle text-6xl text-primary-500"></i>
                            <p>Please confirm to proceed moving forward.</p>
                        </div>
                    </ConfirmPopup.Content>
                    <ConfirmPopup.Footer>
                        <ConfirmPopup.Reject variant="outlined">
                            <i className="pi pi-times" />
                            Cancel
                        </ConfirmPopup.Reject>
                        <ConfirmPopup.Accept>
                            <i className="pi pi-check" />
                            Confirm
                        </ConfirmPopup.Accept>
                    </ConfirmPopup.Footer>
                </ConfirmPopup.Portal>
            </ConfirmPopup>
        </div>
    );
}
