'use client';
import { ChevronDown } from '@primeicons/react';
import { EyeDropperIcon } from '@primereact/icons';
import type { ColorSpace } from '@primereact/types/shared/colorpicker';
import { SelectValueChangeEvent } from '@primereact/types/shared/select';
import { ColorPicker } from '@primereact/ui/colorpicker';
import { FloatLabel } from '@primereact/ui/floatlabel';
import { InputGroup } from '@primereact/ui/inputgroup';
import { Label } from '@primereact/ui/label';
import { Select } from '@primereact/ui/select';
import * as React from 'react';

const options = [
    { label: 'RGBA', value: 'rgba' },
    { label: 'HSBA', value: 'hsba' },
    { label: 'HSLA', value: 'hsla' },
    { label: 'OKLCHA', value: 'oklcha' }
];

export default function AdvancedDemo() {
    const [format, setFormat] = React.useState<ColorSpace>('hsla');

    return (
        <div>
            <div className="max-w-xs mx-auto space-y-3">
                <Select.Root
                    value={format}
                    onValueChange={(e: SelectValueChangeEvent) => setFormat(e.value as ColorSpace)}
                    options={options}
                    optionLabel="label"
                    optionValue="value"
                    fluid
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
                <ColorPicker.Root format={format}>
                    <ColorPicker.Area>
                        <ColorPicker.AreaBackground />
                        <ColorPicker.AreaThumb />
                    </ColorPicker.Area>
                    <ColorPicker.Slider>
                        <ColorPicker.TransparencyGrid />
                        <ColorPicker.SliderTrack />
                        <ColorPicker.SliderThumb />
                    </ColorPicker.Slider>
                    {format === 'rgba' && (
                        <>
                            <ColorPicker.Slider channel="red">
                                <ColorPicker.TransparencyGrid />
                                <ColorPicker.SliderTrack />
                                <ColorPicker.SliderThumb />
                            </ColorPicker.Slider>
                            <ColorPicker.Slider channel="green">
                                <ColorPicker.TransparencyGrid />
                                <ColorPicker.SliderTrack />
                                <ColorPicker.SliderThumb />
                            </ColorPicker.Slider>
                            <ColorPicker.Slider channel="blue">
                                <ColorPicker.TransparencyGrid />
                                <ColorPicker.SliderTrack />
                                <ColorPicker.SliderThumb />
                            </ColorPicker.Slider>
                        </>
                    )}
                    {format === 'hsba' && (
                        <>
                            <ColorPicker.Slider channel="saturation">
                                <ColorPicker.TransparencyGrid />
                                <ColorPicker.SliderTrack />
                                <ColorPicker.SliderThumb />
                            </ColorPicker.Slider>
                            <ColorPicker.Slider channel="brightness">
                                <ColorPicker.TransparencyGrid />
                                <ColorPicker.SliderTrack />
                                <ColorPicker.SliderThumb />
                            </ColorPicker.Slider>
                        </>
                    )}

                    {format === 'hsla' && (
                        <>
                            <ColorPicker.Slider channel="saturation">
                                <ColorPicker.TransparencyGrid />
                                <ColorPicker.SliderTrack />
                                <ColorPicker.SliderThumb />
                            </ColorPicker.Slider>
                            <ColorPicker.Slider channel="lightness">
                                <ColorPicker.TransparencyGrid />
                                <ColorPicker.SliderTrack />
                                <ColorPicker.SliderThumb />
                            </ColorPicker.Slider>
                        </>
                    )}

                    <ColorPicker.Slider channel="alpha">
                        <ColorPicker.TransparencyGrid />
                        <ColorPicker.SliderTrack />
                        <ColorPicker.SliderThumb />
                    </ColorPicker.Slider>
                    <div className="flex gap-2">
                        <ColorPicker.Swatch>
                            <ColorPicker.TransparencyGrid />
                            <ColorPicker.SwatchBackground />
                        </ColorPicker.Swatch>
                        <ColorPicker.EyeDropper iconOnly severity="secondary" variant="outlined">
                            <EyeDropperIcon />
                        </ColorPicker.EyeDropper>
                        <ColorPicker.Input channel="hex" className="flex-1" />
                    </div>
                    <InputGroup.Root>
                        <FloatLabel variant="in">
                            <ColorPicker.Input channel="red" type="text" size="small" />
                            <Label htmlFor="in_label">Red</Label>
                        </FloatLabel>
                        <FloatLabel variant="in">
                            <ColorPicker.Input channel="green" type="text" size="small" />
                            <Label htmlFor="in_label">Green</Label>
                        </FloatLabel>
                        <FloatLabel variant="in">
                            <ColorPicker.Input channel="blue" type="text" size="small" />
                            <Label htmlFor="in_label">Blue</Label>
                        </FloatLabel>
                        <FloatLabel variant="in">
                            <ColorPicker.Input channel="alpha" type="text" size="small" />
                            <Label htmlFor="in_label">Alpha</Label>
                        </FloatLabel>
                    </InputGroup.Root>
                    <InputGroup.Root>
                        <FloatLabel variant="in">
                            <ColorPicker.Input channel="hue" type="text" size="small" />
                            <Label htmlFor="in_label">Hue</Label>
                        </FloatLabel>
                        <FloatLabel variant="in">
                            <ColorPicker.Input channel="saturation" type="text" size="small" />
                            <Label htmlFor="in_label">Saturation</Label>
                        </FloatLabel>
                        <FloatLabel variant="in">
                            <ColorPicker.Input channel="brightness" type="text" size="small" />
                            <Label htmlFor="in_label">Brightness</Label>
                        </FloatLabel>
                        <FloatLabel variant="in">
                            <ColorPicker.Input channel="alpha" type="text" size="small" />
                            <Label htmlFor="in_label">Alpha</Label>
                        </FloatLabel>
                    </InputGroup.Root>
                    <InputGroup.Root>
                        <FloatLabel variant="in">
                            <ColorPicker.Input channel="hue" type="text" size="small" />
                            <Label htmlFor="in_label">Hue</Label>
                        </FloatLabel>
                        <FloatLabel variant="in">
                            <ColorPicker.Input channel="saturation" type="text" size="small" />
                            <Label htmlFor="in_label">Saturation</Label>
                        </FloatLabel>
                        <FloatLabel variant="in">
                            <ColorPicker.Input channel="lightness" type="text" size="small" />
                            <Label htmlFor="in_label">Lightness</Label>
                        </FloatLabel>
                        <FloatLabel variant="in">
                            <ColorPicker.Input channel="alpha" type="text" size="small" />
                            <Label htmlFor="in_label">Alpha</Label>
                        </FloatLabel>
                    </InputGroup.Root>
                    <InputGroup.Root>
                        <FloatLabel variant="in">
                            <ColorPicker.Input channel="L" type="text" size="small" />
                            <Label htmlFor="in_label">Lightness</Label>
                        </FloatLabel>
                        <FloatLabel variant="in">
                            <ColorPicker.Input channel="C" type="text" size="small" />
                            <Label htmlFor="in_label">Chroma</Label>
                        </FloatLabel>
                        <FloatLabel variant="in">
                            <ColorPicker.Input channel="H" type="text" size="small" />
                            <Label htmlFor="in_label">Hue</Label>
                        </FloatLabel>
                        <FloatLabel variant="in">
                            <ColorPicker.Input channel="alpha" type="text" size="small" />
                            <Label htmlFor="in_label">Alpha</Label>
                        </FloatLabel>
                    </InputGroup.Root>

                    <InputGroup.Root>
                        <InputGroup.Addon>CSS</InputGroup.Addon>
                        <ColorPicker.Input channel="css" type="text" fluid />
                    </InputGroup.Root>
                </ColorPicker.Root>
            </div>
        </div>
    );
}
