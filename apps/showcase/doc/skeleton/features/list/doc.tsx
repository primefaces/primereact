import { CodeViewer } from '@primereact/code-viewer';
import ListDemo from './demo';
import { source } from './source.auto';

export default function ListDoc() {
    return (
        <div>
            <h2>List</h2>
            <p>Sample list implementation using different Skeleton components and Tailwind CSS utilities.</p>

            <ListDemo />
            <br />
            <CodeViewer source={source} />
        </div>
    );
}
