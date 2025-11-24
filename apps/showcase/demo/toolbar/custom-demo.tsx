'use client';

import { Avatar } from 'primereact/avatar';
import { Button } from 'primereact/button';
import { Toolbar } from 'primereact/toolbar';

export default function CustomDemo() {
    return (
        <div>
            <Toolbar style={{ borderRadius: '3rem', padding: '1rem 1rem 1rem 1.5rem' }}>
                <Toolbar.Start>
                    <Button variant="text" plain>
                        Files
                    </Button>
                    <Button variant="text" plain>
                        Edit
                    </Button>
                    <Button variant="text" plain>
                        View
                    </Button>
                </Toolbar.Start>
                <Toolbar.End>
                    <div className="flex items-center gap-2">
                        <Button severity="contrast" size="small">
                            Share
                        </Button>
                        <Avatar shape="circle">
                            <Avatar.Image src="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" />
                            <Avatar.Fallback>A</Avatar.Fallback>
                        </Avatar>
                    </div>
                </Toolbar.End>
            </Toolbar>
        </div>
    );
}
