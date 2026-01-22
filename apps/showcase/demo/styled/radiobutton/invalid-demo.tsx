import { RadioButton } from '@primereact/ui/radiobutton';

export default function InvalidDemo() {
    return (
        <div className="flex justify-center">
            <RadioButton.Root invalid>
                <RadioButton.Box>
                    <RadioButton.Indicator />
                </RadioButton.Box>
            </RadioButton.Root>
        </div>
    );
}
