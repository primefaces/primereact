'use client';

import { Button } from '@/ui/button';
import { Badge } from 'primereact/badge';

export default function BadgeDemo() {
    return (
        <div className="flex justify-center flex-wrap gap-4">
            <Button type="button">
                Emails
                <Badge.Root severity="secondary" shape="circle">
                    2
                </Badge.Root>
            </Button>

            <Button type="button" variant="outlined">
                <i className="pi pi-users" />
                Messages
                <Badge.Root severity="contrast" shape="circle">
                    2
                </Badge.Root>
            </Button>

            <Badge.Overlay>
                <Button type="button" variant="outlined">
                    <i className="pi pi-bell" />
                </Button>
                <Badge.Root severity="info" className="animate-pulse" />
            </Badge.Overlay>
        </div>
    );
}
