'use client';

import { Tag } from 'primereact/tag';

export default function BasicDemo() {
    return (
        <div className="flex flex-wrap justify-center gap-2">
            <Tag.Root rounded>
                <Tag.Label>Primary</Tag.Label>
            </Tag.Root>
            <Tag.Root severity="secondary" rounded>
                <Tag.Label>Secondary</Tag.Label>
            </Tag.Root>
            <Tag.Root severity="success" rounded>
                <Tag.Label>Success</Tag.Label>
            </Tag.Root>
            <Tag.Root severity="info" rounded>
                <Tag.Label>Info</Tag.Label>
            </Tag.Root>
            <Tag.Root severity="warn" rounded>
                <Tag.Label>Warn</Tag.Label>
            </Tag.Root>
            <Tag.Root severity="danger" rounded>
                <Tag.Label>Danger</Tag.Label>
            </Tag.Root>
            <Tag.Root severity="contrast" rounded>
                <Tag.Label>Contrast</Tag.Label>
            </Tag.Root>
        </div>
    );
}
