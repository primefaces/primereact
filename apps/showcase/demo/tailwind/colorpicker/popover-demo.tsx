import {
    ColorPicker,
    ColorPickerArea,
    ColorPickerEyeDropper,
    ColorPickerInput,
    ColorPickerSlider,
    ColorPickerSwatch
} from '@/components/ui/colorpicker';
import { Popover } from 'primereact/popover';

function PopoverDemo() {
    return (
        <div>
            <ColorPicker defaultColor="#0099ff">
                <Popover.Root>
                    <Popover.Trigger unstyled>
                        <ColorPickerSwatch />
                    </Popover.Trigger>
                    <Popover.Portal>
                        <Popover.Content className="min-w-72 w-full">
                            <div className="w-full space-y-3">
                                <ColorPickerArea />
                                <div className="flex items-center gap-4">
                                    <div className="flex-1 space-y-1">
                                        <ColorPickerSlider />
                                        <ColorPickerSlider channel="alpha" />
                                    </div>
                                    <ColorPickerEyeDropper />
                                </div>
                                <ColorPickerInput fluid channel="hex" />
                            </div>
                        </Popover.Content>
                    </Popover.Portal>
                </Popover.Root>
            </ColorPicker>
        </div>
    );
}

export default PopoverDemo;
