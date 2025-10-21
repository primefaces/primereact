import { SliderChangeEvent } from '@primereact/types/shared/slider';
import { InputText } from 'primereact/inputtext';
import { Slider } from 'primereact/slider';
import * as React from 'react';

export default function InputDemo() {
    const [value, setValue] = React.useState(50);

    return (
        <div className="card flex justify-center">
            <div className="w-56">
                <InputText
                    value={value}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(Number(e.target.value))}
                    fluid
                    className="mb-4"
                />
                <Slider value={value} onValueChange={(e: SliderChangeEvent) => setValue(e.value as number)} className="w-full">
                    <Slider.Range />
                    <Slider.Thumb />
                </Slider>
            </div>
        </div>
    );
}
