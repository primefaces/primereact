import { RadioButton } from '@primereact/ui/radiobutton';
import { RadioButtonGroup } from '@primereact/ui/radiobuttongroup';

export default function RadioButtonPT() {
    return (
        <RadioButtonGroup>
            <RadioButton.Root>
                <RadioButton.Box>
                    <RadioButton.Indicator />
                </RadioButton.Box>
            </RadioButton.Root>
        </RadioButtonGroup>
    );
}
