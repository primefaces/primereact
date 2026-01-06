'use client';

import { Chip } from 'primereact/chip';

export default function IconDemo() {
    return (
        <div className="flex flex-wrap gap-2">
            <Chip.Root>
                <Chip.Icon className="pi pi-apple" />
                <Chip.Label>Apple</Chip.Label>
            </Chip.Root>
            <Chip.Root>
                <Chip.Icon className="pi pi-facebook" />
                <Chip.Label>Facebook</Chip.Label>
            </Chip.Root>
            <Chip.Root>
                <Chip.Icon className="pi pi-google" />
                <Chip.Label>Google</Chip.Label>
            </Chip.Root>
            <Chip.Root>
                <Chip.Icon className="pi pi-microsoft" />
                <Chip.Label>Microsoft</Chip.Label>
                <Chip.RemoveIcon />
            </Chip.Root>
            <Chip.Root>
                <Chip.Icon className="pi pi-github" />
                <Chip.Label>GitHub</Chip.Label>
                <Chip.RemoveIcon asChild>
                    <i className="pi pi-minus-circle" />
                </Chip.RemoveIcon>
            </Chip.Root>
        </div>
    );
}
