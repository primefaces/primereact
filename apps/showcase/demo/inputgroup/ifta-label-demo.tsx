'use client';

import { InputGroup } from 'primereact/inputgroup';
import { InputText } from 'primereact/inputtext';
import { Label } from 'primereact/label';

export default function IftaLabelDemo() {
    return (
        <div className="flex justify-center">
            <InputGroup.Root>
                <InputGroup.Addon>
                    <i className="pi pi-user"></i>
                </InputGroup.Addon>
                <Label.Ifta>
                    <InputText id="name" defaultValue="Amy" />
                    <Label.Root htmlFor="name">Name</Label.Root>
                </Label.Ifta>
            </InputGroup.Root>
        </div>
    );
}
