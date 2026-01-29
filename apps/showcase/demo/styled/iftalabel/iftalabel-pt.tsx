import { IftaLabel } from '@primereact/ui/iftalabel';
import { InputText } from '@primereact/ui/inputtext';
import { Label } from '@primereact/ui/label';

export default function IftaLabelDemo() {
    return (
        <IftaLabel>
            <InputText id="username" />
            <Label htmlFor="username">InputText</Label>
        </IftaLabel>
    );
}
