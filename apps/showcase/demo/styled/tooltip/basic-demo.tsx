'use client';

import { Button } from '@primereact/ui/button';
import { Tooltip } from '@primereact/ui/tooltip';

export default function BasicDemo() {
    return (
        <div className="flex items-center justify-center gap-6">
            <Tooltip.Root>
                <Tooltip.Trigger as={Button} severity="secondary" variant="outlined">
                    Show Tooltip
                </Tooltip.Trigger>
                <Tooltip.Portal>
                    <Tooltip.Content>
                        <p>Tooltip</p>
                        <Tooltip.Arrow />
                    </Tooltip.Content>
                </Tooltip.Portal>
            </Tooltip.Root>
        </div>
    );
}
