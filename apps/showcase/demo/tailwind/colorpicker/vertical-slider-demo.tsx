'use client';

import { ColorPicker, ColorPickerArea, ColorPickerSlider } from '@/ui/colorpicker';

function VerticalSliderDemo() {
    return (
        <div>
            <ColorPicker format="hsba">
                <div className="flex gap-4">
                    <ColorPickerArea className="max-w-xs flex-1" />
                    <ColorPickerSlider orientation="vertical" className="h-auto" />
                    <ColorPickerSlider channel="saturation" orientation="vertical" />
                    <ColorPickerSlider channel="brightness" orientation="vertical" />
                    <ColorPickerSlider channel="alpha" orientation="vertical" />
                </div>
            </ColorPicker>
        </div>
    );
}

export default VerticalSliderDemo;
