'use client';

import { Button } from 'primereact/button';

export default function SizeDemo() {
    return (
        <div className="flex flex-wrap items-center justify-center gap-4">
            <Button.Root size="small">
                <i className="pi pi-check" />
                Small
            </Button.Root>
            <Button.Root>
                <i className="pi pi-check" />
                Normal
            </Button.Root>
            <Button.Root size="large">
                <i className="pi pi-check" />
                Large
            </Button.Root>
        </div>
    );
}
