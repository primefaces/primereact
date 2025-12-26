'use client';

import { Tag } from 'primereact/tag';

export default function TemplateDemo() {
    return (
        <div className="flex justify-center">
            <Tag.Root
                className="flex items-center gap-2 px-3"
                style={{ border: '2px solid var(--border-color)', background: 'transparent', color: 'var(--text-color)' }}
            >
                <img
                    alt="Country"
                    src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png"
                    className="flag flag-it"
                    style={{ width: '18px' }}
                />
                <span className="text-base">Italy</span>
            </Tag.Root>
        </div>
    );
}
