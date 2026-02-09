import { IconField } from '@primereact/ui/iconfield';
import { InputText } from '@primereact/ui/inputtext';
import { Search } from '@primeicons/react/search';
import { Spinner } from '@primeicons/react/spinner';

export default function BasicDemo() {
    return (
        <div className="flex flex-wrap justify-center gap-4">
            <IconField.Root>
                <IconField.Icon>
                    <Search />
                </IconField.Icon>
                <InputText placeholder="Search" />
            </IconField.Root>
            <IconField.Root>
                <InputText variant="filled" />
                <IconField.Icon>
                    <Spinner />
                </IconField.Icon>
            </IconField.Root>
        </div>
    );
}
