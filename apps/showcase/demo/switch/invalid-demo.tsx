import { SwitchChangeEvent } from '@primereact/types/shared/switch';
import { Switch } from 'primereact/switch';
import * as React from 'react';

export default function InvalidDemo() {
    const [checked, setChecked] = React.useState(false);

    return (
        <div className="card flex justify-center ">
            <Switch checked={checked} onCheckedChange={(event: SwitchChangeEvent) => setChecked(event.checked)} invalid={!checked}>
                <Switch.Thumb />
            </Switch>
        </div>
    );
}
