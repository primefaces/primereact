'use client';

import { Switch } from '@/ui/switch';

export default function Example() {
    return (
        <>
            <div className="flex justify-center items-center gap-2">
                <label htmlFor="switch">Off</label>
                <Switch inputId="switch" />
                <label htmlFor="switch">On</label>
            </div>
        </>
    );
}
