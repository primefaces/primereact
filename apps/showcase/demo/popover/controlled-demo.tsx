import { usePopoverOpenChangeEvent } from '@primereact/types/shared/popover';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Label } from 'primereact/label';
import { Popover } from 'primereact/popover';
import React from 'react';

function ControlledDemo() {
    const [open, setOpen] = React.useState(false);

    return (
        <div className="card flex gap-4 justify-center items-center">
            <Button onClick={() => setOpen(!open)}>Show Popover</Button>

            <Popover open={open} onOpenChange={(e: usePopoverOpenChangeEvent) => setOpen(e.value)}>
                <Popover.Trigger>Popover Trigger</Popover.Trigger>
                <Popover.Portal>
                    <Popover.Content>
                        <div className="flex flex-col gap-2 p-2 max-w-xs">
                            <p className="text-lg font-semibold mb-0.5">Dimensions</p>
                            <div className="grid grid-cols-2 items-center">
                                <Label htmlFor="width">Width</Label>
                                <InputText id="width" fluid />
                            </div>
                            <div className="grid grid-cols-2 items-center">
                                <Label htmlFor="maxWidth">Max. width</Label>
                                <InputText id="maxWidth" fluid />
                            </div>
                            <div className="grid grid-cols-2 items-center">
                                <Label htmlFor="height">Height</Label>
                                <InputText id="height" fluid />
                            </div>
                            <div className="grid grid-cols-2 items-center">
                                <Label htmlFor="maxHeight">Max. height</Label>
                                <InputText id="maxHeight" fluid />
                            </div>
                        </div>
                        <Popover.Close className="absolute top-4 right-4" />
                    </Popover.Content>
                </Popover.Portal>
            </Popover>
        </div>
    );
}

export default ControlledDemo;
