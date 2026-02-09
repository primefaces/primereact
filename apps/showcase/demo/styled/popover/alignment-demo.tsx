'use client';
import { Button } from '@primereact/ui/button';
import { InputText } from '@primereact/ui/inputtext';
import { Popover } from '@primereact/ui/popover';
import * as React from 'react';
import { Times } from '@primeicons/react/times';

const sides = ['top', 'right', 'bottom', 'left'] as const;
const aligns = ['start', 'center', 'end'] as const;

export default function BasicDemo() {
    const [side, setSide] = React.useState<(typeof sides)[number]>('bottom');
    const [align, setAlign] = React.useState<(typeof aligns)[number]>('start');

    return (
        <div className="flex flex-col items-center min-h-60">
            <div className="flex flex-col items-center justify-center gap-4 **:capitalize">
                <div className="flex items-center justify-center gap-4 ">
                    {sides.map((s: (typeof sides)[number]) => (
                        <Button
                            key={s}
                            severity={side === s ? 'primary' : 'secondary'}
                            variant={side === s ? undefined : 'outlined'}
                            size="small"
                            onClick={() => setSide(s)}
                        >
                            {s}
                        </Button>
                    ))}
                </div>
                <div className="flex items-center justify-center gap-4">
                    {aligns.map((a: (typeof aligns)[number]) => (
                        <Button
                            key={a}
                            severity={align === a ? 'primary' : 'secondary'}
                            variant={align === a ? undefined : 'outlined'}
                            size="small"
                            onClick={() => setAlign(a)}
                        >
                            {a}
                        </Button>
                    ))}
                </div>
            </div>
            <Popover.Root open>
                <Popover.Trigger className="my-60 px-2.5 h-8 rounded-lg border border-surface flex items-center justify-center gap-2 bg-surface-0 dark:bg-surface-950 hover:bg-surface-100 dark:hover:bg-surface-900 data-open:bg-surface-100 dark:data-open:bg-surface-900 transition-colors text-sm font-medium">
                    Show Popover
                </Popover.Trigger>
                <Popover.Portal>
                    <Popover.Positioner sideOffset={12} side={side} align={align}>
                        <Popover.Content className="max-w-72 w-full">
                            <div className="flex items-start justify-between w-full">
                                <h3 className="text-surface-900 dark:text-surface-0 text-sm font-medium">Create a New Workspace</h3>
                            </div>
                            <p className="text-surface-500 dark:text-surface-400 text-sm mt-2">
                                Name your workspace to get started. You can always change this later.
                            </p>
                            <InputText placeholder="Workspace Name" className="mt-3 w-full" />
                            <div className="flex items-center mt-6">
                                <span className="text-xs text-surface-500 dark:text-surface-400 ">1 of 3</span>
                                <div className="flex-1 flex items-center justify-end gap-2">
                                    <Button severity="secondary" variant="outlined" size="small">
                                        Back
                                    </Button>
                                    <Button size="small">Next</Button>
                                </div>
                            </div>
                            <Popover.Close as={Button} severity="secondary" variant="text" size="small" iconOnly className="absolute top-2 right-2">
                                <Times />
                            </Popover.Close>
                            <Popover.Arrow />
                        </Popover.Content>
                    </Popover.Positioner>
                </Popover.Portal>
            </Popover.Root>
        </div>
    );
}
