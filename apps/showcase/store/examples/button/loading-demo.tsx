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
        <div className="card flex flex-wrap gap-4 justify-center">
            <Button type="button" onClick={load} disabled={loading}>
                {loading ? <i className="pi pi-spinner animate-spin" /> : <i className="pi pi-check" />}
                {loading ? 'Loading...' : 'Search'}
            </Button>
            <Button type="button" onClick={load} disabled={loading} iconOnly>
                {loading ? <i className="pi pi-spinner animate-spin" /> : <i className="pi pi-check" />}
            </Button>
        </div>
    );
}
