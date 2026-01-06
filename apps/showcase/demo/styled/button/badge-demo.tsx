'use client';

import { Button } from '@primereact/ui/button';
import { Badge } from 'primereact/badge';

export default function BadgeDemo() {
    return (
        <div className="flex justify-center flex-wrap gap-4">
            <Button.Root type="button">
                Emails
                <Badge.Root severity="secondary" shape="circle">
                    2
                </Badge.Root>
            </Button.Root>

            <Button.Root type="button" variant="outlined">
                <i className="pi pi-users" />
                Messages
                <Badge.Root severity="contrast" shape="circle">
                    2
                </Badge.Root>
            </Button.Root>

            <Badge.Overlay>
                <Button.Root type="button" variant="outlined">
                    <i className="pi pi-bell" />
                </Button.Root>
                <Badge.Root severity="info" className="animate-pulse" />
            </Badge.Overlay>
        </div>
    );
}
