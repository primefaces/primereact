import { InputGroup } from '@primereact/ui/inputgroup';
import { InputText } from '@primereact/ui/inputtext';
import { User } from '@primeicons/react/user';

export default function BasicDemo() {
    return (
        <div className="space-y-4 max-w-xs mx-auto">
            <InputGroup.Root>
                <InputGroup.Addon>
                    <User></User>
                </InputGroup.Addon>
                <InputText placeholder="Username" />
            </InputGroup.Root>

            <InputGroup.Root>
                <InputGroup.Addon>www</InputGroup.Addon>
                <InputText placeholder="Website" />
            </InputGroup.Root>
        </div>
    );
}
