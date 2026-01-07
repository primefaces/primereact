import { IconField } from '@primereact/ui/iconfield';
import { InputText } from '@primereact/ui/inputtext';
import { Label } from '@primereact/ui/label';

export default function IftaLabelDemo() {
    return (
        <div className="flex justify-center">
            <Label.Ifta>
                <IconField.Root>
                    <IconField.InputIcon>
                        <i className="pi pi-user" />
                    </IconField.InputIcon>
                    <InputText id="username" autoComplete="off" variant="filled" />
                </IconField.Root>
                <Label.Root htmlFor="username">Username</Label.Root>
            </Label.Ifta>
        </div>
    );
}
