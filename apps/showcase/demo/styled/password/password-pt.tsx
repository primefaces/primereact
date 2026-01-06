'use client';

import { Password } from '@primereact/ui/password';

export default function PasswordPTDemo() {
    return (
        <Password.Root>
            <Password.Input />
            <Password.Strength />
        </Password.Root>
    );
}
