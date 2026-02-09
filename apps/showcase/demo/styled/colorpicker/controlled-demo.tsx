'use client';
import { parseColor } from '@primereact/headless/colorpicker';
import { EyeDropperIcon } from '@primereact/icons';
import type { ColorInstance } from '@primereact/types/shared/colorpicker';
import { useColorPickerChangeEvent } from '@primereact/types/shared/colorpicker';
import { ColorPicker } from '@primereact/ui/colorpicker';
import * as React from 'react';

export default function ControlledDemo() {
    const [value, setValue] = React.useState<ColorInstance>(parseColor('#000000'));
    const [endValue, setEndValue] = React.useState<ColorInstance>(parseColor('#000000'));

    return (
        <div className="max-w-xs mx-auto space-y-3">
            <div className="text-center font-mono text-sm text-surface-500 mb-4">onValueChange: {value.toString('hex')}</div>
            <div className="text-center font-mono text-sm text-surface-500 mb-4">onValueChangeEnd: {endValue.toString('hex')}</div>
            <ColorPicker.Root
                value={value}
                onValueChange={(e: useColorPickerChangeEvent) => setValue(e.value)}
                onValueChangeEnd={(e: useColorPickerChangeEvent) => setEndValue(e.value)}
            >
                <ColorPicker.Area>
                    <ColorPicker.AreaBackground />
                    <ColorPicker.AreaThumb />
                </ColorPicker.Area>
                <div className="flex items-center gap-2">
                    <div className="flex-1 space-y-1 mr-1">
                        <ColorPicker.Slider>
                            <ColorPicker.TransparencyGrid />
                            <ColorPicker.SliderTrack />
                            <ColorPicker.SliderThumb />
                        </ColorPicker.Slider>
                        <ColorPicker.Slider channel="alpha">
                            <ColorPicker.TransparencyGrid />
                            <ColorPicker.SliderTrack />
                            <ColorPicker.SliderThumb />
                        </ColorPicker.Slider>
                    </div>
                    <ColorPicker.Swatch>
                        <ColorPicker.TransparencyGrid />
                        <ColorPicker.SwatchBackground />
                    </ColorPicker.Swatch>
                    <ColorPicker.EyeDropper iconOnly severity="secondary" variant="outlined">
                        <EyeDropperIcon />
                    </ColorPicker.EyeDropper>
                </div>
                <ColorPicker.Input fluid channel="hex" />
            </ColorPicker.Root>
        </div>
    );
}
