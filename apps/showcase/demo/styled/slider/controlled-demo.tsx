'use client';
import { InputNumberValueChangeEvent } from '@primereact/types/shared/inputnumber';
import { SliderRootChangeEvent } from '@primereact/types/shared/slider';
import { InputNumber } from '@primereact/ui/inputnumber';
import { Slider } from '@primereact/ui/slider';
import * as React from 'react';

export default function ControlledDemo() {
    const [value, setValue] = React.useState(50);

    return (
        <div className="max-w-3xs w-full mx-auto">
            <InputNumber value={value} onValueChange={(e: InputNumberValueChangeEvent) => setValue(e.value as number)} fluid className="mb-4" />
            <Slider.Root value={value} onValueChange={(e: SliderRootChangeEvent) => setValue(e.value as number)} className="w-full">
                <Slider.Track>
                    <Slider.Range />
                </Slider.Track>
                <Slider.Thumb />
            </Slider.Root>
        </div>
    );
}
