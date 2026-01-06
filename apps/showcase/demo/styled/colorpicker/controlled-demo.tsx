'use client';

import { parseColor } from '@primereact/headless/colorpicker';
import type { ColorInstance, ColorSpace } from '@primereact/types/shared/colorpicker';
import { useColorPickerChangeEvent } from '@primereact/types/shared/colorpicker';
import { ColorPicker } from 'primereact/colorpicker';
import * as React from 'react';

export default function ControlledDemo() {
    const [format, setFormat] = React.useState<ColorSpace | 'hex'>('hex');
    const [value, setValue] = React.useState<ColorInstance>(parseColor('#000000').toFormat(format === 'hex' ? 'rgba' : format));

    return (
        <div>
            <div className="max-w-sm space-y-4">
                <ColorPicker.Root
                    format={format === 'hex' ? 'rgba' : format}
                    onValueChange={(e: useColorPickerChangeEvent) => {
                        setValue(e.value);
                    }}
                    value={value}
                >
                    <ColorPicker.Area />
                    <div className="flex items-center gap-4">
                        <div className="flex-1 space-y-1">
                            <ColorPicker.Slider />
                            <ColorPicker.Slider channel="alpha" />
                        </div>
                        <div className="flex items-center gap-2">
                            <ColorPicker.Swatch />
                            <ColorPicker.EyeDropper />
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
                            {format === 'hex' && <ColorPicker.Input fluid channel="hex" />}
                            {format === 'rgba' && (
                                <>
                                    <ColorPicker.Input fluid channel="red" />
                                    <ColorPicker.Input fluid channel="green" />
                                    <ColorPicker.Input fluid channel="blue" />
                                </>
                            )}
                            {format === 'hsba' && (
                                <>
                                    <ColorPicker.Input fluid channel="hue" />
                                    <ColorPicker.Input fluid channel="saturation" />
                                    <ColorPicker.Input fluid channel="brightness" />
                                </>
                            )}
                            {format === 'hsla' && (
                                <>
                                    <ColorPicker.Input fluid channel="hue" />
                                    <ColorPicker.Input fluid channel="saturation" />
                                    <ColorPicker.Input fluid channel="lightness" />
                                </>
                            )}
                            <ColorPicker.Input fluid channel="alpha" />
                        </div>
                    </div>
                </ColorPicker.Root>
            </div>
        </div>
    );
}
