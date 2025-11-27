'use client';

import { InputGroup } from 'primereact/inputgroup';
import { InputText } from 'primereact/inputtext';
import { Label } from 'primereact/label';

export default function IftaLabelDemo() {
    return (
        <div className="flex justify-center">
            <InputGroup>
                <InputGroup.Addon>
                    <i className="pi pi-user"></i>
                </InputGroup.Addon>
                <Label.Ifta>
                    <InputText id="name" defaultValue="Amy" />
                    <Label htmlFor="name">Name</Label>
                </Label.Ifta>
            </InputGroup>
        </div>
    );
}
