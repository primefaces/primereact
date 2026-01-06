'use client';

import { Chip } from 'primereact/chip';

export default function TemplateDemo() {
    return (
        <div>
            <Chip.Root className="py-0 pl-0 pr-4">
                <span className="bg-primary text-primary-contrast rounded-full w-8 h-8 flex items-center justify-center">P</span>
                <span className="ml-2 font-medium">PRIME</span>
            </Chip.Root>
        </div>
    );
}
