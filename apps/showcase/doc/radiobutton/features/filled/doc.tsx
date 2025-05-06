import { CodeViewer } from '@primereact/code-viewer';
import FilledDemo from './demo';
import { source } from './source.auto';

export default function FilledDoc() {
    return (
        <div>
            <h2>Filled</h2>
            <p>
                Specify the <code>variant</code> property as <code>filled</code> to display the component with a higher visual emphasis than the default outlined style.
            </p>

            <FilledDemo />
            <br />
            <CodeViewer source={source} />
        </div>
    );
}
