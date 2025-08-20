import { IconField } from 'primereact/iconfield';
import { InputText } from 'primereact/inputtext';

export default function BasicDemo() {
    return (
        <div className="card flex flex-wrap justify-center gap-4">
            <IconField>
                <IconField.Icon>
                    <i className="pi pi-search" />
                </IconField.Icon>
                <InputText placeholder="Search" />
            </IconField>
            <IconField>
                <InputText variant="filled" />
                <IconField.Icon>
                    <i className="pi pi-spin pi-spinner" />
                </IconField.Icon>
            </IconField>
        </div>
    );
}
