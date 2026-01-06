'use client';

import { Password } from 'primereact/password';

export default function StrengthDemo() {
    return (
        <div className="flex justify-center">
            <Password.Root>
                <Password.Input />
                <Password.Strength />
            </Password.Root>
        </div>
    );
}
