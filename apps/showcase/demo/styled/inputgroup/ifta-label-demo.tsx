import { IftaLabel } from '@primereact/ui/iftalabel';
import { InputGroup } from '@primereact/ui/inputgroup';
import { InputText } from '@primereact/ui/inputtext';
import { Label } from '@primereact/ui/label';

export default function IftaLabelDemo() {
    return (
        <div className="max-w-xs mx-auto">
            <InputGroup.Root>
                <InputGroup.Addon>
                    <i className="pi pi-user"></i>
                </InputGroup.Addon>
                <IftaLabel>
                    <InputText id="name" defaultValue="Amy" />
                    <Label htmlFor="name">Name</Label>
                </IftaLabel>
            </InputGroup.Root>
        </div>
    );
}
