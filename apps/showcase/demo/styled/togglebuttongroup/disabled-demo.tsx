import { ToggleButton } from '@primereact/ui/togglebutton';
import { ToggleButtonGroup } from '@primereact/ui/togglebuttongroup';

export default function DisabledDemo() {
    return (
        <div className="flex items-center gap-4 justify-center">
            <ToggleButtonGroup disabled>
                <ToggleButton.Root value="off">
                    <ToggleButton.Indicator>Off</ToggleButton.Indicator>
                </ToggleButton.Root>
                <ToggleButton.Root value="on">
                    <ToggleButton.Indicator>On</ToggleButton.Indicator>
                </ToggleButton.Root>
            </ToggleButtonGroup>
            <ToggleButtonGroup>
                <ToggleButton.Root value="option1">
                    <ToggleButton.Indicator>Option 1</ToggleButton.Indicator>
                </ToggleButton.Root>
                <ToggleButton.Root value="option2" disabled>
                    <ToggleButton.Indicator>Option 2</ToggleButton.Indicator>
                </ToggleButton.Root>
            </ToggleButtonGroup>
        </div>
    );
}
