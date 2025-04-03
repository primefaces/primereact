import { CodeViewer } from '@primereact/code-viewer';
import DynamicDemo from './demo';
import { source } from './source.auto';

export default function DynamicDoc() {
    return (
        <div>
            <h2>Dynamic</h2>
            <p>Checkboxes can be generated using a list of values.</p>

            <DynamicDemo />
            <br />
            <CodeViewer source={source} />
        </div>
    );
}
