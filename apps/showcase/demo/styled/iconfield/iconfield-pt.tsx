'use client';

import { IconField } from 'primereact/iconfield';
import { InputText } from 'primereact/inputtext';

export default function IconFieldPTDemo() {
    return (
        <IconField.Root>
            <IconField.Icon>
                <i className="pi pi-search" />
            </IconField.Icon>
            <InputText placeholder="Search" />
        </IconField.Root>
    );
}
