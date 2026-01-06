'use client';

import { Avatar } from 'primereact/avatar';

const ShapeDemo = () => {
    return (
        <div className="flex items-center justify-center gap-4">
            <Avatar.Root shape="circle" size="large">
                <Avatar.Image src="https://primefaces.org/cdn/primevue/images/organization/walter.jpg" />
                <Avatar.Fallback>W</Avatar.Fallback>
            </Avatar.Root>
            <Avatar.Root shape="square" size="large">
                <Avatar.Image src="https://primefaces.org/cdn/primevue/images/organization/walter.jpg" />
                <Avatar.Fallback>W</Avatar.Fallback>
            </Avatar.Root>
        </div>
    );
};

export default ShapeDemo;
