'use client';

import { Switch } from 'primereact/switch';

export default function UncontrolledDemo() {
    return (
        <div className="flex justify-center">
            <Switch.Root defaultChecked>
                <Switch.Control>
                    <Switch.Thumb />
                </Switch.Control>
            </Switch.Root>
        </div>
    );
}
