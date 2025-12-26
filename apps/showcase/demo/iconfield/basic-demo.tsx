'use client';

import { IconField } from 'primereact/iconfield';
import { InputText } from 'primereact/inputtext';

export default function BasicDemo() {
    return (
        <div className="flex flex-wrap justify-center gap-4">
            <IconField.Root>
                <IconField.InputIcon>
                    <i className="pi pi-search" />
                </IconField.InputIcon>
                <InputText placeholder="Search" />
            </IconField.Root>
            <IconField.Root>
                <InputText variant="filled" />
                <IconField.InputIcon>
                    <i className="pi pi-spin pi-spinner" />
                </IconField.InputIcon>
            </IconField.Root>
        </div>
    );
}
