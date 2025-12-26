'use client';

import { Tag } from 'primereact/tag';

export default function BasicDemo() {
    return (
        <div className="flex justify-center">
            <Tag.Root>
                <Tag.Label>New</Tag.Label>
            </Tag.Root>
        </div>
    );
}
