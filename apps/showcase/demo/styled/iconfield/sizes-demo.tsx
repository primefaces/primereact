'use client';

import { IconField } from 'primereact/iconfield';
import { InputText } from 'primereact/inputtext';

export default function SizesDemo() {
    return (
        <div className="flex flex-col items-center gap-4">
            <IconField.Root>
                <IconField.Icon>
                    <i className="pi pi-search" />
                </IconField.Icon>
                <InputText placeholder="Small" size="small" />
            </IconField.Root>

            <IconField.Root>
                <InputText placeholder="Normal" />
                <IconField.Icon>
                    <i className="pi pi-user" />
                </IconField.Icon>
            </IconField.Root>

            <IconField.Root>
                <IconField.Icon>
                    <i className="pi pi-lock" />
                </IconField.Icon>
                <InputText placeholder="Large" size="large" />
                <IconField.Icon>
                    <i className="pi pi-spin pi-spinner" />
                </IconField.Icon>
            </IconField.Root>
        </div>
    );
}
