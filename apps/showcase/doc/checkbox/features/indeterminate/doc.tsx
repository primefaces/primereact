import { CodeViewer } from '@primereact/code-viewer';
import IndeterminateDemo from './demo';
import { source } from './source.auto';

export default function IndeterminateDoc() {
    return (
        <div>
            <h2>Indeterminate</h2>
            <p>
                When <i>indeterminate</i> is present, the checkbox masks the actual value visually.
            </p>

            <IndeterminateDemo />
            <br />
            <CodeViewer source={source} />
        </div>
    );
}
