'use client';

import { ColorPicker } from 'primereact/colorpicker';

function VerticalSliderDemo() {
    return (
        <div>
            <ColorPicker.Root format="hsba">
                <div className="flex gap-4">
                    <ColorPicker.Area className="max-w-xs flex-1" />
                    <ColorPicker.Slider orientation="vertical" className="h-auto" />
                    <ColorPicker.Slider channel="saturation" orientation="vertical" />
                    <ColorPicker.Slider channel="brightness" orientation="vertical" />
                    <ColorPicker.Slider channel="alpha" orientation="vertical" />
                </div>
            </ColorPicker.Root>
        </div>
    );
}

export default VerticalSliderDemo;
