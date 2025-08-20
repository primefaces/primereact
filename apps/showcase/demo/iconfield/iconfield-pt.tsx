import { IconField } from 'primereact/iconfield';
import { InputText } from 'primereact/inputtext';

export default function IconFieldPTDemo() {
    return (
        <IconField>
            <IconField.Icon>
                <i className="pi pi-search" />
            </IconField.Icon>
            <InputText placeholder="Search" />
        </IconField>
    );
}
