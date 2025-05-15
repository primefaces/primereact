import Link from 'next/link';
import { Button } from 'primereact/button';

export default function LinkDemo() {
    return (
        <div className="card flex justify-center gap-4">
            <Button link>Link</Button>
            <Button as="a" href="https://reactjs.org/" target="_blank" rel="noopener">
                External
            </Button>
            <Button as={Link} href="/">
                Router
            </Button>
        </div>
    );
}
