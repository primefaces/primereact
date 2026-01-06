'use client';

import { IconField } from '@primereact/ui/iconfield';
import { InputText } from '@primereact/ui/inputtext';

export default function SizesDemo() {
    return (
        <div className="flex flex-col items-center gap-4">
            <IconField.Root>
                <IconField.InputIcon>
                    <i className="pi pi-search" />
                </IconField.InputIcon>
                <InputText placeholder="Small" size="small" />
            </IconField.Root>

            <IconField.Root>
                <InputText placeholder="Normal" />
                <IconField.InputIcon>
                    <i className="pi pi-user" />
                </IconField.InputIcon>
            </IconField.Root>

            <IconField.Root>
                <IconField.InputIcon>
                    <i className="pi pi-lock" />
                </IconField.InputIcon>
                <InputText placeholder="Large" size="large" />
                <IconField.InputIcon>
                    <i className="pi pi-spin pi-spinner" />
                </IconField.InputIcon>
            </IconField.Root>
        </div>
    );
}
