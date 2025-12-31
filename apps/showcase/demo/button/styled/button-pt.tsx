'use client';

import { Badge } from 'primereact/badge';
import { Button } from 'primereact/button';

export default function ButtonPT() {
    return (
        <Button.Root severity="secondary">
            <i className="pi pi-user" />
            Profile
            <Badge.Root severity="contrast" shape="circle">
                2
            </Badge.Root>
        </Button.Root>
    );
}
