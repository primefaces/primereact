'use client';

import { ColorPicker, ColorPickerArea, ColorPickerEyeDropper, ColorPickerInput, ColorPickerSlider, ColorPickerSwatch } from '@/ui/colorpicker';
import type { ColorSpace } from '@primereact/types/shared/colorpicker';
import * as React from 'react';

export default function AdvancedDemo() {
    const [format, setFormat] = React.useState<ColorSpace>('hsla');

    return (
        <div>
            <div className="max-w-md space-y-4">
                <select value={format} onChange={(e) => setFormat(e.target.value as ColorSpace)}>
                    <option value="rgba">RGBA</option>
                    <option value="hsba">HSBA</option>
                    <option value="hsla">HSLA</option>
                    <option value="oklcha">OKLCHA</option>
                </select>
                <ColorPicker format={format}>
                    <ColorPickerArea />
                    <ColorPickerSlider />
                    {format === 'rgba' && (
                        <>
                            <ColorPickerSlider channel="red" />
                            <ColorPickerSlider channel="green" />
                            <ColorPickerSlider channel="blue" />
                        </>
                    )}
                    {format === 'hsba' && (
                        <>
                            <ColorPickerSlider channel="saturation" />
                            <ColorPickerSlider channel="brightness" />
                        </>
                    )}

                    {format === 'hsla' && (
                        <>
                            <ColorPickerSlider channel="saturation" />
                            <ColorPickerSlider channel="lightness" />
                        </>
                    )}

                    <ColorPickerSlider channel="alpha" />
                    <div className="flex gap-2">
                        <ColorPickerSwatch />
                        <ColorPickerEyeDropper />
                        <div className="flex-1">
                            <ColorPickerInput fluid channel="hex" />
                        </div>
                    </div>
                    <div className="grid grid-cols-5 gap-2 items-center">
                        <span>RGBA</span>
                        <ColorPickerInput fluid channel="red" />
                        <ColorPickerInput fluid channel="green" />
                        <ColorPickerInput fluid channel="blue" />
                        <ColorPickerInput fluid channel="alpha" />

                        <span>HSBA</span>
                        <ColorPickerInput fluid channel="hue" />
                        <ColorPickerInput fluid channel="saturation" />
                        <ColorPickerInput fluid channel="brightness" />
                        <ColorPickerInput fluid channel="alpha" />

                        <span>HSLA</span>
                        <ColorPickerInput fluid channel="hue" />
                        <ColorPickerInput fluid channel="saturation" />
                        <ColorPickerInput fluid channel="lightness" />
                        <ColorPickerInput fluid channel="alpha" />

                        <span>OKLCHA</span>
                        <ColorPickerInput fluid channel="L" />
                        <ColorPickerInput fluid channel="C" />
                        <ColorPickerInput fluid channel="H" />
                        <ColorPickerInput fluid channel="alpha" />
                    </div>
                    <div className="flex gap-2">
                        <ColorPickerInput fluid channel="css" />
                    </div>
                </ColorPicker>
            </div>
        </div>
    );
}
