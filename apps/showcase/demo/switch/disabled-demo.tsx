'use client';

import { Switch } from 'primereact/switch';

export default function DisabledDemo() {
    return (
        <div className="flex justify-center">
            <Switch.Root disabled>
                <Switch.Control>
                    <Switch.Thumb />
                </Switch.Control>
            </Switch.Root>
        </div>
    );
}
