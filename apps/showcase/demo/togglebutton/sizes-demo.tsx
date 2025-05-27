import { ToggleButton } from 'primereact/togglebutton';

export default function SizesDemo() {
    return (
        <div className="card flex flex-col gap-2 items-center justify-center">
            <ToggleButton size="small" className="min-w-16">
                <ToggleButton.Indicator>Small</ToggleButton.Indicator>
            </ToggleButton>
            <ToggleButton size="normal" className="min-w-20">
                <ToggleButton.Indicator>Normal</ToggleButton.Indicator>
            </ToggleButton>
            <ToggleButton size="large" className="min-w-28">
                <ToggleButton.Indicator>Large</ToggleButton.Indicator>
            </ToggleButton>
        </div>
    );
}
