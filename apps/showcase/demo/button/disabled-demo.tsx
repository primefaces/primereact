'use client';

import { Button } from 'primereact/button';

export default function DisabledDemo() {
    return (
        <div className="flex justify-center">
            <Button.Root disabled>Submit</Button.Root>
        </div>
    );
}
