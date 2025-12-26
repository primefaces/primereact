'use client';

import { Password } from 'primereact/password';

export default function BasicDemo() {
    return (
        <div className="flex justify-center">
            <Password.Root>
                <Password.Input placeholder="Enter password" />
            </Password.Root>
        </div>
    );
}
