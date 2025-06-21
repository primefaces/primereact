import { InputText } from 'primereact/inputtext';
import { Label } from 'primereact/label';

export default function BasicDemo() {
    return (
        <div className="card flex flex-wrap justify-center ">
            <Label.Ifta>
                <InputText id="username" />
                <Label htmlFor="username">InputText</Label>
            </Label.Ifta>
        </div>
    );
}
