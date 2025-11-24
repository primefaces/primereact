'use client';

import { Password } from 'primereact/password';

export default function SizesDemo() {
    return (
        <div className="flex flex-col items-center gap-4">
            <Password size="small">
                <Password.Input placeholder="Small" />
            </Password>
            <Password>
                <Password.Input placeholder="Normal" />
            </Password>
            <Password size="large">
                <Password.Input placeholder="Large" />
            </Password>
        </div>
    );
}
