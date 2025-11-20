'use client';
import type { ColorSpace } from '@primereact/types/shared/colorpicker';
import { ColorPicker } from 'primereact/colorpicker';
import * as React from 'react';

export default function AdvancedDemo() {
    const [format, setFormat] = React.useState<ColorSpace>('hsla');

    return (
        <div className="card">
            <div className="max-w-md space-y-4">
                <select value={format} onChange={(e) => setFormat(e.target.value as ColorSpace)}>
                    <option value="rgba">RGBA</option>
                    <option value="hsba">HSBA</option>
                    <option value="hsla">HSLA</option>
                    <option value="oklcha">OKLCHA</option>
                </select>
                <ColorPicker format={format}>
                    <ColorPicker.Area />
                    <ColorPicker.Slider />
                    {format === 'rgba' && (
                        <>
                            <ColorPicker.Slider channel="red" />
                            <ColorPicker.Slider channel="green" />
                            <ColorPicker.Slider channel="blue" />
                        </>
                    )}
                    {format === 'hsba' && (
                        <>
                            <ColorPicker.Slider channel="saturation" />
                            <ColorPicker.Slider channel="brightness" />
                        </>
                    )}

                    {format === 'hsla' && (
                        <>
                            <ColorPicker.Slider channel="saturation" />
                            <ColorPicker.Slider channel="lightness" />
                        </>
                    )}

                    <ColorPicker.Slider channel="alpha" />
                    <div className="flex gap-2">
                        <ColorPicker.Swatch />
                        <ColorPicker.EyeDropper />
                        <div className="flex-1">
                            <ColorPicker.Input fluid channel="hex" />
                        </div>
                    </div>
                    <div className="grid grid-cols-5 gap-2 items-center">
                        <span>RGBA</span>
                        <ColorPicker.Input fluid channel="red" />
                        <ColorPicker.Input fluid channel="green" />
                        <ColorPicker.Input fluid channel="blue" />
                        <ColorPicker.Input fluid channel="alpha" />

                        <span>HSBA</span>
                        <ColorPicker.Input fluid channel="hue" />
                        <ColorPicker.Input fluid channel="saturation" />
                        <ColorPicker.Input fluid channel="brightness" />
                        <ColorPicker.Input fluid channel="alpha" />

                        <span>HSLA</span>
                        <ColorPicker.Input fluid channel="hue" />
                        <ColorPicker.Input fluid channel="saturation" />
                        <ColorPicker.Input fluid channel="lightness" />
                        <ColorPicker.Input fluid channel="alpha" />

                        <span>OKLCHA</span>
                        <ColorPicker.Input fluid channel="L" />
                        <ColorPicker.Input fluid channel="C" />
                        <ColorPicker.Input fluid channel="H" />
                        <ColorPicker.Input fluid channel="alpha" />
                    </div>
                    <div className="flex gap-2">
                        <ColorPicker.Input fluid channel="css" />
                    </div>
                </ColorPicker>
            </div>
        </div>
    );
}
