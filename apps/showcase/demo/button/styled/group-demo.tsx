'use client';

import { Button } from '@primereact/ui/button';

export default function GroupDemo() {
    return (
        <div className="flex justify-center">
            <Button.Group>
                <Button.Root>
                    <i className="pi pi-check" />
                    Save
                </Button.Root>
                <Button.Root>
                    <i className="pi pi-trash" />
                    Delete
                </Button.Root>
                <Button.Root>
                    <i className="pi pi-times" />
                    Cancel
                </Button.Root>
            </Button.Group>
        </div>
    );
}
