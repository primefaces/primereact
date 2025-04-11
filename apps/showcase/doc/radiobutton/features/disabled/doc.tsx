import { CodeViewer } from '@primereact/code-viewer';
import DisabledDemo from './demo';
import { source } from './source.auto';

export default function DisabledDoc() {
    return (
        <div>
            <h2>Disabled</h2>
            <p>
                When <code>disabled</code> is present, the element cannot be edited and focused.
            </p>

            <DisabledDemo />
            <br />
            <CodeViewer source={source} />
        </div>
    );
}
