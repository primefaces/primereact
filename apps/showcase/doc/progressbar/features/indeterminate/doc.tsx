import { CodeViewer } from '@primereact/code-viewer';
import IndeterminateDemo from './demo';
import { source } from './source.auto';

export default function IndeterminateDoc() {
    return (
        <div>
            <h2>Indeterminate</h2>
            <p>
                For progresses with no value to track, set the <i>mode</i> property to <i>indeterminate</i>.
            </p>

            <IndeterminateDemo />
            <br />
            <CodeViewer source={source} />
        </div>
    );
}
