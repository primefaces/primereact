import { RadioButton, RadioButtonGroup } from '@/components/ui/radiobutton';

export default function DisabledDemo() {
    return (
        <div className="flex justify-center">
            <RadioButtonGroup value="2">
                <RadioButton disabled />
                <RadioButton value="2" disabled />
            </RadioButtonGroup>
        </div>
    );
}
