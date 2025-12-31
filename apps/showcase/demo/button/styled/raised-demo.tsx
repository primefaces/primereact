'use client';

import { Button } from '@primereact/ui/button';

export default function RaisedDemo() {
    return (
        <div className="flex justify-center flex-wrap gap-4">
            <Button.Root raised>Primary</Button.Root>
            <Button.Root severity="secondary" raised>
                Secondary
            </Button.Root>
            <Button.Root severity="success" raised>
                Success
            </Button.Root>
            <Button.Root severity="info" raised>
                Info
            </Button.Root>
            <Button.Root severity="warn" raised>
                Warn
            </Button.Root>
            <Button.Root severity="help" raised>
                Help
            </Button.Root>
            <Button.Root severity="danger" raised>
                Danger
            </Button.Root>
            <Button.Root severity="contrast" raised>
                Contrast
            </Button.Root>
        </div>
    );
}
