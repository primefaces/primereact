'use client';

import { ColorPicker } from 'primereact/colorpicker';
import { Popover } from 'primereact/popover';

function PopoverDemo() {
    return (
        <div>
            <ColorPicker defaultColor="#0099ff">
                <Popover>
                    <Popover.Trigger unstyled>
                        <ColorPicker.Swatch />
                    </Popover.Trigger>
                    <Popover.Portal>
                        <Popover.Content className="min-w-72 w-full">
                            <div className="w-full space-y-3">
                                <ColorPicker.Area />
                                <div className="flex items-center gap-4">
                                    <div className="flex-1 space-y-1">
                                        <ColorPicker.Slider />
                                        <ColorPicker.Slider channel="alpha" />
                                    </div>
                                    <ColorPicker.EyeDropper />
                                </div>
                                <ColorPicker.Input fluid channel="hex" />
                            </div>
                        </Popover.Content>
                    </Popover.Portal>
                </Popover>
            </ColorPicker>
        </div>
    );
}

export default PopoverDemo;
