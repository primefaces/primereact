'use client';
import type { SliderRootChangeEvent } from '@primereact/types/shared/slider';
import { Slider } from '@primereact/ui/slider';
import * as React from 'react';

export default function ValueChangeDemo() {
    const [value, setValue] = React.useState(50);
    const [endValue, setEndValue] = React.useState(50);

    return (
        <div className="max-w-3xs mx-auto w-full flex flex-col items-center space-y-4">
            <div className="text-sm text-surface-500 font-mono">onValueChange: {value}</div>

            <div className="text-sm text-surface-500 font-mono"> onValueChangeEnd: {endValue}</div>
            <Slider.Root
                value={value}
                onValueChange={(e: SliderRootChangeEvent) => setValue(e.value as number)}
                onValueChangeEnd={(e: SliderRootChangeEvent) => setEndValue(e.value as number)}
                className="w-full"
            >
                <Slider.Track>
                    <Slider.Range />
                </Slider.Track>
                <Slider.Thumb />
            </Slider.Root>
        </div>
    );
}
