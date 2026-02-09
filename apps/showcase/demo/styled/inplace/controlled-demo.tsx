'use client';
import { InplaceRootChangeEvent } from '@primereact/types/shared/inplace';
import { Button } from '@primereact/ui/button';
import { Inplace } from '@primereact/ui/inplace';
import { InputText } from '@primereact/ui/inputtext';
import * as React from 'react';

export default function ControlledDemo() {
    const [active, setActive] = React.useState<boolean>(false);

    return (
        <div className="max-w-3xs mx-auto w-full">
            <Inplace.Root active={active} onActiveChange={(e: InplaceRootChangeEvent) => setActive(e.active)}>
                <div className="font-mono uppercase text-xs opacity-50 pl-2 mb-1">Name</div>
                <Inplace.Display className="w-full text-sm">John Doe</Inplace.Display>
                <Inplace.Content className="flex items-center gap-1.5">
                    <InputText placeholder="Enter name" className="flex-1" fluid autoFocus />
                </Inplace.Content>
                <div className="flex items-center gap-2 mt-2">
                    <Button onClick={() => setActive((prev) => !prev)} className="flex-1" variant="outlined" severity="secondary">
                        {active ? 'Cancel' : 'Edit Name'}
                    </Button>
                    {active && (
                        <Inplace.Close as={Button} onClick={() => setActive(false)} className="flex-1" fluid variant="outlined">
                            Save
                        </Inplace.Close>
                    )}
                </div>
            </Inplace.Root>
        </div>
    );
}
