'use client';

import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Toolbar } from 'primereact/toolbar';

export default function ToolbarPT() {
    return (
        <Toolbar className="w-full">
            <Toolbar.Start>
                <Button className="mr-2" severity="secondary" variant="text">
                    <i className="pi pi-plus"></i>
                </Button>
                <Button className="mr-2" severity="secondary" variant="text">
                    <i className="pi pi-print"></i>
                </Button>
                <Button severity="secondary" variant="text">
                    <i className="pi pi-upload"></i>
                </Button>
            </Toolbar.Start>
            <Toolbar.Center>
                <InputText placeholder="Search" />
            </Toolbar.Center>
            <Toolbar.End>
                <Button className="mr-2" severity="secondary" variant="text">
                    <i className="pi pi-search"></i>
                </Button>
            </Toolbar.End>
        </Toolbar>
    );
}
