'use client';

import { ToggleButton } from 'primereact/togglebutton';

export default function GroupDemo() {
    return (
        <div className="flex items-center justify-center">
            <ToggleButton.Group allowEmpty={false}>
                <ToggleButton.Root value="left">
                    <ToggleButton.Indicator>
                        <i className="pi pi-align-left"></i>
                    </ToggleButton.Indicator>
                </ToggleButton.Root>
                <ToggleButton.Root value="center">
                    <ToggleButton.Indicator>
                        <i className="pi pi-align-center"></i>
                    </ToggleButton.Indicator>
                </ToggleButton.Root>
                <ToggleButton.Root value="right">
                    <ToggleButton.Indicator>
                        <i className="pi pi-align-right"></i>
                    </ToggleButton.Indicator>
                </ToggleButton.Root>
                <ToggleButton.Root value="justify">
                    <ToggleButton.Indicator>
                        <i className="pi pi-align-justify"></i>
                    </ToggleButton.Indicator>
                </ToggleButton.Root>
            </ToggleButton.Group>
        </div>
    );
}
