'use client';

import { Chip } from 'primereact/chip';

export default function ChipPT() {
    return (
        <div className="flex flex-wrap gap-8">
            <Chip.Root>
                <Chip.Icon className="pi pi-microsoft" />
                <Chip.Label>Microsoft</Chip.Label>
                <Chip.RemoveIcon />
            </Chip.Root>
            <Chip.Root>
                <Chip.Image src="https://primefaces.org/cdn/primevue/images/avatar/xuxuefeng.png" />
                <Chip.Label>Xuxue Feng</Chip.Label>
                <Chip.RemoveIcon />
            </Chip.Root>
        </div>
    );
}
