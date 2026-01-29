import { IconField } from '@primereact/ui/iconfield';
import { IftaLabel } from '@primereact/ui/iftalabel';
import { InputText } from '@primereact/ui/inputtext';
import { Label } from '@primereact/ui/label';

export default function IftaLabelDemo() {
    return (
        <div className="flex justify-center">
            <IftaLabel>
                <IconField.Root>
                    <IconField.InputIcon>
                        <i className="pi pi-user" />
                    </IconField.InputIcon>
                    <InputText id="username" autoComplete="off" variant="filled" />
                </IconField.Root>
                <Label htmlFor="username">Username</Label>
            </IftaLabel>
        </div>
    );
}
