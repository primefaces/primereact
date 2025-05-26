import { ToggleButton } from 'primereact/togglebutton';
import * as React from 'react';

export default function BasicDemo() {
    const [pressedState, setPressedState] = React.useState(false);
    const [singleState, setSingleState] = React.useState<string | null>(null);
    const [multipleState, setMultipleState] = React.useState<string[]>([]);

    return (
        <div className="card flex justify-center items-center flex-col gap-3">
            <h2>Single</h2>
            <ToggleButton>
                <ToggleButton.Indicator>New</ToggleButton.Indicator>
            </ToggleButton>

            <h2>States</h2>
            <ToggleButton>
                <ToggleButton.Indicator>{({ togglebutton }) => (togglebutton.state.pressed ? 'On' : 'Off')}</ToggleButton.Indicator>
            </ToggleButton>

            <h2>Controlled</h2>
            <ToggleButton pressed={pressedState} onPressedChange={(e) => setPressedState(e.pressed)}>
                <ToggleButton.Indicator>New</ToggleButton.Indicator>
            </ToggleButton>

            <h2>Icon</h2>
            <ToggleButton>
                <ToggleButton.Indicator>
                    {({ togglebutton }) =>
                        togglebutton.state.pressed ? (
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
            </ToggleButton>

            <h2>Group</h2>
            <ToggleButton.Group allowEmpty={false}>
                <ToggleButton value="1">
                    <ToggleButton.Indicator>Option 1</ToggleButton.Indicator>
                </ToggleButton>
                <ToggleButton value="2">
                    <ToggleButton.Indicator>Option 2</ToggleButton.Indicator>
                </ToggleButton>
                <ToggleButton value="3">
                    <ToggleButton.Indicator>Option 3</ToggleButton.Indicator>
                </ToggleButton>
            </ToggleButton.Group>

            <h2>Group with unControlled</h2>
            <ToggleButton.Group defaultValue={'2'}>
                <ToggleButton value="1">
                    <ToggleButton.Indicator>Option 1</ToggleButton.Indicator>
                </ToggleButton>
                <ToggleButton value="2">
                    <ToggleButton.Indicator>Option 2</ToggleButton.Indicator>
                </ToggleButton>
                <ToggleButton value="3">
                    <ToggleButton.Indicator>Option 3</ToggleButton.Indicator>
                </ToggleButton>
            </ToggleButton.Group>

            <h2>Group with Controlled</h2>
            <ToggleButton.Group value={singleState} onValueChange={(e) => setSingleState(e.value)}>
                <ToggleButton value="1">
                    <ToggleButton.Indicator>Option 1</ToggleButton.Indicator>
                </ToggleButton>
                <ToggleButton value="2">
                    <ToggleButton.Indicator>Option 2</ToggleButton.Indicator>
                </ToggleButton>
                <ToggleButton value="3">
                    <ToggleButton.Indicator>Option 3</ToggleButton.Indicator>
                </ToggleButton>
            </ToggleButton.Group>

            <h2>Multiple</h2>
            <ToggleButton.Group allowEmpty={false} multiple value={multipleState} onValueChange={(e) => setMultipleState(e.value)}>
                <ToggleButton value="1">
                    <ToggleButton.Indicator>Option 1</ToggleButton.Indicator>
                </ToggleButton>
                <ToggleButton value="2">
                    <ToggleButton.Indicator>Option 2</ToggleButton.Indicator>
                </ToggleButton>
                <ToggleButton value="3">
                    <ToggleButton.Indicator>Option 3</ToggleButton.Indicator>
                </ToggleButton>
            </ToggleButton.Group>
        </div>
    );
}
