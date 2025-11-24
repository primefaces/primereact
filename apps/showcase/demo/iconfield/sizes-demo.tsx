'use client';

import { IconField } from 'primereact/iconfield';
import { InputText } from 'primereact/inputtext';

export default function SizesDemo() {
    return (
        <div className="flex flex-col items-center gap-4">
            <IconField>
                <IconField.Icon>
                    <i className="pi pi-search" />
                </IconField.Icon>
                <InputText placeholder="Small" size="small" />
            </IconField>

            <IconField>
                <InputText placeholder="Normal" />
                <IconField.Icon>
                    <i className="pi pi-user" />
                </IconField.Icon>
            </IconField>

            <IconField>
                <IconField.Icon>
                    <i className="pi pi-lock" />
                </IconField.Icon>
                <InputText placeholder="Large" size="large" />
                <IconField.Icon>
                    <i className="pi pi-spin pi-spinner" />
                </IconField.Icon>
            </IconField>
        </div>
    );
}
