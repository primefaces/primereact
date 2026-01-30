import { IconField } from '@primereact/ui/iconfield';
import { InputIcon } from '@primereact/ui/inputicon';
import { InputText } from '@primereact/ui/inputtext';

export default function BasicDemo() {
    return (
        <div className="flex flex-wrap justify-center gap-4">
            <IconField>
                <InputIcon>
                    <i className="pi pi-search" />
                </InputIcon>
                <InputText placeholder="Search" />
            </IconField>
            <IconField>
                <InputText variant="filled" />
                <InputIcon>
                    <i className="pi pi-spin pi-spinner" />
                </InputIcon>
            </IconField>
        </div>
    );
}
