'use client';
import { MinusIcon, PlusIcon } from '@primereact/icons';
import type { useFieldsetOpenChangeEvent } from '@primereact/types/shared/fieldset';
import { Button } from '@primereact/ui/button';
import { Fieldset } from '@primereact/ui/fieldset';
import { useState } from 'react';

export default function ControlledToggleableDemo() {
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
            <Fieldset.Root open={open} onOpenChange={(e: useFieldsetOpenChangeEvent) => setOpen(e.value ?? false)}>
                <Fieldset.Legend>
                    <Fieldset.Trigger className="flex items-center gap-2">
                        {open ? <MinusIcon /> : <PlusIcon />}
                        Legend
                    </Fieldset.Trigger>
                </Fieldset.Legend>
                <Fieldset.Content>
                    <p className="text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </Fieldset.Content>
            </Fieldset.Root>
        </div>
    );
}
