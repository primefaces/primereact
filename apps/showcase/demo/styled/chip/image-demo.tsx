'use client';

import { Chip } from 'primereact/chip';

export default function ImageDemo() {
    return (
        <div className="flex flex-wrap gap-2">
            <Chip.Root>
                <Chip.Image src="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" />
                <Chip.Label>Amy Elsner</Chip.Label>
            </Chip.Root>
            <Chip.Root>
                <Chip.Image src="https://primefaces.org/cdn/primevue/images/avatar/asiyajavayant.png" />
                <Chip.Label>Asiya Javayant</Chip.Label>
            </Chip.Root>
            <Chip.Root>
                <Chip.Image src="https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png" />
                <Chip.Label>Onyama Limba</Chip.Label>
            </Chip.Root>
            <Chip.Root>
                <Chip.Image src="https://primefaces.org/cdn/primevue/images/avatar/xuxuefeng.png" />
                <Chip.Label>Xuxue Feng</Chip.Label>
                <Chip.RemoveIcon />
            </Chip.Root>
        </div>
    );
}
