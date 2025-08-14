import { IconField } from 'primereact/iconfield';
import { InputText } from 'primereact/inputtext';

export default function BasicDemo() {
    return (
        <div className="card flex flex-wrap justify-center gap-4">
            <IconField>
                <IconField.Icon className="pi pi-search" />
                <InputText placeholder="Search" />
            </IconField>
            <IconField>
                <InputText variant="filled" />
                <IconField.Icon className="pi pi-spin pi-spinner" />
            </IconField>
        </div>
    );
}
