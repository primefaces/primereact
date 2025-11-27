'use client';

import { Textarea } from 'primereact/textarea';

export default function BasicDemo() {
    return (
        <div className="flex flex-col items-center gap-4">
            <Textarea size="small" placeholder="Small" rows={3} />
            <Textarea placeholder="Normal" rows={3} />
            <Textarea size="large" placeholder="Large" rows={3} />
        </div>
    );
}
