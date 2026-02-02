import { IconField } from '@primereact/ui/iconfield';
import { InputText } from '@primereact/ui/inputtext';

export default function BasicDemo() {
    return (
        <div className="flex flex-wrap justify-center gap-4">
            <IconField.Root>
                <IconField.Icon>
                    <i className="pi pi-search" />
                </IconField.Icon>
                <InputText placeholder="Search" />
            </IconField.Root>
            <IconField.Root>
                <InputText variant="filled" />
                <IconField.Icon>
                    <i className="pi pi-spin pi-spinner" />
                </IconField.Icon>
            </IconField.Root>
        </div>
    );
}
