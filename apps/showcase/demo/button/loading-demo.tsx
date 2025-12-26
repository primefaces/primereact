'use client';

import { Button } from 'primereact/button';
import { useState } from 'react';

export default function LoadingDemo() {
    const [loading, setLoading] = useState(false);

    const load = () => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
        }, 2000);
    };

    return (
        <div className="flex flex-wrap gap-4 justify-center">
            <Button.Root type="button" onClick={load} disabled={loading}>
                {loading ? <i className="pi pi-spinner animate-spin" /> : <i className="pi pi-check" />}
                {loading ? 'Loading...' : 'Search'}
            </Button.Root>
            <Button.Root type="button" onClick={load} disabled={loading} iconOnly>
                {loading ? <i className="pi pi-spinner animate-spin" /> : <i className="pi pi-check" />}
            </Button.Root>
        </div>
    );
}
