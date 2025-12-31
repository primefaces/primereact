'use client';

import { ColorPicker, ColorPickerArea, ColorPickerEyeDropper, ColorPickerInput, ColorPickerSlider, ColorPickerSwatch } from '@/ui/colorpicker';
import type { ColorSpace } from '@primereact/types/shared/colorpicker';
import * as React from 'react';

export default function Example() {
    const [format, setFormat] = React.useState<ColorSpace | 'hex'>('hex');

    return (
        <div>
            <div className="max-w-sm space-y-4">
                <ColorPicker format={format === 'hex' ? 'rgba' : format}>
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
                            <option value="oklcha">OKLCHA</option>
                        </select>
                        <div className="flex gap-2 flex-1">
                            {format === 'hex' && <ColorPickerInput fluid channel="hex" />}
                            {format === 'oklcha' && <ColorPickerInput fluid channel="css" />}
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
                            <ColorPickerInput fluid channel="alpha" className="max-w-20" />
                        </div>
                    </div>
                </ColorPicker>
            </div>
        </div>
    );
}
