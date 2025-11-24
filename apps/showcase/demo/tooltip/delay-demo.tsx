'use client';

import { Button } from 'primereact/button';
import { Tooltip } from 'primereact/tooltip';

export default function DelayDemo() {
    return (
        <div className="flex flex-col items-center justify-center gap-8">
            <Tooltip showDelayDuration={1000} hideDelayDuration={1000}>
                <Tooltip.Trigger as={Button} severity="secondary">
                    Show Tooltip
                </Tooltip.Trigger>
                <Tooltip.Portal>
                    <Tooltip.Content>
                        <p>This is a tooltip</p>
                    </Tooltip.Content>
                </Tooltip.Portal>
            </Tooltip>
            <Tooltip.Group as="div" className="flex items-center gap-2" timeout={1000} skipTimeout={300}>
                <Tooltip>
                    <Tooltip.Trigger as={Button} severity="secondary">
                        Item 1
                    </Tooltip.Trigger>
                    <Tooltip.Portal>
                        <Tooltip.Content>
                            <p>This is a tooltip</p>
                        </Tooltip.Content>
                    </Tooltip.Portal>
                </Tooltip>
                <Tooltip>
                    <Tooltip.Trigger as={Button} severity="secondary">
                        Item 2
                    </Tooltip.Trigger>
                    <Tooltip.Portal>
                        <Tooltip.Content>
                            <p>This is a tooltip</p>
                        </Tooltip.Content>
                    </Tooltip.Portal>
                </Tooltip>
            </Tooltip.Group>
        </div>
    );
}
