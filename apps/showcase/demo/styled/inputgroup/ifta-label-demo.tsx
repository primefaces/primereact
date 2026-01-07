import { InputGroup } from '@primereact/ui/inputgroup';
import { InputText } from '@primereact/ui/inputtext';
import { Label } from '@primereact/ui/label';

export default function IftaLabelDemo() {
    return (
        <div className="flex justify-center">
            <InputGroup.Root>
                <InputGroup.Addon>
                    <i className="pi pi-user"></i>
                </InputGroup.Addon>
                <Label.Ifta>
                    <InputText id="name" defaultValue="Amy" />
                    <Label.Root htmlFor="name">Name</Label.Root>
                </Label.Ifta>
            </InputGroup.Root>
        </div>
    );
}
