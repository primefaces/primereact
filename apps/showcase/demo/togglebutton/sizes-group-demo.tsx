import { ToggleButton } from 'primereact/togglebutton';

export default function SizesGroupDemo() {
    return (
        <div className="card flex flex-col gap-4 items-center justify-center">
            <ToggleButton.Group size="small" multiple>
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
            <ToggleButton.Group size="normal" multiple>
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
            <ToggleButton.Group size="large" multiple>
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
