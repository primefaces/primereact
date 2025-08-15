import { InputGroup } from 'primereact/inputgroup';
import { InputText } from 'primereact/inputtext';

export default function MultipleDemo() {
    return (
        <div className="card flex justify-center">
            <InputGroup className="sm:!w-96">
                <InputGroup.Addon>
                    <i className="pi pi-clock"></i>
                </InputGroup.Addon>
                <InputGroup.Addon>
                    <i className="pi pi-star-fill"></i>
                </InputGroup.Addon>
                <InputText placeholder="Price" />
                <InputGroup.Addon>$</InputGroup.Addon>
                <InputGroup.Addon>.00</InputGroup.Addon>
            </InputGroup>
        </div>
    );
}
