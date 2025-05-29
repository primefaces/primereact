import { CodeViewer } from '@primereact/code-viewer';
import ControlledDemo from './demo';
import { source } from './source.auto';

export default function ControlledDoc() {
    return (
        <div>
            <h2>Controlled</h2>
            <p>
                Panels can be controlled programmatically using <i>value</i> property as a model.
            </p>

            <ControlledDemo />
            <br />
            <CodeViewer source={source} />
        </div>
    );
}
