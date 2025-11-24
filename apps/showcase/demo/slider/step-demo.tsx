'use client';

import { Slider } from 'primereact/slider';

export default function StepDemo() {
    return (
        <div className="flex justify-center">
            <Slider defaultValue={20} step={20} className="w-56">
                <Slider.Range />
                <Slider.Thumb />
            </Slider>
        </div>
    );
}
