'use client';

import { Switch } from '@primereact/ui/switch';

export default function Example() {
    return (
        <>
            <div className="flex justify-center items-center gap-2">
                <label htmlFor="switch">Off</label>
                <Switch.Root inputId="switch">
                    <Switch.Control>
                        <Switch.Thumb />
                    </Switch.Control>
                </Switch.Root>
                <label htmlFor="switch">On</label>
            </div>
        </>
    );
}
