'use client';

import Link from 'next/link';
import { Button } from 'primereact/button';

export default function LinkDemo() {
    return (
        <div className="flex justify-center gap-4">
            <Button.Root variant="link">Link</Button.Root>
            <Button.Root as="a" href="https://reactjs.org/" target="_blank" rel="noopener">
                External
            </Button.Root>
            <Button.Root as={Link} href="/">
                Router
            </Button.Root>
        </div>
    );
}
