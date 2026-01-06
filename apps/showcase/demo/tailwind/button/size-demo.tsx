'use client';

import { Button } from '@/ui/button';

export default function SizeDemo() {
    return (
        <div className="flex flex-wrap items-center justify-center gap-4">
            <Button size="small">
                <i className="pi pi-check" />
                Small
            </Button>
            <Button>
                <i className="pi pi-check" />
                Normal
            </Button>
            <Button size="large">
                <i className="pi pi-check" />
                Large
            </Button>
        </div>
    );
}
