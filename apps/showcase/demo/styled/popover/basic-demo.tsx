import { Times } from '@primeicons/react/times';
import { Button } from '@primereact/ui/button';
import { InputText } from '@primereact/ui/inputtext';
import { Popover } from '@primereact/ui/popover';

export default function BasicDemo() {
    return (
        <div className="flex justify-center min-h-60">
            <Popover.Root>
                <Popover.Trigger className="px-2.5 h-8 rounded-lg border border-surface flex items-center justify-center gap-2 bg-surface-0 dark:bg-surface-950 hover:bg-surface-100 dark:hover:bg-surface-900 data-open:bg-surface-100 dark:data-open:bg-surface-900 transition-colors text-sm font-medium">
                    Show Popover
                </Popover.Trigger>
                <Popover.Portal>
                    <Popover.Positioner sideOffset={12} side="bottom" align="start">
                        <Popover.Popup className="max-w-72 w-full">
                            <Popover.Arrow />
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
