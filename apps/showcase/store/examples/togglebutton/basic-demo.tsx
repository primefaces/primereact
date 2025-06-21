import { ToggleButton } from 'primereact/togglebutton';

export default function BasicDemo() {
    return (
        <div className="card flex items-center justify-center">
            <ToggleButton>
                <ToggleButton.Indicator>Bold</ToggleButton.Indicator>
            </ToggleButton>
        </div>
    );
}
