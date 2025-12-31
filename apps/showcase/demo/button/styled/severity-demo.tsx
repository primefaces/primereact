'use client';

import { Button } from '@primereact/ui/button';

export default function SeverityDemo() {
    return (
        <div className="flex justify-center flex-wrap gap-4">
            <Button.Root>Primary</Button.Root>
            <Button.Root severity="secondary">Secondary</Button.Root>
            <Button.Root severity="success">Success</Button.Root>
            <Button.Root severity="info">Info</Button.Root>
            <Button.Root severity="warn">Warn</Button.Root>
            <Button.Root severity="help">Help</Button.Root>
            <Button.Root severity="danger">Danger</Button.Root>
            <Button.Root severity="contrast">Contrast</Button.Root>
        </div>
    );
}
