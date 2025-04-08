import { CodeViewer } from '@primereact/code-viewer';
import LabelDemo from './demo';
import { source } from './source.auto';

export default function LabelDoc() {
    return (
        <div>
            <h2>Label</h2>
            <p>
                The default orientation of the labels is horizontal, and the vertical alternative is available through the
                <i>labelOrientation</i> option.
            </p>

            <LabelDemo />
            <br />
            <CodeViewer source={source} />
        </div>
    );
}
