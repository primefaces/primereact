import { RadioButton } from 'primereact/radiobutton';

export default function DisabledDemo() {
    return (
        <div className="card flex justify-center">
            <RadioButton.Group className="flex items-center gap-2" value="2">
                <RadioButton disabled />
                <RadioButton value="2" disabled />
            </RadioButton.Group>
        </div>
    );
}
