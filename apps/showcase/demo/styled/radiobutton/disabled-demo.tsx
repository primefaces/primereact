import { RadioButtonGroup } from '@primereact/ui/radiobuttongroup';
import { RadioButton } from '@primereact/ui/radiobutton';

export default function DisabledDemo() {
    return (
        <div className="flex justify-center">
            <RadioButtonGroup className="flex items-center gap-2" value="2">
                <RadioButton.Root disabled>
                    <RadioButton.Box>
                        <RadioButton.Indicator />
                    </RadioButton.Box>
                </RadioButton.Root>
                <RadioButton.Root value="2" disabled>
                    <RadioButton.Box>
                        <RadioButton.Indicator />
                    </RadioButton.Box>
                </RadioButton.Root>
            </RadioButtonGroup>
        </div>
    );
}
