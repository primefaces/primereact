'use client';

import { InputNumber } from 'primereact/inputnumber';
import { Label } from 'primereact/label';

export default function PrefixSuffixDemo() {
    return (
        <div className="flex flex-wrap gap-4">
            <div className="flex-auto">
                <Label.Root htmlFor="mile" className="font-bold block mb-2">
                    Mile
                </Label.Root>
                <InputNumber defaultValue={20} inputId="mile" suffix=" mi" fluid />
            </div>
            <div className="flex-auto">
                <Label.Root htmlFor="percent" className="font-bold block mb-2">
                    Percent
                </Label.Root>
                <InputNumber defaultValue={50} inputId="percent" prefix="%" fluid />
            </div>
            <div className="flex-auto">
                <Label.Root htmlFor="expiry" className="font-bold block mb-2">
                    Expiry
                </Label.Root>
                <InputNumber defaultValue={10} inputId="expiry" prefix="Expires in " suffix=" days" fluid />
            </div>
            <div className="flex-auto">
                <Label.Root htmlFor="temperature" className="font-bold block mb-2">
                    Temperature
                </Label.Root>
                <InputNumber defaultValue={20} inputId="temperature" prefix="&uarr; " suffix="℃" min={0} max={40} fluid />
            </div>
        </div>
    );
}
