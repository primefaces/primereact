'use client';

import { IconField } from 'primereact/iconfield';
import { InputText } from 'primereact/inputtext';
import { Label } from 'primereact/label';

export default function IftaLabelDemo() {
    return (
        <div className="flex justify-center">
            <Label.Ifta>
                <IconField.Root>
                    <IconField.Icon>
                        <i className="pi pi-user" />
                    </IconField.Icon>
                    <InputText id="username" autoComplete="off" variant="filled" />
                </IconField.Root>
                <Label.Root htmlFor="username">Username</Label.Root>
            </Label.Ifta>
        </div>
    );
}
