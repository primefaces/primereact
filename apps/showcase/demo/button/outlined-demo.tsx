'use client';

import { Button } from 'primereact/button';

export default function OutlinedDemo() {
    return (
        <div className="flex justify-center flex-wrap gap-4">
            <Button.Root variant="outlined">Primary</Button.Root>
            <Button.Root severity="secondary" variant="outlined">
                Secondary
            </Button.Root>
            <Button.Root severity="success" variant="outlined">
                Success
            </Button.Root>
            <Button.Root severity="info" variant="outlined">
                Info
            </Button.Root>
            <Button.Root severity="warn" variant="outlined">
                Warn
            </Button.Root>
            <Button.Root severity="help" variant="outlined">
                Help
            </Button.Root>
            <Button.Root severity="danger" variant="outlined">
                Danger
            </Button.Root>
            <Button.Root severity="contrast" variant="outlined">
                Contrast
            </Button.Root>
        </div>
    );
}
