import { CodeViewer } from '@primereact/code-viewer';
import CardDemo from './demo';
import { source } from './source.auto';

export default function CardDoc() {
    return (
        <div>
            <h2>Card</h2>
            <p>Sample card implementation using different Skeleton components and Tailwind CSS utilities.</p>

            <CardDemo />
            <br />
            <CodeViewer source={source} />
        </div>
    );
}
