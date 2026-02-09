import { IconField } from '@primereact/ui/iconfield';
import { InputText } from '@primereact/ui/inputtext';
import { Lock } from '@primeicons/react/lock';
import { Search } from '@primeicons/react/search';
import { Spinner } from '@primeicons/react/spinner';
import { User } from '@primeicons/react/user';

export default function SizesDemo() {
    return (
        <div className="flex flex-col items-center gap-4">
            <IconField.Root>
                <IconField.Icon>
                    <Search />
                </IconField.Icon>
                <InputText placeholder="Small" size="small" />
            </IconField.Root>

            <IconField.Root>
                <InputText placeholder="Normal" />
                <IconField.Icon>
                    <User />
                </IconField.Icon>
            </IconField.Root>

            <IconField.Root>
                <IconField.Icon>
                    <Lock />
                </IconField.Icon>
                <InputText placeholder="Large" size="large" />
                <IconField.Icon>
                    <Spinner />
                </IconField.Icon>
            </IconField.Root>
        </div>
    );
}
