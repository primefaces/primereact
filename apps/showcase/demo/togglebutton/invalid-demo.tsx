import { ToggleButton } from 'primereact/togglebutton';

export default function InvalidDemo() {
    return (
        <div className="card flex items-center justify-center">
            <ToggleButton invalid>
                <ToggleButton.Indicator>Invalid</ToggleButton.Indicator>
            </ToggleButton>
        </div>
    );
}
