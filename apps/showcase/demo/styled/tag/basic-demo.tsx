'use client';

import { Tag } from '@primereact/ui/tag';

export default function BasicDemo() {
    return (
        <div className="flex justify-center">
            <Tag.Root>
                <Tag.Label>New</Tag.Label>
            </Tag.Root>
        </div>
    );
}
