'use client';
import type { InputNumberValueChangeEvent } from '@primereact/types/shared/inputnumber';
import { FloatLabel } from '@primereact/ui/floatlabel';
import { InputNumber } from '@primereact/ui/inputnumber';
import { Label } from '@primereact/ui/label';
import * as React from 'react';

export default function FloatLabelDemo() {
    const [value1, setValue1] = React.useState<number | null>(null);
    const [value2, setValue2] = React.useState<number | null>(null);
    const [value3, setValue3] = React.useState<number | null>(null);

    return (
        <div className="flex flex-wrap justify-center items-end gap-4">
            <FloatLabel>
                <InputNumber
                    value={value1}
                    onValueChange={(e: InputNumberValueChangeEvent) => setValue1(e.value)}
                    inputId="over_label"
                    mode="currency"
                    currency="USD"
                    locale="en-US"
                />
                <Label htmlFor="over_label">Over Label</Label>
            </FloatLabel>

            <FloatLabel variant="in">
                <InputNumber
                    value={value2}
                    onValueChange={(e: InputNumberValueChangeEvent) => setValue2(e.value)}
                    inputId="in_label"
                    mode="currency"
                    currency="USD"
                    locale="en-US"
                    variant="filled"
                />
                <Label htmlFor="in_label">In Label</Label>
            </FloatLabel>

            <FloatLabel variant="on">
                <InputNumber
                    value={value3}
                    onValueChange={(e: InputNumberValueChangeEvent) => setValue3(e.value)}
                    inputId="on_label"
                    mode="currency"
                    currency="USD"
                    locale="en-US"
                />
                <Label htmlFor="on_label">On Label</Label>
            </FloatLabel>
        </div>
    );
}
