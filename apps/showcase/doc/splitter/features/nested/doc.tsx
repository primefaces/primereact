import { CodeViewer } from '@primereact/code-viewer';
import NestedDemo from './demo';
import { source } from './source.auto';

export default function NestedDoc() {
    return (
        <div>
            <h2>Nested</h2>
            <p>Splitters can be combined to create advanced layouts.</p>

            <NestedDemo />
            <br />
            <CodeViewer source={source} />
        </div>
    );
}
