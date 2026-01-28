'use client';
import {
    ColorPicker,
    ColorPickerArea,
    ColorPickerEyeDropper,
    ColorPickerInput,
    ColorPickerSlider,
    ColorPickerSwatch
} from '@/components/ui/colorpicker';
import { parseColor } from '@primereact/headless/colorpicker';
import type { ColorInstance, ColorSpace } from '@primereact/types/shared/colorpicker';
import { useColorPickerChangeEvent } from '@primereact/types/shared/colorpicker';
import * as React from 'react';

export default function ControlledDemo() {
    const [format, setFormat] = React.useState<ColorSpace | 'hex'>('hex');
    const [value, setValue] = React.useState<ColorInstance>(parseColor('#000000').toFormat(format === 'hex' ? 'rgba' : format));

    return (
        <div>
            <div className="max-w-sm space-y-4">
                <ColorPicker
                    format={format === 'hex' ? 'rgba' : format}
                    onValueChange={(e: useColorPickerChangeEvent) => {
                        setValue(e.value);
                    }}
                    value={value}
                >
                    <ColorPickerArea />
                    <div className="flex items-center gap-4">
                        <div className="flex-1 space-y-1">
                            <ColorPickerSlider />
                            <ColorPickerSlider channel="alpha" />
                        </div>
                        <div className="flex items-center gap-2">
                            <ColorPickerSwatch />
                            <ColorPickerEyeDropper />
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <select value={format} onChange={(e) => setFormat(e.target.value as ColorSpace)}>
                            <option value="hex">HEX</option>
                            <option value="rgba">RGBA</option>
                            <option value="hsba">HSBA</option>
                            <option value="hsla">HSLA</option>
                        </select>
                        <div className="flex gap-2 flex-1">
                            {format === 'hex' && <ColorPickerInput fluid channel="hex" />}
                            {format === 'rgba' && (
                                <>
                                    <ColorPickerInput fluid channel="red" />
                                    <ColorPickerInput fluid channel="green" />
                                    <ColorPickerInput fluid channel="blue" />
                                </>
                            )}
                            {format === 'hsba' && (
                                <>
                                    <ColorPickerInput fluid channel="hue" />
                                    <ColorPickerInput fluid channel="saturation" />
                                    <ColorPickerInput fluid channel="brightness" />
                                </>
                            )}
                            {format === 'hsla' && (
                                <>
                                    <ColorPickerInput fluid channel="hue" />
                                    <ColorPickerInput fluid channel="saturation" />
                                    <ColorPickerInput fluid channel="lightness" />
                                </>
                            )}
                            <ColorPickerInput fluid channel="alpha" />
                        </div>
                    </div>
                </ColorPicker>
            </div>
        </div>
    );
}
