'use client';
import { ChevronDownIcon } from '@primereact/icons/chevrondown';
import type { usePanelOpenChangeEvent } from '@primereact/types/shared/panel';
import { Button } from '@primereact/ui/button';
import { Panel } from '@primereact/ui/panel';
import { useState } from 'react';

export default function ControlledDemo() {
    const [open, setOpen] = useState(true);

    return (
        <div className="space-y-4">
            <div className="flex gap-2 justify-center">
                <Button onClick={() => setOpen(true)} severity={open ? 'primary' : 'secondary'}>
                    Open
                </Button>
                <Button onClick={() => setOpen(false)} severity={!open ? 'primary' : 'secondary'}>
                    Close
                </Button>
            </div>
            <Panel.Root open={open} onOpenChange={(e: usePanelOpenChangeEvent) => setOpen(e.value ?? false)}>
                <Panel.Header>
                    <Panel.Title>Controlled Panel</Panel.Title>
                    <Panel.Trigger>
                        <ChevronDownIcon className="transition-transform duration-200 [[data-open]_&]:rotate-180" />
                    </Panel.Trigger>
                </Panel.Header>
                <Panel.Content>
                    <p className="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </Panel.Content>
            </Panel.Root>
        </div>
    );
}
