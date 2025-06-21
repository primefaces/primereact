import { ToggleButton } from 'primereact/togglebutton';

export default function DisabledGroupDemo() {
    return (
        <div className="card flex items-center gap-4 justify-center">
            <ToggleButton.Group disabled>
                <ToggleButton value="off">
                    <ToggleButton.Indicator>Off</ToggleButton.Indicator>
                </ToggleButton>
                <ToggleButton value="on">
                    <ToggleButton.Indicator>On</ToggleButton.Indicator>
                </ToggleButton>
            </ToggleButton.Group>
            <ToggleButton.Group>
                <ToggleButton value="option1">
                    <ToggleButton.Indicator>Option 1</ToggleButton.Indicator>
                </ToggleButton>
                <ToggleButton value="option2" disabled>
                    <ToggleButton.Indicator>Option 2</ToggleButton.Indicator>
                </ToggleButton>
            </ToggleButton.Group>
        </div>
    );
}
