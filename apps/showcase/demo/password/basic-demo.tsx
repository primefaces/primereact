'use client';

import { Password } from 'primereact/password';

export default function BasicDemo() {
    return (
        <div className="flex justify-center">
            <Password>
                <Password.Input placeholder="Enter password" />
            </Password>
        </div>
    );
}
