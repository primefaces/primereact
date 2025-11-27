'use client';

import { Password } from 'primereact/password';

export default function DisabledDemo() {
    return (
        <div className="flex justify-center">
            <Password disabled>
                <Password.Input placeholder="Disabled" />
            </Password>
        </div>
    );
}
