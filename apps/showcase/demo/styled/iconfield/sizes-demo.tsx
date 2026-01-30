import { IconField } from '@primereact/ui/iconfield';
import { InputIcon } from '@primereact/ui/inputicon';
import { InputText } from '@primereact/ui/inputtext';

export default function SizesDemo() {
    return (
        <div className="flex flex-col items-center gap-4">
            <IconField>
                <InputIcon>
                    <i className="pi pi-search" />
                </InputIcon>
                <InputText placeholder="Small" size="small" />
            </IconField>

            <IconField>
                <InputText placeholder="Normal" />
                <InputIcon>
                    <i className="pi pi-user" />
                </InputIcon>
            </IconField>

            <IconField>
                <InputIcon>
                    <i className="pi pi-lock" />
                </InputIcon>
                <InputText placeholder="Large" size="large" />
                <InputIcon>
                    <i className="pi pi-spin pi-spinner" />
                </InputIcon>
            </IconField>
        </div>
    );
}
