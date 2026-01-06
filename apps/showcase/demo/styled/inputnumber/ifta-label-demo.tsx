'use client';

import { InputNumber } from '@primereact/ui/inputnumber';
import { Label } from '@primereact/ui/label';

export default function IftaLabelDemo() {
    return (
        <div className="flex justify-center">
            <Label.Ifta>
                <InputNumber defaultValue={1} inputId="price_input" mode="currency" currency="USD" locale="en-US" variant="filled" />
                <Label.Root htmlFor="price_input">Price</Label.Root>
            </Label.Ifta>
        </div>
    );
}
