'use client';
import type { ColorSpace } from '@primereact/types/shared/colorpicker';
import { ColorPicker } from 'primereact/colorpicker';
import * as React from 'react';

export default function BasicDemo() {
    const [format, setFormat] = React.useState<ColorSpace | 'hex'>('hex');

    return (
        <div className="card">
            <div className="max-w-sm space-y-4">
                <ColorPicker format={format === 'hex' ? 'rgba' : format}>
                    <ColorPicker.Area />
                    <div className="flex items-center gap-4">
                        <div className="flex-1 space-y-1">
                            <ColorPicker.Slider disabled />
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
                </ColorPicker>
            </div>
        </div>
    );
}
