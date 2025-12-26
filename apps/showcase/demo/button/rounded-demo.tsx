'use client';

import { Button } from 'primereact/button';

export default function RoundedDemo() {
    return (
        <div className="flex justify-center flex-wrap gap-4">
            <Button.Root rounded>Primary</Button.Root>
            <Button.Root severity="secondary" rounded>
                Secondary
            </Button.Root>
            <Button.Root severity="success" rounded>
                Success
            </Button.Root>
            <Button.Root severity="info" rounded>
                Info
            </Button.Root>
            <Button.Root severity="warn" rounded>
                Warn
            </Button.Root>
            <Button.Root severity="help" rounded>
                Help
            </Button.Root>
            <Button.Root severity="danger" rounded>
                Danger
            </Button.Root>
            <Button.Root severity="contrast" rounded>
                Contrast
            </Button.Root>
        </div>
    );
}
