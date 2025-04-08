import { CodeViewer } from '@primereact/code-viewer';
import MinMaxDemo from './demo';
import { source } from './source.auto';

export default function BasicDoc() {
    return (
        <div>
            <h2>MinMax</h2>
            <p>
                Boundaries are configured with the <i>min</i> and <i>max</i> values whose defaults are 0 and 100 respectively.
            </p>

            <MinMaxDemo />
            <br />
            <CodeViewer source={source} />
        </div>
    );
}
