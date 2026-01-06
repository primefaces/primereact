'use client';

import { Password } from 'primereact/password';

export default function FilledDemo() {
    return (
        <div className="flex justify-center">
            <Password.Root variant="filled">
                <Password.Input />
            </Password.Root>
        </div>
    );
}
