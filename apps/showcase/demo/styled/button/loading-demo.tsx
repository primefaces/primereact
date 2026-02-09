'use client';
import { Button } from '@primereact/ui/button';
import { useState } from 'react';
import { Check } from '@primeicons/react/check';
import { Spinner } from '@primeicons/react/spinner';

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
            <Button type="button" onClick={load} disabled={loading}>
                {loading ? <Spinner className="animate-spin" /> : <Check />}
                {loading ? 'Loading...' : 'Search'}
            </Button>
            <Button type="button" onClick={load} disabled={loading} iconOnly>
                {loading ? <Spinner className="animate-spin" /> : <Check />}
            </Button>
        </div>
    );
}
