import { SwitchChangeEvent } from '@primereact/types/shared/switch';
import { Switch } from 'primereact/switch';
import * as React from 'react';

export default function CustomizationDemo() {
    const [checked, setChecked] = React.useState(true);

    return (
        <div className="card flex justify-center items-center gap-2">
            <label htmlFor="custom" className="flex items-center gap-2 bg-surface-50 hover:bg-surface-100 dark:bg-slate-700 hover:dark:bg-slate-800 p-4 rounded-md">
                <div className="flex flex-col gap-1">
                    <p className="!m-0 !text-medium">Try Beta Features</p>
                    <p className="!m-0 !text-sm !text-slate-400">Experience upcoming features before they&apos;re officially released.</p>
                </div>

                <Switch inputId="custom" checked={checked} onCheckedChange={(event: SwitchChangeEvent) => setChecked(event.checked)}>
                    <Switch.Control className={`${checked ? '!bg-blue-300' : '!bg-surface-300 dark:!bg-surface-500'} !rounded-md`}>
                        <Switch.Thumb className="!bg-blue-900" />
                    </Switch.Control>
                </Switch>
            </label>
        </div>
    );
}
