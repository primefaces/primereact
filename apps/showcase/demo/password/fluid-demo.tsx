'use client';

import { Password } from 'primereact/password';

export default function FluidDemo() {
    return (
        <div>
            <Password.Root fluid>
                <Password.Input />
            </Password.Root>
        </div>
    );
}
