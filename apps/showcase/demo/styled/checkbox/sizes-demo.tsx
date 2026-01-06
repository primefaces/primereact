'use client';

import { Checkbox } from 'primereact/checkbox';

export default function SizesDemo() {
    return (
        <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center gap-2">
                <Checkbox.Root inputId="small" size="small" />
                <label htmlFor="small" className="text-sm">
                    Small
                </label>
            </div>
            <div className="flex items-center gap-2">
                <Checkbox.Root inputId="normal" size="normal" />
                <label htmlFor="normal">Normal</label>
            </div>
            <div className="flex items-center gap-2">
                <Checkbox.Root inputId="large" size="large" />
                <label htmlFor="large" className="text-lg">
                    Large
                </label>
            </div>
        </div>
    );
}
