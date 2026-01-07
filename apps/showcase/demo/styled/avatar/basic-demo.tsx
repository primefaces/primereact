'use client';

import { Avatar } from '@primereact/ui/avatar';

export default function BasicDemo() {
    return (
        <div className="flex items-center justify-center gap-4">
            <Avatar.Root size="large" shape="circle">
                <Avatar.Image src="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" />
                <Avatar.Fallback>A</Avatar.Fallback>
            </Avatar.Root>
        </div>
    );
}
