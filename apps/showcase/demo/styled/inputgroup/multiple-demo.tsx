import { InputGroup } from '@primereact/ui/inputgroup';
import { InputText } from '@primereact/ui/inputtext';

export default function MultipleDemo() {
    return (
        <div className="max-w-sm mx-auto">
            <InputGroup.Root>
                <InputGroup.Addon>
                    <i className="pi pi-clock"></i>
                </InputGroup.Addon>
                <InputGroup.Addon>
                    <i className="pi pi-star-fill"></i>
                </InputGroup.Addon>
                <InputText placeholder="Price" />
                <InputGroup.Addon>$</InputGroup.Addon>
                <InputGroup.Addon>.00</InputGroup.Addon>
            </InputGroup.Root>
        </div>
    );
}
