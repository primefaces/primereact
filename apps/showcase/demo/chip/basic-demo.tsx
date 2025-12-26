'use client';

import { Chip } from 'primereact/chip';

export default function BasicDemo() {
    return (
        <div className="flex flex-wrap gap-2">
            <Chip.Root>
                <Chip.Label>Action</Chip.Label>
            </Chip.Root>
            <Chip.Root>
                <Chip.Label>Comedy</Chip.Label>
            </Chip.Root>
            <Chip.Root>
                <Chip.Label>Mystery</Chip.Label>
            </Chip.Root>
            <Chip.Root>
                <Chip.Label>Thriller</Chip.Label>
                <Chip.RemoveIcon />
            </Chip.Root>
        </div>
    );
}
