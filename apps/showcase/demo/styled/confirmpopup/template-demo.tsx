import { Check } from '@primeicons/react/check';
import { ExclemationCircle } from '@primeicons/react/exclemation-circle';
import { Times } from '@primeicons/react/times';
import { ConfirmPopup } from '@primereact/ui/confirmpopup';

export default function TemplateDemo() {
    return (
        <div className="flex justify-center">
            <ConfirmPopup.Root>
                <ConfirmPopup.Trigger>Save</ConfirmPopup.Trigger>
                <ConfirmPopup.Portal>
                    <ConfirmPopup.Content>
                        <div className="flex flex-col items-center w-full gap-4 border-b border-surface-200 dark:border-surface-700 p-4 mb-4 pb-0">
                            <ExclemationCircle className="text-6xl text-primary-500"></ExclemationCircle>
                            <p>Please confirm to proceed moving forward.</p>
                        </div>
                    </ConfirmPopup.Content>
                    <ConfirmPopup.Footer>
                        <ConfirmPopup.Reject variant="outlined">
                            <Times />
                            Cancel
                        </ConfirmPopup.Reject>
                        <ConfirmPopup.Accept>
                            <Check />
                            Confirm
                        </ConfirmPopup.Accept>
                    </ConfirmPopup.Footer>
                </ConfirmPopup.Portal>
            </ConfirmPopup.Root>
        </div>
    );
}
