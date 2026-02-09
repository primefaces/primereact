import { ToggleButton } from '@primereact/ui/togglebutton';
import { ToggleButtonGroup } from '@primereact/ui/togglebuttongroup';

export default function BasicDemo() {
    return (
        <div className="flex items-center justify-center">
            <ToggleButtonGroup allowEmpty={false}>
                <ToggleButton.Root value="left">
                    <ToggleButton.Indicator>
                        <i className="pi pi-align-left" />
                    </ToggleButton.Indicator>
                </ToggleButton.Root>
                <ToggleButton.Root value="center">
                    <ToggleButton.Indicator>
                        <i className="pi pi-align-center" />
                    </ToggleButton.Indicator>
                </ToggleButton.Root>
                <ToggleButton.Root value="right">
                    <ToggleButton.Indicator>
                        <i className="pi pi-align-right" />
                    </ToggleButton.Indicator>
                </ToggleButton.Root>
                <ToggleButton.Root value="justify">
                    <ToggleButton.Indicator>
                        <i className="pi pi-align-justify" />
                    </ToggleButton.Indicator>
                </ToggleButton.Root>
            </ToggleButtonGroup>
        </div>
    );
}
