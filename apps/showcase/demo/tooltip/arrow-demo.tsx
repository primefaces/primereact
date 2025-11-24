'use client';

import { Button } from 'primereact/button';
import { Tooltip } from 'primereact/tooltip';

export default function ArrowDemo() {
    return (
        <div className="flex items-center justify-center gap-6">
            <Tooltip>
                <Tooltip.Trigger as={Button} severity="secondary" variant="outlined">
                    Show Tooltip
                </Tooltip.Trigger>
                <Tooltip.Portal>
                    <Tooltip.Content>
                        <p>Tooltip with arrow</p>
                        <Tooltip.Arrow />
                    </Tooltip.Content>
                </Tooltip.Portal>
            </Tooltip>
            <Tooltip>
                <Tooltip.Trigger as={Button} severity="secondary" variant="outlined">
                    Show Tooltip
                </Tooltip.Trigger>
                <Tooltip.Portal>
                    <Tooltip.Content>
                        <p>Tooltip without arrow</p>
                    </Tooltip.Content>
                </Tooltip.Portal>
            </Tooltip>
        </div>
    );
}
