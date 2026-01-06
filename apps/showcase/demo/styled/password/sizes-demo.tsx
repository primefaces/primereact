'use client';

import { Password } from 'primereact/password';

export default function SizesDemo() {
    return (
        <div className="flex flex-col items-center gap-4">
            <Password.Root size="small">
                <Password.Input placeholder="Small" />
            </Password.Root>
            <Password.Root>
                <Password.Input placeholder="Normal" />
            </Password.Root>
            <Password.Root size="large">
                <Password.Input placeholder="Large" />
            </Password.Root>
        </div>
    );
}
