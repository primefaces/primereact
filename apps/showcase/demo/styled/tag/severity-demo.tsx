'use client';

import { Tag } from 'primereact/tag';

export default function SeverityDemo() {
    return (
        <div className="flex flex-wrap justify-center gap-2">
            <Tag.Root>
                <Tag.Label>Primary</Tag.Label>
            </Tag.Root>
            <Tag.Root severity="secondary">
                <Tag.Label>Secondary</Tag.Label>
            </Tag.Root>
            <Tag.Root severity="success">
                <Tag.Label>Success</Tag.Label>
            </Tag.Root>
            <Tag.Root severity="info">
                <Tag.Label>Info</Tag.Label>
            </Tag.Root>
            <Tag.Root severity="warn">
                <Tag.Label>Warn</Tag.Label>
            </Tag.Root>
            <Tag.Root severity="danger">
                <Tag.Label>Danger</Tag.Label>
            </Tag.Root>
            <Tag.Root severity="contrast">
                <Tag.Label>Contrast</Tag.Label>
            </Tag.Root>
        </div>
    );
}
