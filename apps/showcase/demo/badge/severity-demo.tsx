'use client';

import { Badge } from 'primereact/badge';

export default function SeverityDemo() {
    return (
        <div className="flex flex-wrap justify-center gap-2">
            <Badge.Root>Default</Badge.Root>
            <Badge.Root severity="secondary">Secondary</Badge.Root>
            <Badge.Root severity="success">Success</Badge.Root>
            <Badge.Root severity="info">Info</Badge.Root>
            <Badge.Root severity="warn">Warning</Badge.Root>
            <Badge.Root severity="danger">Danger</Badge.Root>
            <Badge.Root severity="contrast">Contrast</Badge.Root>
        </div>
    );
}
