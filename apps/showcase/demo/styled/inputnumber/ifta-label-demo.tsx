import { IftaLabel } from '@primereact/ui/iftalabel';
import { InputNumber } from '@primereact/ui/inputnumber';
import { Label } from '@primereact/ui/label';

export default function IftaLabelDemo() {
    return (
        <div className="flex justify-center">
            <IftaLabel>
                <InputNumber defaultValue={1} id="price_input" mode="currency" currency="USD" locale="en-US" variant="filled" />
                <Label htmlFor="price_input">Price</Label>
            </IftaLabel>
        </div>
    );
}
