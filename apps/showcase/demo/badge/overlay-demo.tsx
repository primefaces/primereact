'use client';

import { Badge } from 'primereact/badge';

export default function BasicDemo() {
    return (
        <div className="flex flex-wrap justify-center gap-6">
            <Badge.Overlay>
                <i className="pi pi-bell" style={{ fontSize: '2rem' }} />
                <Badge.Root shape="circle">2</Badge.Root>
            </Badge.Overlay>
            <Badge.Overlay>
                <i className="pi pi-calendar" style={{ fontSize: '2rem' }} />
                <Badge.Root shape="circle" severity="danger">
                    4
                </Badge.Root>
            </Badge.Overlay>
            <Badge.Overlay>
                <i className="pi pi-envelope" style={{ fontSize: '2rem' }} />
                <Badge.Root shape="circle"></Badge.Root>
            </Badge.Overlay>
        </div>
    );
}
