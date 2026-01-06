'use client';

import { Password } from 'primereact/password';

export default function DisabledDemo() {
    return (
        <div className="flex justify-center">
            <Password.Root disabled>
                <Password.Input placeholder="Disabled" />
            </Password.Root>
        </div>
    );
}
