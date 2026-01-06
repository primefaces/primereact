'use client';

import { Slider } from 'primereact/slider';

export default function BasicDemo() {
    return (
        <div className="flex justify-center">
            <Slider.Root defaultValue={50} className="w-56">
                <Slider.Range />
                <Slider.Thumb />
            </Slider.Root>
        </div>
    );
}
