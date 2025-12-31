'use client';

import { Button } from '@primereact/ui/button';

export default function IconDemo() {
    return (
        <div className="flex flex-col items-center gap-4">
            <div className="flex flex-wrap gap-4 justify-center">
                <Button.Root aria-label="Save">
                    <i className="pi pi-home" />
                </Button.Root>
                <Button.Root>
                    <i className="pi pi-user" />
                    Profile
                </Button.Root>
                <Button.Root>
                    Save
                    <i className="pi pi-check" />
                </Button.Root>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
                <Button.Root className="flex-col">
                    <i className="pi pi-search" />
                    Search
                </Button.Root>
                <Button.Root className="flex-col">
                    Update
                    <i className="pi pi-refresh" />
                </Button.Root>
            </div>
        </div>
    );
}
