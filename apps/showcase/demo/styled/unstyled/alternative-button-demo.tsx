'use client';

import { Button } from 'primereact/button';

export default function AlternativeButtonDemo() {
    return (
        <div className="flex justify-center">
            <Button.Root unstyled>
                Check
                <i className="pi pi-check" />
            </Button.Root>
        </div>
    );
}
