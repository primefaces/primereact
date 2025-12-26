'use client';

import { Button } from 'primereact/button';

export default function RaisedTextDemo() {
    return (
        <div className="flex justify-center flex-wrap gap-4">
            <Button.Root raised variant="text">
                Primary
            </Button.Root>
            <Button.Root raised severity="secondary" variant="text">
                Secondary
            </Button.Root>
            <Button.Root raised severity="success" variant="text">
                Success
            </Button.Root>
            <Button.Root raised severity="info" variant="text">
                Info
            </Button.Root>
            <Button.Root raised severity="warn" variant="text">
                Warn
            </Button.Root>
            <Button.Root raised severity="help" variant="text">
                Help
            </Button.Root>
            <Button.Root raised severity="danger" variant="text">
                Danger
            </Button.Root>
            <Button.Root raised severity="contrast" variant="text">
                Contrast
            </Button.Root>
        </div>
    );
}
