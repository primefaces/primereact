import { IconField } from '@primereact/ui/iconfield';
import { InputText } from '@primereact/ui/inputtext';
import { Search } from '@primeicons/react/search';

export default function IconFieldPTDemo() {
    return (
        <div className="flex justify-center">
            <IconField.Root
                pt={{
                    root: 'border border-primary rounded-lg p-1'
                }}
            >
                <IconField.Icon
                    pt={{
                        root: 'text-primary'
                    }}
                >
                    <Search />
                </IconField.Icon>
                <InputText placeholder="Search" />
            </IconField.Root>
        </div>
    );
}
