'use client';

import { Badge } from 'primereact/badge';

export default function BadgePT() {
    return (
        <div className="flex flex-wrap gap-8">
            <Badge.Root shape="circle">2</Badge.Root>
            <Badge.Overlay>
                <i className="pi pi-bell" style={{ fontSize: '2rem' }} />
                <Badge.Root shape="circle">4</Badge.Root>
            </Badge.Overlay>
        </div>
    );
}
