'use client';

import { Password } from 'primereact/password';

export default function StrengthDemo() {
    return (
        <div className="flex justify-center">
            <Password>
                <Password.Input />
                <Password.Strength />
            </Password>
        </div>
    );
}
