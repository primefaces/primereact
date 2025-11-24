'use client';

import { Slider } from 'primereact/slider';

export default function RangeDemo() {
    return (
        <div className="flex justify-center">
            <Slider defaultValue={[20, 80]} className="w-56">
                <Slider.Range />
                <Slider.Thumb />
                <Slider.Thumb />
            </Slider>
        </div>
    );
}
