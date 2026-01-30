import { IconField } from '@primereact/ui/iconfield';
import { InputText } from '@primereact/ui/inputtext';

export default function IconFieldPTDemo() {
    return (
        <div className="flex justify-center">
            <IconField.Root
                pt={{
                    root: 'border border-primary rounded-lg p-1'
                }}
            >
                <IconField.InputIcon
                    pt={{
                        root: 'text-primary'
                    }}
                >
                    <i className="pi pi-search" />
                </IconField.InputIcon>
                <InputText placeholder="Search" />
            </IconField.Root>
        </div>
    );
}
