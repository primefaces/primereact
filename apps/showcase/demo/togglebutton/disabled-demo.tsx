import { ToggleButton } from 'primereact/togglebutton';

export default function DisabledDemo() {
    return (
        <div className="card flex items-center justify-center">
            <ToggleButton disabled>
                <ToggleButton.Indicator>Disabled</ToggleButton.Indicator>
            </ToggleButton>
        </div>
    );
}
