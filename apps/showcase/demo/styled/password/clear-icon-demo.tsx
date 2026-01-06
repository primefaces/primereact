'use client';

import { Password } from '@primereact/ui/password';

export default function BasicDemo() {
    return (
        <div className="flex justify-center">
            <Password.Root inputClass="w-56">
                <Password.Input />
                <Password.ClearIcon />
            </Password.Root>
        </div>
    );
}
