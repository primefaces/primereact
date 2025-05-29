import type { ToggleButtonGroupValueChangeEvent } from '@primereact/types/shared/togglebutton';
import { ToggleButton } from 'primereact/togglebutton';
import * as React from 'react';

export default function ControlledGroupDemo() {
    const [value, setValue] = React.useState<string[]>([]);

    return (
        <div className="card flex items-center justify-center">
            <ToggleButton.Group allowEmpty={false} value={value} onValueChange={(e: ToggleButtonGroupValueChangeEvent) => setValue(e.value as string[])}>
                <ToggleButton value="left">
                    <ToggleButton.Indicator>
                        <i className="pi pi-align-left"></i>
                    </ToggleButton.Indicator>
                </ToggleButton>
                <ToggleButton value="center">
                    <ToggleButton.Indicator>
                        <i className="pi pi-align-center"></i>
                    </ToggleButton.Indicator>
                </ToggleButton>
                <ToggleButton value="right">
                    <ToggleButton.Indicator>
                        <i className="pi pi-align-right"></i>
                    </ToggleButton.Indicator>
                </ToggleButton>
                <ToggleButton value="justify">
                    <ToggleButton.Indicator>
                        <i className="pi pi-align-justify"></i>
                    </ToggleButton.Indicator>
                </ToggleButton>
            </ToggleButton.Group>
        </div>
    );
}
