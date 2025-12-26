'use client';

import { InputNumber } from 'primereact/inputnumber';
import { Label } from 'primereact/label';

export default function NumeralsDemo() {
    return (
        <div className="flex flex-wrap gap-4">
            <div className="flex-auto">
                <Label.Root htmlFor="integeronly" className="font-bold block mb-2">
                    Integer Only
                </Label.Root>
                <InputNumber defaultValue={42723} inputId="integeronly" fluid />
            </div>
            <div className="flex-auto">
                <Label.Root htmlFor="withoutgrouping" className="font-bold block mb-2">
                    Without Grouping
                </Label.Root>
                <InputNumber defaultValue={58151} inputId="withoutgrouping" useGrouping={false} fluid />
            </div>
            <div className="flex-auto">
                <Label.Root htmlFor="minmaxfraction" className="font-bold block mb-2">
                    Min-Max Fraction Digits
                </Label.Root>
                <InputNumber defaultValue={2351.35} inputId="minmaxfraction" minFractionDigits={2} maxFractionDigits={5} fluid />
            </div>
            <div className="flex-auto">
                <Label.Root htmlFor="minmax" className="font-bold block mb-2">
                    Min-Max Boundaries
                </Label.Root>
                <InputNumber defaultValue={50} inputId="minmax" min={0} max={100} fluid />
            </div>
        </div>
    );
}
