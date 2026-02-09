import { EyeDropperIcon } from '@primereact/icons';
import { ColorPicker } from '@primereact/ui/colorpicker';
import { Popover } from '@primereact/ui/popover';

function PopoverDemo() {
    return (
        <div className="flex items-center justify-center">
            <ColorPicker.Root defaultColor="#0099ff">
                <Popover.Root>
                    <Popover.Trigger>
                        <ColorPicker.Swatch>
                            <ColorPicker.TransparencyGrid />
                            <ColorPicker.SwatchBackground />
                        </ColorPicker.Swatch>
                    </Popover.Trigger>
                    <Popover.Portal>
                        <Popover.Positioner sideOffset={12} side="left" align="start">
                            <Popover.Content className="w-72 p-3 space-y-3">
                                <Popover.Arrow />
                                <ColorPicker.Area>
                                    <ColorPicker.AreaBackground />
                                    <ColorPicker.AreaThumb />
                                </ColorPicker.Area>
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
                                <div className="flex items-center gap-2">
                                    <ColorPicker.Input channel="hex" className="flex-1" />
                                    <ColorPicker.EyeDropper iconOnly severity="secondary" variant="outlined">
                                        <EyeDropperIcon />
                                    </ColorPicker.EyeDropper>
                                </div>
                            </Popover.Content>
                        </Popover.Positioner>
                    </Popover.Portal>
                </Popover.Root>
            </ColorPicker.Root>
        </div>
    );
}

export default PopoverDemo;
