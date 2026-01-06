'use client';

import { Button } from '@/ui/button';
import Link from 'next/link';

export default function LinkDemo() {
    return (
        <div className="flex justify-center gap-4">
            <Button variant="link">Link</Button>
            <Button as="a" href="https://reactjs.org/" target="_blank" rel="noopener">
                External
            </Button>
            <Button as={Link} href="/">
                Router
            </Button>
        </div>
    );
}
