'use client';

import { Avatar } from 'primereact/avatar';

export default function ImageDemo() {
    return (
        <div className="flex items-center justify-center gap-4">
            <Avatar.Root size="large" shape="circle">
                <Avatar.Image src="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" />
                <Avatar.Fallback>A</Avatar.Fallback>
            </Avatar.Root>
            <Avatar.Root size="large" shape="circle">
                <Avatar.Image src="https://primefaces.org/cdn/primevue/images/avatar/asiyajavayant.png" />
                <Avatar.Fallback>A</Avatar.Fallback>
            </Avatar.Root>
            <Avatar.Root size="large" shape="circle">
                <Avatar.Image src="https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png" />
                <Avatar.Fallback>O</Avatar.Fallback>
            </Avatar.Root>
        </div>
    );
}
