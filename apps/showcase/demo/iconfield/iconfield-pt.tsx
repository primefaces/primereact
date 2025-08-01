import { IconField } from 'primereact/iconfield';
import { InputText } from 'primereact/inputtext';

export default function IconFieldPTDemo() {
    return (
        <IconField>
            <IconField.Icon className="pi pi-search" />
            <InputText placeholder="Search" />
        </IconField>
    );
}
