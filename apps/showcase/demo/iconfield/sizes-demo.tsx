import { IconField } from 'primereact/iconfield';
import { InputText } from 'primereact/inputtext';

export default function SizesDemo() {
    return (
        <div className="card flex flex-col items-center gap-4">
            <IconField>
                <IconField.Icon className="pi pi-search" />
                <InputText placeholder="Small" size="small" />
            </IconField>

            <IconField>
                <InputText placeholder="Normal" />
                <IconField.Icon className="pi pi-user" />
            </IconField>

            <IconField>
                <IconField.Icon className="pi pi-lock" />
                <InputText placeholder="Large" size="large" />
                <IconField.Icon className="pi pi-spin pi-spinner" />
            </IconField>
        </div>
    );
}
