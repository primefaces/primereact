import { ToggleButton } from 'primereact/togglebutton';

export default function InvalidGroupDemo() {
    return (
        <div className="card flex items-center justify-center">
            <ToggleButton.Group invalid>
                <ToggleButton value="monthly">
                    <ToggleButton.Indicator>Monthly</ToggleButton.Indicator>
                </ToggleButton>
                <ToggleButton value="yearly">
                    <ToggleButton.Indicator>Yearly</ToggleButton.Indicator>
                </ToggleButton>
            </ToggleButton.Group>
        </div>
    );
}
