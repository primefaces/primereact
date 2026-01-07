import { IconField } from '@primereact/ui/iconfield';
import { InputText } from '@primereact/ui/inputtext';

export default function IconFieldPTDemo() {
    return (
        <IconField.Root>
            <IconField.InputIcon>
                <i className="pi pi-search" />
            </IconField.InputIcon>
            <InputText placeholder="Search" />
        </IconField.Root>
    );
}
