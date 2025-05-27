import { ToggleButton } from 'primereact/togglebutton';

export default function MultipleDemo() {
    return (
        <div className="card flex items-center justify-center">
            <ToggleButton.Group multiple>
                <ToggleButton value="bold">
                    <ToggleButton.Indicator>Bold</ToggleButton.Indicator>
                </ToggleButton>
                <ToggleButton value="italic">
                    <ToggleButton.Indicator>Italic</ToggleButton.Indicator>
                </ToggleButton>
                <ToggleButton value="underline">
                    <ToggleButton.Indicator>Underline</ToggleButton.Indicator>
                </ToggleButton>
            </ToggleButton.Group>
        </div>
    );
}
