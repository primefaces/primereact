'use client';

import { Button } from '@primereact/ui/button';

export default function TextDemo() {
    return (
        <div className="flex justify-center flex-wrap gap-4">
            <Button.Root variant="text">Primary</Button.Root>
            <Button.Root severity="secondary" variant="text">
                Secondary
            </Button.Root>
            <Button.Root severity="success" variant="text">
                Success
            </Button.Root>
            <Button.Root severity="info" variant="text">
                Info
            </Button.Root>
            <Button.Root severity="warn" variant="text">
                Warn
            </Button.Root>
            <Button.Root severity="help" variant="text">
                Help
            </Button.Root>
            <Button.Root severity="danger" variant="text">
                Danger
            </Button.Root>
            <Button.Root severity="contrast" variant="text">
                Contrast
            </Button.Root>
        </div>
    );
}
