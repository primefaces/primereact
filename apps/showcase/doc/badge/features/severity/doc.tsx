import { CodeViewer } from '@primereact/code-viewer';
import SeverityDemo from './demo';
import { source } from './source.auto';

export default function SeverityDoc() {
    return (
        <div>
            <h2>Severity</h2>
            <p>Severity defines the variant of a badge.</p>

            <SeverityDemo />
            <br />
            <CodeViewer source={source} />
        </div>
    );
}
