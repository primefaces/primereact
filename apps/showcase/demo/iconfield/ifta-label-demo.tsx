import { IconField } from 'primereact/iconfield';
import { InputText } from 'primereact/inputtext';
import { Label } from 'primereact/label';

export default function IftaLabelDemo() {
    return (
        <div className="card flex justify-center">
            <Label.Ifta>
                <IconField>
                    <IconField.Icon className="pi pi-user" />
                    <InputText id="username" autoComplete="off" variant="filled" />
                </IconField>
                <Label htmlFor="username">Username</Label>
            </Label.Ifta>
        </div>
    );
}
