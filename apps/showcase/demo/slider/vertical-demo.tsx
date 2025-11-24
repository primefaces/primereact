'use client';

import { Slider } from 'primereact/slider';

export default function VerticalDemo() {
    return (
        <div className="flex justify-center">
            <Slider defaultValue={50} orientation="vertical" className="h-56">
                <Slider.Range />
                <Slider.Thumb />
            </Slider>
        </div>
    );
}
