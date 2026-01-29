import { InputText } from '@primereact/ui/inputtext';
import { Label } from '@primereact/ui/label';
import { Popover } from '@primereact/ui/popover';

export default function BasicDemo() {
    return (
        <div className="flex items-center justify-center">
            <Popover.Root>
                <Popover.Trigger>Show Popover</Popover.Trigger>
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
            </Popover.Root>
        </div>
    );
}
