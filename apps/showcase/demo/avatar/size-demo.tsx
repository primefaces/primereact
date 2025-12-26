'use client';

import { Avatar } from 'primereact/avatar';

const SizeDemo = () => {
    return (
        <div className="flex items-center justify-center gap-4">
            <Avatar.Root shape="circle" size="normal">
                <Avatar.Image src="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" />
                <Avatar.Fallback>CC</Avatar.Fallback>
            </Avatar.Root>
            <Avatar.Root shape="circle" size="large">
                <Avatar.Image src="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" />
                <Avatar.Fallback>CC</Avatar.Fallback>
            </Avatar.Root>
            <Avatar.Root shape="circle" size="xlarge">
                <Avatar.Image src="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" />
                <Avatar.Fallback>CC</Avatar.Fallback>
            </Avatar.Root>
        </div>
    );
};

export default SizeDemo;
