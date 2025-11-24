'use client';

import { Password } from 'primereact/password';

export default function FluidDemo() {
    return (
        <div>
            <Password fluid>
                <Password.Input />
            </Password>
        </div>
    );
}
