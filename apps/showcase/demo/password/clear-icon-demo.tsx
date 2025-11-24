'use client';

import { Password } from 'primereact/password';

export default function BasicDemo() {
    return (
        <div className="flex justify-center">
            <Password inputClass="w-56">
                <Password.Input />
                <Password.ClearIcon />
            </Password>
        </div>
    );
}
