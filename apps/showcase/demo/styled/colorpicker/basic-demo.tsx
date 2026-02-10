'use client';
import { ChevronDown } from '@primeicons/react';
import { parseColor } from '@primereact/headless/colorpicker';
import { EyeDropperIcon } from '@primereact/icons';
import type { ColorSpace } from '@primereact/types/shared/colorpicker';
import type { SelectValueChangeEvent } from '@primereact/types/shared/select';
import { ColorPicker } from '@primereact/ui/colorpicker';
import { InputGroup } from '@primereact/ui/inputgroup';
import { Select } from '@primereact/ui/select';
import * as React from 'react';

const options = [
    { label: 'HEX', value: 'hex' },
    { label: 'RGBA', value: 'rgba' },
    { label: 'HSBA', value: 'hsba' },
    { label: 'HSLA', value: 'hsla' },
    { label: 'OKLCHA', value: 'oklcha' }
];

export default function Example() {
    const [format, setFormat] = React.useState<ColorSpace | 'hex'>('hex');

    return (
        <div className="max-w-xs mx-auto space-y-3">
            <ColorPicker.Root format={format === 'hex' ? 'rgba' : format} defaultValue={parseColor('#276def')}>
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
                <div className="flex items-center gap-2">
                    <Select.Root
                        value={format}
                        onValueChange={(e: SelectValueChangeEvent) => setFormat(e.value as ColorSpace | 'hex')}
                        options={options}
                        optionLabel="label"
                        optionValue="value"
                        className="w-full md:w-26"
                    >
                        <Select.Trigger>
                            <Select.Value placeholder="Select a format" />
                            <Select.Icon>
                                <ChevronDown />
                            </Select.Icon>
                        </Select.Trigger>
                        <Select.Portal>
                            <Select.Positioner>
                                <Select.Panel>
                                    <Select.List>
                                        <Select.Options style={{ maxHeight: '14rem' }} />
                                    </Select.List>
                                </Select.Panel>
                            </Select.Positioner>
                        </Select.Portal>
                    </Select.Root>
                    <div className="flex-1">
                        {format === 'hex' && <ColorPicker.Input fluid channel="hex" />}
                        {format === 'oklcha' && <ColorPicker.Input fluid channel="css" />}
                        {format === 'rgba' && (
                            <InputGroup.Root>
                                <ColorPicker.Input fluid channel="red" />
                                <ColorPicker.Input fluid channel="green" />
                                <ColorPicker.Input fluid channel="blue" />
                                <ColorPicker.Input fluid channel="alpha" />
                            </InputGroup.Root>
                        )}
                        {format === 'hsba' && (
                            <InputGroup.Root>
                                <ColorPicker.Input fluid channel="hue" />
                                <ColorPicker.Input fluid channel="saturation" />
                                <ColorPicker.Input fluid channel="brightness" />
                                <ColorPicker.Input fluid channel="alpha" />
                            </InputGroup.Root>
                        )}
                        {format === 'hsla' && (
                            <InputGroup.Root>
                                <ColorPicker.Input fluid channel="hue" />
                                <ColorPicker.Input fluid channel="saturation" />
                                <ColorPicker.Input fluid channel="lightness" />
                                <ColorPicker.Input fluid channel="alpha" />
                            </InputGroup.Root>
                        )}
                    </div>
                </div>
            </ColorPicker.Root>
        </div>
    );
}
