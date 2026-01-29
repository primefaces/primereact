import { IftaLabel } from '@primereact/ui/iftalabel';
import { InputText } from '@primereact/ui/inputtext';
import { Label } from '@primereact/ui/label';

export default function BasicDemo() {
    return (
        <div className="flex flex-wrap justify-center">
            <IftaLabel>
                <InputText id="username" />
                <Label htmlFor="username">Username</Label>
            </IftaLabel>
        </div>
    );
}
