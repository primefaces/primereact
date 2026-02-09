import { IftaLabel } from '@primereact/ui/iftalabel';
import { InputGroup } from '@primereact/ui/inputgroup';
import { InputText } from '@primereact/ui/inputtext';
import { Label } from '@primereact/ui/label';
import { User } from '@primeicons/react/user';

export default function IftaLabelDemo() {
    return (
        <div className="max-w-xs mx-auto">
            <InputGroup.Root>
                <InputGroup.Addon>
                    <User></User>
                </InputGroup.Addon>
                <IftaLabel>
                    <InputText id="name" defaultValue="Amy" />
                    <Label htmlFor="name">Name</Label>
                </IftaLabel>
            </InputGroup.Root>
        </div>
    );
}
