'use client';

import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Toolbar } from 'primereact/toolbar';

export default function BasicDemo() {
    return (
        <div>
            <Toolbar.Root>
                <Toolbar.Start>
                    <Button.Root className="mr-2" severity="secondary" variant="text">
                        <i className="pi pi-plus"></i>
                    </Button.Root>
                    <Button.Root className="mr-2" severity="secondary" variant="text">
                        <i className="pi pi-print"></i>
                    </Button.Root>
                    <Button.Root severity="secondary" variant="text">
                        <i className="pi pi-upload"></i>
                    </Button.Root>
                </Toolbar.Start>
                <Toolbar.Center>
                    <InputText placeholder="Search" />
                </Toolbar.Center>
                <Toolbar.End>
                    <Button.Root>Save</Button.Root>
                </Toolbar.End>
            </Toolbar.Root>
        </div>
    );
}
