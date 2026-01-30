import { IconField } from '@primereact/ui/iconfield';
import { InputIcon } from '@primereact/ui/inputicon';
import { InputText } from '@primereact/ui/inputtext';

export default function IconFieldPTDemo() {
    return (
        <div className="flex justify-center">
            <IconField
                pt={{
                    root: 'border border-primary rounded-lg p-1'
                }}
            >
                <InputIcon
                    pt={{
                        root: 'text-primary'
                    }}
                >
                    <i className="pi pi-search" />
                </InputIcon>
                <InputText placeholder="Search" />
            </IconField>
        </div>
    );
}
