import { CodeViewer } from '@primereact/code-viewer';
import VerticalDemo from './demo';
import { source } from './source.auto';

export default function VerticalDoc() {
    return (
        <div>
            <h2>Vertical</h2>
            <p>
                Layout of the MeterGroup is configured with the <i>orientation</i> property that accepts either <i>horizontal</i> or <i>vertical</i> as available options.
            </p>

            <VerticalDemo />
            <br />
            <CodeViewer source={source} />
        </div>
    );
}
