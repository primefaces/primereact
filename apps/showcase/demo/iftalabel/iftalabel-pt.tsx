import { InputText } from 'primereact/inputtext';
import { Label } from 'primereact/label';

export default function IftaLabelDemo() {
    return (
        <Label.Ifta>
            <InputText id="username" />
            <Label htmlFor="username">InputText</Label>
        </Label.Ifta>
    );
}
