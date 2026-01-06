'use client';

import type {
    ToggleButtonChangeEvent,
    ToggleButtonGroupValueChangeEvent,
    ToggleButtonIndicatorInstance
} from '@primereact/types/shared/togglebutton';
import { ToggleButton } from 'primereact/togglebutton';
import * as React from 'react';

export default function BasicDemo() {
    const [pressedState, setPressedState] = React.useState<boolean>(false);
    const [singleState, setSingleState] = React.useState<string | null>(null);
    const [multipleState, setMultipleState] = React.useState<string[]>([]);

    return (
        <div className="flex justify-center items-center flex-col gap-3">
            <h2>Single</h2>
            <ToggleButton.Root>
                <ToggleButton.Indicator>New</ToggleButton.Indicator>
            </ToggleButton.Root>

            <h2>States</h2>
            <ToggleButton.Root>
                <ToggleButton.Indicator>
                    {({ togglebutton }: ToggleButtonIndicatorInstance) => (togglebutton?.state.pressed ? 'On' : 'Off')}
                </ToggleButton.Indicator>
            </ToggleButton.Root>

            <h2>Controlled</h2>
            <ToggleButton.Root pressed={pressedState} onPressedChange={(e: ToggleButtonChangeEvent) => setPressedState(e.pressed)}>
                <ToggleButton.Indicator>New</ToggleButton.Indicator>
            </ToggleButton.Root>

            <h2>Icon</h2>
            <ToggleButton.Root>
                <ToggleButton.Indicator>
                    {({ togglebutton }: ToggleButtonIndicatorInstance) =>
                        togglebutton?.state.pressed ? (
                            <>
                                <i className="pi pi-lock"></i>Locked
                            </>
                        ) : (
                            <>
                                <i className="pi pi-lock-open"></i>Unlocked
                            </>
                        )
                    }
                </ToggleButton.Indicator>
            </ToggleButton.Root>

            <h2>Group</h2>
            <ToggleButton.Group allowEmpty={false}>
                <ToggleButton.Root value="1">
                    <ToggleButton.Indicator>Option 1</ToggleButton.Indicator>
                </ToggleButton.Root>
                <ToggleButton.Root value="2">
                    <ToggleButton.Indicator>Option 2</ToggleButton.Indicator>
                </ToggleButton.Root>
                <ToggleButton.Root value="3">
                    <ToggleButton.Indicator>Option 3</ToggleButton.Indicator>
                </ToggleButton.Root>
            </ToggleButton.Group>

            <h2>Group with unControlled</h2>
            <ToggleButton.Group defaultValue={'2'}>
                <ToggleButton.Root value="1">
                    <ToggleButton.Indicator>Option 1</ToggleButton.Indicator>
                </ToggleButton.Root>
                <ToggleButton.Root value="2">
                    <ToggleButton.Indicator>Option 2</ToggleButton.Indicator>
                </ToggleButton.Root>
                <ToggleButton.Root value="3">
                    <ToggleButton.Indicator>Option 3</ToggleButton.Indicator>
                </ToggleButton.Root>
            </ToggleButton.Group>

            <h2>Group with Controlled</h2>
            <ToggleButton.Group value={singleState} onValueChange={(e: ToggleButtonGroupValueChangeEvent) => setSingleState(e.value as string)}>
                <ToggleButton.Root value="1">
                    <ToggleButton.Indicator>Option 1</ToggleButton.Indicator>
                </ToggleButton.Root>
                <ToggleButton.Root value="2">
                    <ToggleButton.Indicator>Option 2</ToggleButton.Indicator>
                </ToggleButton.Root>
                <ToggleButton.Root value="3">
                    <ToggleButton.Indicator>Option 3</ToggleButton.Indicator>
                </ToggleButton.Root>
            </ToggleButton.Group>

            <h2>Multiple</h2>
            <ToggleButton.Group
                allowEmpty={false}
                multiple
                value={multipleState}
                onValueChange={(e: ToggleButtonGroupValueChangeEvent) => setMultipleState(e.value as string[])}
            >
                <ToggleButton.Root value="1">
                    <ToggleButton.Indicator>Option 1</ToggleButton.Indicator>
                </ToggleButton.Root>
                <ToggleButton.Root value="2">
                    <ToggleButton.Indicator>Option 2</ToggleButton.Indicator>
                </ToggleButton.Root>
                <ToggleButton.Root value="3">
                    <ToggleButton.Indicator>Option 3</ToggleButton.Indicator>
                </ToggleButton.Root>
            </ToggleButton.Group>
        </div>
    );
}
