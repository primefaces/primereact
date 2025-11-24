'use client';

import { Button } from 'primereact/button';
import { Tooltip } from 'primereact/tooltip';

export default function PlacementDemo() {
    return (
        <div className="flex flex-col items-center justify-center gap-12">
            <div className="flex items-center justify-center gap-6">
                <Tooltip side="top">
                    <Tooltip.Trigger as={Button} severity="secondary" variant="outlined">
                        Top
                    </Tooltip.Trigger>
                    <Tooltip.Portal>
                        <Tooltip.Content>
                            <p>Tooltip placed to the top</p>
                            <Tooltip.Arrow />
                        </Tooltip.Content>
                    </Tooltip.Portal>
                </Tooltip>
                <Tooltip side="bottom">
                    <Tooltip.Trigger as={Button} severity="secondary" variant="outlined">
                        Bottom
                    </Tooltip.Trigger>
                    <Tooltip.Portal>
                        <Tooltip.Content>
                            <p>Tooltip placed to the bottom</p>
                            <Tooltip.Arrow />
                        </Tooltip.Content>
                    </Tooltip.Portal>
                </Tooltip>
                <Tooltip side="right">
                    <Tooltip.Trigger as={Button} severity="secondary" variant="outlined">
                        Right
                    </Tooltip.Trigger>
                    <Tooltip.Portal>
                        <Tooltip.Content>
                            <p>Tooltip placed to the right</p>
                            <Tooltip.Arrow />
                        </Tooltip.Content>
                    </Tooltip.Portal>
                </Tooltip>
                <Tooltip side="left">
                    <Tooltip.Trigger as={Button} severity="secondary" variant="outlined">
                        Left
                    </Tooltip.Trigger>
                    <Tooltip.Portal>
                        <Tooltip.Content>
                            <p>Tooltip placed to the left</p>
                            <Tooltip.Arrow />
                        </Tooltip.Content>
                    </Tooltip.Portal>
                </Tooltip>
            </div>
            <div className="flex items-center justify-center gap-6">
                <Tooltip align="start">
                    <Tooltip.Trigger as={Button} severity="secondary" variant="outlined">
                        Start
                    </Tooltip.Trigger>
                    <Tooltip.Portal>
                        <Tooltip.Content>
                            <p>Tooltip aligned to the start</p>
                            <Tooltip.Arrow />
                        </Tooltip.Content>
                    </Tooltip.Portal>
                </Tooltip>
                <Tooltip align="center">
                    <Tooltip.Trigger as={Button} severity="secondary" variant="outlined">
                        Center
                    </Tooltip.Trigger>
                    <Tooltip.Portal>
                        <Tooltip.Content>
                            <p>Tooltip aligned to the center</p>
                            <Tooltip.Arrow />
                        </Tooltip.Content>
                    </Tooltip.Portal>
                </Tooltip>
                <Tooltip align="end">
                    <Tooltip.Trigger as={Button} severity="secondary" variant="outlined">
                        End
                    </Tooltip.Trigger>
                    <Tooltip.Portal>
                        <Tooltip.Content>
                            <p>Tooltip aligned to the end</p>
                            <Tooltip.Arrow />
                        </Tooltip.Content>
                    </Tooltip.Portal>
                </Tooltip>
            </div>
        </div>
    );
}
