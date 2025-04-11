import { CodeViewer } from '@primereact/code-viewer';
import DataTableDemo from './demo';
import { source } from './source.auto';

export default function DataTableDoc() {
    return (
        <div>
            <h2>DataTable</h2>
            <p>Sample DataTable implementation using different Skeleton components and Tailwind CSS utilities.</p>

            <DataTableDemo />
            <br />
            <CodeViewer source={source} />
        </div>
    );
}
