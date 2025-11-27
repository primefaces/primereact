'use client';

import { Textarea } from 'primereact/textarea';

export default function AutoResizeDemo() {
    return (
        <div className="flex justify-center">
            <Textarea autoResize rows={5} cols={30} />
        </div>
    );
}
