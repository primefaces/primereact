'use client';
import { Times } from '@primeicons/react/times';
import { usePopoverOpenChangeEvent } from '@primereact/types/shared/popover';
import { Button } from '@primereact/ui/button';
import { InputText } from '@primereact/ui/inputtext';
import { Popover } from '@primereact/ui/popover';
import React from 'react';

export default function ControlledDemo() {
    const [open, setOpen] = React.useState(false);

    return (
        <div className="flex gap-4 justify-center items-center">
            <Button onClick={() => setOpen(!open)}>Show Popover</Button>

            <Popover.Root open={open} onOpenChange={(e: usePopoverOpenChangeEvent) => setOpen(e.value)}>
                <Popover.Trigger>Popover Trigger</Popover.Trigger>
                <Popover.Portal>
                    <Popover.Positioner sideOffset={12}>
                        <Popover.Popup className="max-w-72 w-full">
                            <Popover.Header>
                                <Popover.Title>Create a New Workspace</Popover.Title>
                                <Popover.Close as={Button} severity="secondary" variant="text" size="small" iconOnly>
                                    <Times />
                                </Popover.Close>
                            </Popover.Header>
                            <Popover.Content>
                                <Popover.Description>Name your workspace to get started. You can always change this later.</Popover.Description>
                                <InputText placeholder="Workspace Name" className="mt-3 w-full" />
                            </Popover.Content>
                            <Popover.Footer>
                                <span className="text-xs text-surface-500 dark:text-surface-400 ">1 of 3</span>
                                <div className="flex-1 flex items-center justify-end gap-2">
                                    <Button severity="secondary" variant="outlined" size="small">
                                        Back
                                    </Button>
                                    <Button size="small">Next</Button>
                                </div>
                            </Popover.Footer>
                        </Popover.Popup>
                    </Popover.Positioner>
                </Popover.Portal>
            </Popover.Root>
        </div>
    );
}
