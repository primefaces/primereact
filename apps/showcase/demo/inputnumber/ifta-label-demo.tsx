import { InputNumber } from 'primereact/inputnumber';
import { Label } from 'primereact/label';

export default function IftaLabelDemo() {
    return (
        <div className="card flex justify-center">
            <Label.Ifta>
                <InputNumber defaultValue={1} inputId="price_input" mode="currency" currency="USD" locale="en-US" variant="filled" />
                <Label htmlFor="price_input">Price</Label>
            </Label.Ifta>
        </div>
    );
}
