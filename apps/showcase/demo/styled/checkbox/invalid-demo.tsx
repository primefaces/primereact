'use client';

import { Checkbox } from 'primereact/checkbox';

export default function InvalidDemo() {
    return (
        <div className="flex items-center justify-center">
            <div className="flex items-center gap-2">
                <Checkbox.Root inputId="invalid" invalid />
                <label htmlFor="invalid" className="text-red-500 dark:text-red-400">
                    Invalid
                </label>
            </div>
        </div>
    );
}
