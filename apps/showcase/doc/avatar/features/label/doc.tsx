import { CodeViewer } from '@primereact/code-viewer';
import LabelDemo from './demo';
import { source } from './source.auto';

export default function LabelDoc() {
    return (
        <div>
            <h2>Label</h2>
            <p>A letter Avatar is defined with the label property.</p>

            <LabelDemo />
            <br />
            <CodeViewer source={source} />
        </div>
    );
}
