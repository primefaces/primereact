'use client';

import { Slider } from 'primereact/slider';

export default function SliderPTDemo() {
    return (
        <Slider defaultValue={50} className="w-56">
            <Slider.Range />
            <Slider.Thumb />
        </Slider>
    );
}
