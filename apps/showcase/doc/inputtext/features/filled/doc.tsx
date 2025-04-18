import { CodeViewer } from '@primereact/code-viewer';
import FilledDemo from './demo';
import { source } from './source.auto';

export default function FilledDoc() {
    return (
        <div>
            <h2>Filled</h2>
            <p>
                Specify the <i>variant</i> property as <i>filled</i> to display the component with a higher visual emphasis than the default <i>outlined</i> style.
            </p>

            <FilledDemo />
            <br />
            <CodeViewer source={source} />
        </div>
    );
}
