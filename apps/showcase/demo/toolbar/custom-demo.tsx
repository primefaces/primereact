'use client';

import { Avatar } from 'primereact/avatar';
import { Button } from 'primereact/button';
import { Toolbar } from 'primereact/toolbar';

export default function CustomDemo() {
    return (
        <div>
            <Toolbar.Root style={{ borderRadius: '3rem', padding: '1rem 1rem 1rem 1.5rem' }}>
                <Toolbar.Start>
                    <Button.Root variant="text" plain>
                        Files
                    </Button.Root>
                    <Button.Root variant="text" plain>
                        Edit
                    </Button.Root>
                    <Button.Root variant="text" plain>
                        View
                    </Button.Root>
                </Toolbar.Start>
                <Toolbar.End>
                    <div className="flex items-center gap-2">
                        <Button.Root severity="contrast" size="small">
                            Share
                        </Button.Root>
                        <Avatar.Root shape="circle">
                            <Avatar.Image src="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" />
                            <Avatar.Fallback>A</Avatar.Fallback>
                        </Avatar.Root>
                    </div>
                </Toolbar.End>
            </Toolbar.Root>
        </div>
    );
}
