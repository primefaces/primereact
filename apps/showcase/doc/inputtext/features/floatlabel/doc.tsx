import { CodeViewer } from '@primereact/code-viewer';
import FloatLabelDemo from './demo';
import { source } from './source.auto';

export default function FloatLabelDoc() {
    return (
        <div>
            <h2>Float Label</h2>
            <p>FloatLabel visually integrates a label with its form element.</p>

            <FloatLabelDemo />
            <br />
            <CodeViewer source={source} />
        </div>
    );
}
