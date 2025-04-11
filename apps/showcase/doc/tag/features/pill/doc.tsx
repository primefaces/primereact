import { CodeViewer } from '@primereact/code-viewer';
import PillDemo from './demo';
import { source } from './source.auto';

export default function PillDoc() {
    return (
        <div>
            <h2>Pill</h2>
            <p>
                Enabling <code>rounded</code>, displays a tag as a pill.
            </p>

            <PillDemo />
            <br />
            <CodeViewer source={source} />
        </div>
    );
}
