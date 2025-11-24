'use client';

import { InputGroup } from 'primereact/inputgroup';
import { InputText } from 'primereact/inputtext';

export default function BasicDemo() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputGroup>
                <InputGroup.Addon>
                    <i className="pi pi-user"></i>
                </InputGroup.Addon>
                <InputText placeholder="Username" />
            </InputGroup>

            <InputGroup>
                <InputGroup.Addon>www</InputGroup.Addon>
                <InputText placeholder="Website" />
            </InputGroup>
        </div>
    );
}
